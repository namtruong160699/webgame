<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Rating;
use App\Models\UserFavourite;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;
use App\Services\ProcessViewService;

class GameController extends FrontendController
{
    public function __construct()
    {
        parent::__construct();
    }
    
	public function index(Request $request)
    {
        $url = $request->segment(1);
        $url = preg_split('/(-)/i',$url);
        if ($id = array_pop($url))
        {
            $game = Game::with('keywords')->findOrFail($id);
            $keywords = [];
            foreach($game->keywords as $keyword)
            {
                $keywords[] = [
                    'id'    => $keyword->id,
                    'name'  => $keyword->name
                ];
            }
            $ratings = Rating::with('user:id,name')->where('ra_game_id',$id)->orderBy('id','DESC')->paginate(20);

            // Gom nhóm lại tổng xem
            $ratingsDashboard = Rating::groupBy('ra_number')
                ->where('ra_game_id', $id)
                ->select(DB::raw('count(ra_number) as total'), DB::raw('sum(ra_number) as sum'))
                ->addSelect('ra_number')
                ->get()
                ->toArray();
            $arrayRatings = [];
            if(!empty($ratingsDashboard))
            {
                for ($i = 5; $i >=1; $i --)
                {
                    $arrayRatings[$i] = [
                        "total" => 0,
                        "sum" => 0,
                        "ra_number" => 0
                    ];
                    foreach ($ratingsDashboard as $item)
                    {
                        if ($item['ra_number'] == $i)
                        {
                            $arrayRatings[$i] = $item;
                            continue;
                        }
                    }
                }
            }

            ProcessViewService::view('games','played','game', $id);

            $viewData = [
                'game'          => $game,
                'ratings'       => $ratings,
                'arrayRatings'  => $arrayRatings,
                'keywords'      => $keywords,
                'gameSuggests'  => $this->getGameSuggests($game->category_id, $id)
            ];

            return view('games.gamePlay', $viewData);
        }
    }

    public function gameFavGame(Request $request)
    {
        $game_id = $request['game_id'];

        $fav = \DB::table('user_favourite')
            ->where('game_id', $game_id)
            ->where('user_id', get_data_user('web'))
            ->first();

        if(!$fav) {
            $newFav = new UserFavourite;
            $newFav->game_id = $game_id;
            $newFav->user_id = get_data_user('web');
            $newFav->fav = 1;
            $newFav->save();
            $is_fav = 1;
        }elseif($fav->fav == 1) {
            \DB::table('user_favourite')
                ->where('game_id', $game_id)
                ->where('user_id', get_data_user('web'))
                ->delete();
                $is_fav = 0;
        }elseif($fav->fav == 0) {
            \DB::table('user_favourite')
                ->where('game_id', $game_id)
                ->where('user_id', get_data_user('web'))
                ->update(['fav'=> 1] );
                $is_fav = 1;
        }
        $response = array(
            'is_fav'=>$is_fav,
        );
        return response()->json($response, 200);
    }

    private function getGameSuggests($categoryId, $game_id)
    {
        $games = Game::where([
            'category_id'   => $categoryId
        ])
            ->where('id', '<>', $game_id)
            ->orderByDesc('id')
            ->select('id','name','file_game','avatar','played','video')
            ->limit(6)
            ->get();

        return $games;
    }

    public function ajax_comments(Request $request)
    {
        $game_id = $request->idGame;
        $ratings = Rating::with('user:id,name')->where('ra_game_id',$game_id)->orderBy('id','DESC')->paginate(20);

        return view('components.comments', compact('ratings'))->render();
    }

    public function getContactGame(Request $request)
    {
        $url = $request->segment(3);
        $url = preg_split('/(-)/i',$url);
        if ($id = array_pop($url))
        {
            $game = Game::find($id);
            return view('games.contact', compact('game'));
        }
    }

    public function postContactGame(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'email'                 => 'required',
            'content'               => 'required',
            'g-recaptcha-response'  => 'required|captcha'
        ],[
            'email.required'                => 'Vui lòng nhập email của bạn',
            'content.required'              => 'Vui lòng nhập nội dung',
            'g-recaptcha-response.required' => 'Google reCAPTCHA does not accept this submission. Try again please, or contact to Site support services.'
        ]);

        if(!$validator->passes()) {
            return response()->json(['status'=>0, 'error'=>$validator->errors()->toArray()]);
        }else {
            $contact = new Contact;
            $contact->game_id = $request->game_id;
            $contact->email = $request->email;
            $contact->content = $request->content;
            $contact->save();

            return response()->json(['status'=> 'success','msg'=>'Thanks.Your message has been sent to our team!']);
        }
    }
}

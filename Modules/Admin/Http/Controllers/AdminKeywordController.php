<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Keyword;
use Illuminate\Support\Str;
use Carbon\Carbon;

class AdminKeywordController extends Controller
{
    public function index()
    {
        $keywords = Keyword::paginate(10);

        $viewData = [
            'keywords'  => $keywords
        ];

        return view('admin::keywords.index', $viewData);
    }

    public function create()
    {
        return view('admin::keywords.create');
    }

    public function store(Request $request)
    {
        $data = $request->except('_token');
        $data['slug'] = Str::slug($request->name);
        $data['created_at'] = Carbon::now();
        $data['updated_at'] = Carbon::now();
        $id = Keyword::insertGetId($data);

        return redirect()->back();
    }

    public function edit($id)
    {
        $keyword = Keyword::find($id);
        return view('admin::keywords.update', compact('keyword'));
    }

    public function update(Request $request, $id)
    {
        $keyword = Keyword::find($id);
        $data = $request->except('_token');
        $data['slug'] = Str::slug($request->name);
        $data['updated_at'] = Carbon::now();
        $keyword->update($data);

        return redirect()->back();
    }

    public function hot($id)
    {
        $keyword = Keyword::find($id);
        $keyword->hot = ! $keyword->hot;
        $keyword->save();

        return redirect()->back();
    }

    public function delete($id)
    {
        $keyword = Keyword::find($id);
        if($keyword) $keyword->delete();
        return view('admin::keywords.index', compact('keyword'));
    }
}

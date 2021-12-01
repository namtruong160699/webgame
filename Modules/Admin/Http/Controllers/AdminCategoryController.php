<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Category;
use Illuminate\Support\Facades\Log;

class AdminCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $categories = Category::select('id','name','title_seo','active','show_homepage')->get();
        $viewData = [
            'categories' => $categories
        ];
        return view('admin::categories.index', $viewData);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('admin::categories.create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        $this->insertOrUpdate($request);
        return redirect()->route('admin.get.list.category');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('admin::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('admin::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }

    public function insertOrUpdate($request, $id='')
    {
        $code = 1;
        try {
            $category = new Category();
            if ($id)
            {
                $category = Category::find($id);
            }
            $category->name = $request->name;
            $category->slug = str_slug($request->name);
            $category->icon = str_slug($request->icon);
            $category->title_seo = $request->title_seo ? $request->title_seo : $request->name;
            $category->description_seo = $request->description_seo;
            $category->save();
        } catch (\Exception $exception) {
            $code = 0;
            Log::error("[Error insertOrUpdate Categories]".$exception->getMessage());
        }

        return $code;
    }

    public function action($action, $id)
    {
        $messages = '';
        if($action)
        {
            $category = Category::find($id);
            switch ($action) {
                case 'homepage':
                    $category->show_homepage = $category->show_homepage ? 0 : 1;
                    $messages = 'Cập nhật thành công';
                    $category->save();
                    break;
            }

        }
        return redirect()->back()->with('success',$messages);
    }
}

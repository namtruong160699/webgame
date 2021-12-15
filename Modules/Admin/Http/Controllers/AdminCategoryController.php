<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Category;
use Illuminate\Support\Facades\Log;

class AdminCategoryController extends Controller
{
    public function index()
    {
        $categories = Category::select('id','name','title_seo','active','show_homepage')->get();
        $viewData = [
            'categories' => $categories
        ];
        return view('admin::categories.index', $viewData);
    }

    public function create()
    {
        return view('admin::categories.create');
    }

    public function store(Request $request)
    {
        $this->insertOrUpdate($request);
        return redirect()->route('admin.get.list.category');
    }

    public function edit($id)
    {
        $category = Category::find($id);
        return view('admin::categories.update', compact('category'));
    }

    public function update(Request $request, $id)
    {
        $this->insertOrUpdate($request, $id);
        return redirect()->route('admin.get.list.category');
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
            $category->color = $request->color;
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

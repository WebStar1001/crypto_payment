<?php

namespace App\Http\Controllers\Faq;

use App\Models\Faq\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;

class FaqController extends Controller
{

    public function createFaqs()
    {
        $data['title'] = "Create New Faq";
        return view('faqs.admin.create', $data);
    }

    public function storeFaqs(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);
        $in = $request->except('_method', '_token');
        Faq::create($in);
        $notification = array('message' => 'FAQS Created Successfully.', 'alert-type' => 'success');
        return back()->with($notification);
    }

    public function allFaqs()
    {
        $data['title'] = "All Question";
        $data['faqs'] = Faq::orderBy('id', 'desc')->paginate(10);
        return view('faqs.admin.index', $data);
    }

    public function editFaqs($id)
    {
        $data['title'] = "Edit Faqs";
        $data['faqs'] = Faq::findOrFail($id);
        return view('faqs.admin.edit', $data);
    }

    public function updateFaqs(Request $request, $id)
    {
        $faqs = Faq::findOrFail($id);
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);
        $in = $request->except('_method', '_token');
        $faqs->fill($in)->save();

        $notification = array('message' => 'FAQS Updated Successfully.', 'alert-type' => 'success');
        return back()->with($notification);

    }

    public function deleteFaqs(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);
        Faq::destroy($request->id);
        $notification = array('message' => 'FAQS Deleted Successfully.', 'alert-type' => 'success');
        return back()->with($notification);
    }

    public function showFaqs()
    {
        $data['faq'] = Faq::all();
        return view('faqs.user.index', $data);
    }
}

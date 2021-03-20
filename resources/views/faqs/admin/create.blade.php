@extends('layouts.master',['activeSideNav' => active_side_nav()])
@section('title', $title)
@section('content')


    <div class="container my-5">
        <div class="row">
            <div class="col-lg-12">
                <a href="{{route('faqs-all')}}" class="btn btn-success btn-md pull-right ">
                    <i class="fa fa-eye"></i> All Faqs
                </a>
                <br>
            </div>
        </div>
        <div class="row">

            <div class="col-md-12">

                <form method="post" class="form-horizontal" action="">
                    @csrf

                    <div class="form-body">

                        <div class="row">
                            <div class="col-md-12">

                                <div class="form-group">
                                    <label class="col-md-12"><strong style="text-transform: uppercase;">Question
                                            Title</strong></label>
                                    <div class="col-md-12 ">
                                        <input name="title" class="form-control form-control-lg"
                                               placeholder="Question Title" required/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-md-12"><strong style="text-transform: uppercase;">Question
                                            Answer</strong></label>
                                    <div class="col-md-12 ">
                                        <textarea name="description" id="area1" rows="10"
                                                  class="form-control form-control-lg" required
                                                  placeholder="Question Answer"></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary btn-block bold btn-lg uppercase"><i
                                                class="fa fa-send"></i> Create FAQS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div><!-- row -->
                    </div>
                </form>
            </div>
        </div>
    </div>




@stop
@section('script')

@stop

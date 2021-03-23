@extends('layouts.master',['activeSideNav' => active_side_nav()])
<link rel="stylesheet" href="{{ asset('css/main.css') }}">
@section('content')
    <div class="container py-5">
        <div class="row justify-content-center">
            <section class="faq-area" id="faq">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-8 text-center">
                            <div class="section-title">
                                <h1><em>Frequently Questions</em></h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-sm-9">
                            <img src="{{asset('images/FAQ.png')}}" style="width: 100%;height:100%"/>
                        </div>
                    </div>
                    <div class="row mt-5">
                        @foreach($faq as $key => $data)
                            @if($key++ % 2)
                                <div class="col-lg-6 col-sm-12">
                                    <div id="accordion{{$data->id}}" class="accordion-wrapper">
                                        <div class="card">
                                            <div class="card-header" id="headingOne{{$data->id}}">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link" data-toggle="collapse"
                                                            data-target="#collapseOne{{$data->id}}"
                                                            aria-expanded="false" aria-controls="collapseOne"
                                                            style="font-size:22px;">
                                                        {{__($data->title)}}
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne{{$data->id}}" class="collapse"
                                                 aria-labelledby="headingOne{{$data->id}}"
                                                 data-parent="#accordion{{$data->id}}">
                                                <div class="card-body" style="font-size:18px;color:white;">
                                                    {{__($data->description)}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @else
                                <div class="col-lg-6 col-sm-12">
                                    <div id="accordion_2{{$data->id}}" class="accordion-wrapper">
                                        <div class="card">
                                            <div class="card-header" id="headingTwo_2{{$data->id}}">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseTwo_2{{$data->id}}"
                                                            aria-expanded="false" aria-controls="collapseTwo_2"
                                                            style="font-size:22px;">
                                                        {{__($data->title)}}
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo_2{{$data->id}}" class="collapse"
                                                 aria-labelledby="headingTwo_2{{$data->id}}"
                                                 data-parent="#accordion_2{{$data->id}}">
                                                <div class="card-body" style="font-size:18px;color:white;">
                                                    {{__($data->description)}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
                </div>
            </section>
        </div>
    </div>
@endsection

@section('style')
    <link rel="stylesheet" href="{{ asset('plugins/jasny-bootstrap/css/jasny-bootstrap.min.css') }}">
@endsection

@section('script')
    <script src="{{ asset('plugins/jasny-bootstrap/js/jasny-bootstrap.min.js') }}"></script>
    <script src="{{ asset('plugins/cvalidator/cvalidator-language-en.js') }}"></script>
    <script src="{{ asset('plugins/cvalidator/cvalidator.js') }}"></script>
    <script>
        "use strict";

        $(document).ready(function () {
            $('#ticketForm').cValidate({
                rules: {
                    'title': 'required|max:255',
                    'content': 'required|max:500',
                    'attachment': 'mimetypes:jpg,jpeg,png,doc,docx,pdf,txt|max:1024',
                }
            });
        });
    </script>
@endsection


@extends('layouts.master', ['hideBreadcrumb' => $visualPage->settings['hide_breadcrumb'], 'cmbPage' => $visualPage,'activeSideNav'=>active_side_nav()])

@section('title', $visualPage->title)

@section('content')
    <div class="cmb-content-wrapper" data-name="Main Wrapper" id="cmb-content-wrapper">
        {{ view_html(short_code($visualPage->body)) }}
    </div>
@endsection

@section('style')
    <link data-link="cmb-style.css" href="{{ asset('plugins/cm-visual-editor/cmb-style.css') }}" id="cmb-default-style" rel="stylesheet">

    <link href="{{ asset('plugins/cm-visual-editor/vendor/grid/grid.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/lightbox/lightbox.css') }}" rel="stylesheet" type="text/css">

    <link rel="stylesheet" href="{{ asset('plugins/cm-visual-editor/vendor/animate/animate.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/cm-visual-editor/vendor/animate/cmb-animate.css') }}">

    <link href="{{ asset('plugins/cm-visual-editor/visual-editor-element-style.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/fonts-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset("storage/css/cm-visual-builder/style-{$visualPage->id}.css") }}" rel="stylesheet">
@endsection

@section('script')
    <script src="{{ asset('plugins/cm-visual-editor/vendor/grid/grid.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/slider.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/lightbox/lightbox.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/live-page.js') }}"></script>
@endsection

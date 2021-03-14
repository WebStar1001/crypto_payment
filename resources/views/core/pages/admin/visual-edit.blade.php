@extends('layouts.master', ['hideBreadcrumb' => $visualPage->settings['hide_breadcrumb'], 'cmbPage' => $visualPage])

@section('content')
    <div class="cmb-content-wrapper" data-name="Main Wrapper" id="cmb-content-wrapper">
        {{ view_html(short_code($visualPage->body)) }}
    </div>
    <div id="cmb-admin-controller">
        <a class="pl-1" href="javascript:" id="cmb-admin-controller-edit">{{ __('Edit Page') }}<i class="fa fa-pencil float-right"></i></a>
        <a class="pl-1" href="javascript:" id="cmb-admin-controller-save">{{ __('Save Page') }}<i class="fa fa-save float-right"></i></a>
        <a class="d-none pl-1" href="javascript:" id="cmb-admin-controller-preview">{{ __('Preview Page') }}<i class="fa fa-eye float-right"></i></a>
        <a class="d-none pl-1" href="javascript:" id="cmb-section-add-button">{{ __('Add Section') }}<i class="fa fa-plus float-right"></i></a>
    </div>
    <div class="d-none" id="cmb-admin-wrapper">
        <div id="cmb-slide-option-box" class="d-none">
            <a href="javascript:" id="cmb-slider-item-drag" title="drag" class="cmb-setting-icon"><i class="cm cm-move-arrow"></i></a>
            <a href="javascript:" id="cmb-slider-css3-effect" title="drag" class="cmb-setting-icon"><i class="fa fa-paint-brush"></i>
                <div>
                    <label>{{ __('Rotate') }}</label>
                    <input type="number" min="-360" max="360" class="cmb-slide-element-transform" data-style="rotate" value="0">
                    <label>{{ __('SkewX') }}</label>
                    <input type="number" min="-360" max="360" class="cmb-slide-element-transform" data-style="skewX" value="0">
                    <label>{{ __('SkewY') }}</label>
                    <input type="number" min="-360" max="360" class="cmb-slide-element-transform" data-style="skewY" value="0">
                </div>
            </a>
            <div id="cmb-slider-font-size-wrapper" class="d-none"><input type="range" min="1" max="10" step="0.1" id="cmb-slider-font-size"
                                                                         class=""></div>
        </div>


        <div id="cmb-table-movable-action">
            <a href="javascript:" class="cmb-setting-icon cmb-table-movable-action" id="cmb-table-col-prev"><i class="fa fa-caret-left"></i></a>
            <a href="javascript:" class="cmb-setting-icon cmb-table-movable-action" id="cmb-table-col-next"><i
                    class="fa fa-caret-right"></i></a>
            <a href="javascript:" class="cmb-setting-icon cmb-table-movable-action" id="cmb-table-col-remove"><i class="fa fa-trash"></i></a>
        </div>

        <div id="cmb-text-edit-option-box" class="lf-display-none">
            <a class="cmb-setting-icon" href="javascript:" id="cmb-text-option-edit"><i class="fa fa-pencil"></i></a>
        </div>
        <div id="cmb-admin-modal" class="lf-display-none">
            <div id="cmb-setting-box" class="lf-display-none"></div>
            <div id="cmb-element-box" class="lf-display-none">
                <h3>{{ __('Element Box') }}
                    <button class="cmb-close-modal btn btn-sm btn-info"><strong>x</strong></button>
                </h3>
                <div class="cmb-tab-wrapper">
                    <ul class="cmb-tab-nav"></ul>
                    <div class="cmb-tab-body"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="d-none" id="cmb-temporary-html-wrapper">
    </div>
    <div class="d-none" id="cmb-loading-queue">
        <div></div>
    </div>
    <div id="cmb-status-popup">
    </div>
    <div id="cmb-tinymce-popup" class="d-none">
        <div class="container">
            <div class="row">
                <div class="col-12 pt-5">
                    <textarea id="cmb-tinymce" cols="30" ></textarea>
                </div>
                <div class="col-12 text-right">
                    <div class="bg-white p-3 mt-3">
                        <a class="btn btn-sm btn-primary" href="javascript:" id="cmb-text-option-save"><i class="fa fa-save"></i> Save Text</a>
                        <a class="btn btn-sm btn-warning cmb-editor-close-modal" href="javascript:"><i class="fa fa-close"></i> Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('style')
    <link data-link="cmb-style.css" href="{{ asset('plugins/cm-visual-editor/cmb-style.css') }}" id="cmb-default-style" rel="stylesheet">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/colorpicker/jquery.minicolors.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/tinymce/skins/lightgray/skin.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/tinymce/skins/lightgray/content.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/grid/grid.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/lightbox/lightbox.css') }}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ asset('plugins/cm-visual-editor/vendor/animate/animate.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/cm-visual-editor/vendor/animate/cmb-animate.css') }}">
    <link href="{{ asset('plugins/cm-visual-editor/visual-editor-element-style.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/cm-visual-editor/visual-editor-style.css') }}" rel="stylesheet">
    <style class="cmb-dynamic-css-library" type="text/css"></style>
    <link href="{{ asset('plugins/cm-visual-editor/vendor/fonts-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/cm-visual-editor/vendor/cmfonts/cmfonts.css') }}" rel="stylesheet">

    <style>
        .lf-display-none {
            display: none;
        }
    </style>
@endsection

@section('script')
    <script>
        let pageId = '{{ $visualPage->id }}';
        let pageCssPath = '{{ asset("storage/css/cm-visual-builder/style-{$visualPage->id}.css") }}';
        let savePageUrl = '{{ route('admin.pages.visual-edit', $visualPage->id) }}';
        let dynamicContentUrl = '{{ route('admin.dynamic-content') }}';
    </script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/visual-editor-initialization.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/tinymce.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/themes/modern/theme.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/code/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/colorpicker/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/hr/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/image/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/link/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/lists/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/paste/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/table/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/tinymce/plugins/textcolor/plugin.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/colorpicker/jquery.minicolors.min.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/style-inputs.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/visual-editor-primary-elements.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/element-library/element.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/visual-editor-general-settings.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/class-settings.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/input-type.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/visual-editor-functions.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/visual-editor.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/visual-editor/visual-editor-events.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/grid/grid.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/slider.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/slider-builder.js') }}"></script>
    <script src="{{ asset('plugins/cm-visual-editor/vendor/lightbox/lightbox.js') }}"></script>

    <script type="text/javascript">
        (function($) {
            'use strict';

            tinymce.init({
                selector: '#cmb-tinymce',
                height : "400",
                menubar: false,
                paste_data_images : false,
                relative_urls : false,
                remove_script_host : true,
                plugins: 'link image code lists textcolor colorpicker table hr paste',
                toolbar: 'bold italic underline | link image | alignleft aligncenter alignright alignjustify | bullist numlist | strikethrough superscript subscript | fontsizeselect forecolor backcolor | table | code',
                fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
                mobile: {
                    menubar: false,
                    toolbar: 'bold italic link image alignleft aligncenter alignright code',
                }
            });

            if ($('.cm-slider').length > 0) {
                cmSliderMethods.sliderRun($('.cm-slider'), true)
            }
        })(jQuery);
        // Must be used outside jquery document ready function | global
        let cmPfolio = $('.cm-pfbox').cmPfolio();
    </script>
@endsection

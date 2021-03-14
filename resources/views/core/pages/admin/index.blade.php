@extends('layouts.master')

@section('title', $title)

@section('content')
    <div class="container my-5">
        <div class="row">
            <div class="col-12">
                {{ $dataTable['filters'] }}
                <div class="my-4">
                    @component('components.table', ['class' => 'lf-data-table'])
                        @slot('thead')
                            <tr class="bg-primary text-light">
                                <th class="all">{{ __('Title') }}</th>
                                <th class="min-desktop">{{ __('Slug') }}</th>
                                <th class="min-desktop text-center">{{ __('Published Status') }}</th>
                                <th class="text-right no-sort">{{ __('Action') }}</th>
                            </tr>
                        @endslot
                        @foreach($dataTable['items'] as $page)
                            <tr>
                                <td>{{ \Illuminate\Support\Str::limit($page->title, 20) }}</td>
                                <td>
                                    {{ $page->slug }}
                                    @if($page->is_home_page)
                                        <i class="fa fa-home font-size-18 text-success ml-2"></i>
                                    @endif
                                </td>
                                <td class="text-center">
                                    @if($page->published_at)
                                        <span class="badge badge-success">{{ __('Published') }}</span>
                                    @else
                                        <span class="badge badge-danger">{{ __('Unpublished') }}</span>
                                    @endif
                                </td>
                                <td class="lf-action">
                                    <div class="btn-group">
                                        <button class="btn btn-info dropdown-toggle"
                                                data-toggle="dropdown">
                                            <i class="fa fa-gear"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            @if( has_permission('admin.pages.visual-edit'))
                                                <a class="dropdown-item"
                                                   data-form-id="up-{{$page->id}}" data-form-method="put"
                                                   href="{{ route('admin.pages.visual-edit',  $page->slug) }}">
                                                    <i class="fa fa-pencil-square"></i> {{ __('Edit Page') }}
                                                </a>
                                            @endif

                                            @if( has_permission('admin.pages.edit'))
                                                <a class="dropdown-item"
                                                   data-form-id="up-{{$page->id}}" data-form-method="put"
                                                   href="{{ route('admin.pages.edit',  $page->id) }}">
                                                    <i class="fa fa-edit"></i> {{ __('Edit Info') }}
                                                </a>
                                            @endif

                                            @if( has_permission('admin.pages.published'))
                                                @if($page->published_at)
                                                        <a class="dropdown-item confirmation"
                                                           data-form-id="up-{{$page->id}}" data-form-method="put"
                                                           data-alert="{{ __('Are you sure?') }}"
                                                           href="{{ route('admin.pages.published',  $page->id) }}">
                                                            <i class="fa fa-toggle-on"></i> {{ __('Unpublished') }}
                                                        </a>
                                                @else
                                                        <a class="dropdown-item confirmation"
                                                           data-form-id="up-{{$page->id}}" data-form-method="put"
                                                           data-alert="{{ __('Are you sure?') }}"
                                                           href="{{ route('admin.pages.published',  $page->id) }}">
                                                            <i class="fa fa-toggle-off"></i> {{ __('Published') }}
                                                        </a>
                                                @endif
                                            @endif
                                            @if( has_permission('admin.pages.home-page') && !$page->is_home_page)
                                                <a class="dropdown-item confirmation"
                                                   data-form-method="put"
                                                   data-alert="{{ __('Are you sure?') }}"
                                                   data-form-id="de-{{$page->id}}"
                                                   href="{{ route('admin.pages.home-page', $page->id) }}">
                                                    <i class="fa fa-home"></i> {{ __('Make Home Page') }}
                                                </a>
                                            @endif

                                            @if( has_permission('admin.pages.destroy'))
                                                <a class="dropdown-item confirmation"
                                                   data-form-method="delete"
                                                   data-alert="{{ __('Are you sure?') }}"
                                                   data-form-id="de-{{$page->id}}"
                                                   href="{{ route('admin.pages.destroy', $page->id) }}">
                                                    <i class="fa fa-trash-o"></i> {{ __('Delete') }}
                                                </a>
                                            @endif
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    @endcomponent
                </div>
                {{ $dataTable['pagination'] }}
            </div>
        </div>
    </div>
@endsection

@section('style')
    @include('layouts.includes.list-css')
@endsection

@section('script')
    @include('layouts.includes.list-js')
@endsection

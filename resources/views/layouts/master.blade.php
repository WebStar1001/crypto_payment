@include('layouts.includes.header')

@if(isset($headerLess) && $headerLess)
    <div class="centralize-wrapper">
        <div class="centralize-inner">
            <div class="centralize-content lf-no-header-wrapper">
                @yield('content')
            </div>
        </div>
    </div>
@else
    @include('layouts.includes.top_header')

    @includeWhen((!isset($hideBreadcrumb) || !$hideBreadcrumb), 'layouts.includes.breadcrumb')
    <div id="app">
        <div  class="lf-toggle-bg-content{{ isset($visualPage) ? '' : ' py-3' }}">
            @yield('content')
        </div>

        @yield('extended-content')
    </div>

    @include('layouts.includes.footer')

@endif
@include('layouts.includes.script')

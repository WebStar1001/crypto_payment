@extends('layouts.master',['activeSideNav' => active_side_nav()])
@section('title', $title)
@section('content')
    <div class="container py-5">
        <div class="row">
            <div class="col-md-4 my-3">
                @component('components.card',['type' => 'info', 'class' => 'lf-toggle-border-color lf-toggle-bg-card text-center', 'footerClass' => 'bg-primary'])
                    @slot('header')
                        <h3 class="card-title">{{ __('Coinpayments API') }}</h3>
                    @endslot

                    <div class="table-responsive">
                        <button class="btn btn-info check-status" data-coin="USD"
                                data-api="{{ API_COINPAYMENT }}">{{ __('Check Status') }}</button>
                    </div>
                @endcomponent
            </div>
            <div class="col-md-4 my-3">
                @component('components.card',['type' => 'info', 'class' => 'lf-toggle-border-color lf-toggle-bg-card text-center', 'footerClass' => 'bg-primary'])
                    @slot('header')
                        <h3 class="card-title">{{ __('Ethereum Node') }}</h3>
                    @endslot

                    <div class="table-responsive">
                        <button class="btn btn-info check-status" data-coin="ETH" data-api="{{ API_ETHEREUM }}">{{ __('Check Status') }}</button>
                    </div>
                @endcomponent
            </div>
            @foreach($btcForkedCoins as $btcForkedCoin)
                <div class="col-md-4 my-3">
                    @component('components.card',['type' => 'info', 'class' => 'lf-toggle-border-color lf-toggle-bg-card text-center', 'footerClass' => 'bg-primary'])
                        @slot('header')
                            <h3 class="card-title">{{ __(':name Node', ['name' => $btcForkedCoin->name]) }}</h3>
                        @endslot

                        <div class="table-responsive">
                            <button class="btn btn-info check-status" data-coin="{{ $btcForkedCoin->symbol }}"
                                    data-api="{{ API_BITCOIN }}">{{ __('Check Status') }}</button>
                        </div>
                    @endcomponent
                </div>
            @endforeach
        </div>
    </div>
@endsection

@section('script')
    <script>
        $(document).on('click', '.check-status', function () {
            let wrapper = $(this).closest('.table-responsive');
            let coin = $(this).data('coin');
            let api = $(this).data('api');
            let route = '{{ route('admin.node-status.show', ['TTT', 'API']) }}';
            route = route.replace('TTT', coin);
            route = route.replace('API', api);
            let loader = `<button class="btn btn-info" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                {{ __('Loading...') }}
            </button>`
            wrapper.html(loader);

            axios.get(route).then(response => {
                wrapper.html(response.data);
            })
        });
    </script>
@endsection

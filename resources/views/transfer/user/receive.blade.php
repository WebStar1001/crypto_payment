@extends('layouts.master',['activeSideNav' => active_side_nav()])
@section('title', $title)
@section('content')
    <div class="container my-5">
        @component('components.profile', ['user' => $user])
            {{ Form::open(['','class'=>'form-horizontal validator','method'=>'put', 'id' => 'transferForm']) }}
            {{--password--}}
            <div class="form-group row" id="walletRow">
                <label for="wallet_id" class="col-md-4 control-label pt-2 required">{{ __('Wallet') }}</label>
                <div class="col-md-5">
                    <select class="form-control" name="wallet_id">
                        <option></option>
                        @foreach($wallets as $item)
                            @if($wallet->symbol == $item->symbol)
                                <option value="{{$item->id}}" selected>{{$item->symbol}}</option>
                            @else
                                <option value="{{$item->id}}">{{$item->symbol}}</option>
                            @endif
                        @endforeach
                    </select>
                    <span class="invalid-feedback" data-name="sender">{{ $errors->first('wallet_id') }}</span>
                </div>
            </div>
            <div class="form-group row" id="walletRow">
                <div class="col-md-4">
                    <label for="wallet_id" class="control-label pt-2 required">{{ __('Wallet Address') }}</label>
                    <div class="row justify-content-center" style="margin-top: 160px;"><h3>Download QR Reader</h3></div>
                    <div class="row" style="margin-top: -20px;">
                        <div class="col-md-6">
                            <a href="https://apps.apple.com/nl/app/qr-code-reader-code-scanner/id388175979" target="_blank">
                                <img src="{{get_image('apple_store.png')}}" style="width: 120px;"/>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="https://play.google.com/store/apps/details?id=tw.mobileapp.qrcode.banner&hl=nl&gl=US" target="_blank">
                                <img src="{{get_image('google_store.png')}}" style="width: 120px;"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 mb-2">
                    <div class="card lf-toggle-bg-card lf-toggle-border-color">
                        <div class="card-body">
                            <figure class="text-center mb-0">
                                @if(isset($addressSvg))
                                    {{ view_html($addressSvg) }}
                                    <p class="text-muted my-2">{{ __('Scan QR code or copy the address') }}</p>
                                    <div class="d-flex justify-content-center">
                                        <figcaption class="border line-height-maximum px-2"
                                                    id="addressText">{{ $walletAddress }}</figcaption>
                                        <button class="btn btn-sm btn-primary py-1" type="button"
                                                id="copyAddressBtn">{{ __('Copy') }}</button>
                                    </div>
                                @else
                                    <figcaption class="py-4">
                                        {{ view_html($walletAddress) }}
                                    </figcaption>
                                @endif
                            </figure>
                        </div>
                    </div>
                </div>
            </div>


            {{ Form::close() }}
        @endcomponent
    </div>
@endsection

@section('style')
    @include('layouts.includes._avatar_and_loader_style')
@endsection

@section('script')
    <script src="{{ asset('plugins/cvalidator/cvalidator-language-en.js') }}"></script>
    <script src="{{ asset('plugins/cvalidator/cvalidator.js') }}"></script>
    <script>
        "use strict";

        $(document).ready(function () {
            $('#walletRow').find('select').change(function () {
                let symbol = $('#walletRow').find('select option:selected').text();
                location.href = {{config('url')}}"/wallets/" + symbol + '/receive';
            })
        });
    </script>
@endsection

@extends('layouts.master',['activeSideNav' => active_side_nav()])
@section('title', $title)
@section('content')
    <div class="container my-5">
        @component('components.coin', ['coin' => $coin])
            {{  Form::model($coin, ['route'=>['coins.api.update', $coin->symbol], 'method' => 'put', 'class'=>'form-horizontal validator-form', 'id' => 'coinApiForm']) }}
            {{--api--}}
            <div class="form-group">
                <label for="api" class="control-label required">{{ __('Select API') }}</label>
                @if(in_array($coin->type, [COIN_TYPE_CRYPTO,COIN_TYPE_ERC20]))
                    {{ Form::select('api', crypto_apis(), null,['class' => form_validation($errors, 'api'),'id' => 'api', 'placeholder' => __('Select API'), '@change' => 'onChangeApi']) }}
                @else
                    @forelse(fiat_apis() as $api => $apiName)
                        <div class="lf-checkbox p-0 my-2">
                            {{ Form::checkbox('api[]', $api, null, ['id' => 'api-' . $api, 'class' => 'lf-switch-input','@change' => $api == API_BANK ? 'onSelectBankMethods' : '', in_array($api, $coin->api['selected_apis'] ?? []) ? 'checked' : '']) }}
                            <label for="api-{{ $api }}"
                                   class="lf-switch-label lf-switch-label-on">{{ $apiName }}</label>
                        </div>
                    @empty
                        {{ __('No API is available.') }}
                    @endforelse
                    <span class="invalid-feedback" data-name="api[]">{{ $errors->first('api') }}</span>
                @endif
            </div>

            <div v-if="showBanks">
                <div class="form-group">
                    @if(!$bankAccounts->isEmpty())
                        <label for="api" class="control-label">{{ __('Select Banks') }}</label>
                        @foreach($bankAccounts as $bankAccountId => $bankAccountName)
                            <div class="lf-checkbox p-0 my-2">
                                {{ Form::checkbox('banks[]', $bankAccountId, null, ['id' => 'bank-' . $bankAccountId,
                                'class' => 'lf-switch-input', in_array($bankAccountId, isset($coin->api['selected_banks']) ?
                                $coin->api['selected_banks'] : []) ? 'checked' : '' ]) }}
                                <label for="bank-{{ $bankAccountId }}" class="lf-switch-label lf-switch-label-on">
                                    {{ $bankAccountName }}
                                </label>
                            </div>
                        @endforeach
                    @else
                        <p class="text-danger">{{ __('No Bank Account is available.') }}
                            @if(has_permission('system-banks.create'))
                                <a href="{{ route('system-banks.create') }}">{{ __('Add system bank account') }}</a>
                            @endif
                        </p>
                    @endif
                    <span class="invalid-feedback" data-name="banks[]">{{ $errors->first('banks') }}</span>
                </div>
            </div>

            <div v-if="showPropertyId">
                <div class="form-group">
                    <label for="api" class="control-label">{{ __('Property ID') }}</label>
                        {{ Form::text('property_id', null, ['class' => form_validation($errors, 'property_id'), 'id' => 'property_id', 'placeholder' => __('ex: 31')]) }}
                    <span class="invalid-feedback" data-name="property_id">{{ $errors->first('property_id') }}</span>
                </div>
            </div>

            {{--submit button--}}
            <div class="form-group my-3">
                {{ Form::submit(__('Update'),['class'=>'btn btn-info form-btn form-submission-button']) }}
                {{ Form::reset(__('Reset'),['class'=>'btn btn-danger form-btn']) }}
            </div>
            {{ Form::close() }}
        @endcomponent
    </div>
@endsection
@section('style')
    @include('coins.admin._style')
    @include('layouts.includes._avatar_and_loader_style')
@endsection
@section('script')
    <script src="{{ asset('plugins/cvalidator/cvalidator-language-en.js') }}"></script>
    <script src="{{ asset('plugins/cvalidator/cvalidator.js') }}"></script>
    <script>
        let form = $('#coinApiForm').cValidate({
            rules: {
                'api.*': 'required',
            },
            attributes: {
                'api.*': 'api',
            }
        });

        new Vue({
            el: '#app',
            data: {
                showBanks: "{{  (old('banks.0', ($coin->type === COIN_TYPE_FIAT && isset($coin->api['selected_banks']))) ? true : false )}}",
                showPropertyId: "{{old('api', isset($coin->api['selected_apis']) ? $coin->api['selected_apis'] : "")}}" === "{{API_OMNI_LAYER}}"
            },
            methods: {
                onSelectBankMethods: function (event) {
                    this.showBanks = event.target.checked;
                },
                onChangeApi: function (event) {
                    console.log(event.target.value)
                    this.showPropertyId = event.target.value === "{{API_OMNI_LAYER}}";
                }
            }
        });
    </script>
@endsection

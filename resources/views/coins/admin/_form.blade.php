{{--type--}}
@if( !isset($coin))
    <div class="form-group my-3">
        <label for="type" class="control-label required">{{ __('Coin Type') }}
            <small class="text-warning d-block">{{ __('Type cannot be changed after creating the coin.') }}</small>
        </label>

        {{ Form::select('type', $coinTypes, null,['class' => form_validation($errors, 'type'), 'id' => 'type',
        'placeholder' => __('Select Coin Type'), "@change" => "onTypeChange"]) }}
        <span class="invalid-feedback" data-name="type">{{ $errors->first('type') }}</span>
    </div>
@endif

{{--coin--}}
<div class="form-group my-3">
    <label for="symbol" class="control-label required">{{ __('Symbol') }}</label>
    {{ Form::text('symbol',  null, ['class'=> form_validation($errors, 'symbol'), 'id' => 'symbol', 'placeholder' => __('ex: USD')]) }}
    <span class="invalid-feedback" data-name="symbol">{{ $errors->first('symbol') }}</span>
</div>

{{--name--}}
<div class="form-group my-3">
    <label for="name" class="control-label required">{{ __('Coin Name') }}</label>
    {{ Form::text('name',  null, ['class'=> form_validation($errors, 'name'), 'id' => 'name',
    'placeholder' => __('ex: United States Dollar')]) }}
    <span class="invalid-feedback" data-name="name">{{ $errors->first('name') }}</span>
</div>

<div v-if="showERC20Fields">
    {{--contract_address--}}
    <div class="form-group my-3">
        <label for="contract_address" class="control-label required">{{ __('Contract Address') }}</label>
        {{ Form::text('contract_address',  null, ['class'=> form_validation($errors, 'contract_address'), 'id' => 'contract_address',
        'placeholder' => __('ex: 0xD653D79b694EbB9De42Ee10f0AAA610615De96E7')]) }}
        <span class="invalid-feedback" data-contract_address="contract_address">{{ $errors->first('contract_address') }}</span>
    </div>

    {{--decimal_place--}}
    <div class="form-group my-3">
        <label for="decimal_place" class="control-label required">{{ __('Decimal Place') }}
            <small class="text-warning d-block">{{ __('Make sure the decimal place is the same as your token decimal place. Otherwise, it can cause great damage.') }}</small>
        </label>
        {{ Form::text('decimal_place',  null, ['class'=> form_validation($errors, 'decimal_place'), 'id' => 'decimal_place',
        'placeholder' => __('ex: 18')]) }}
        <span class="invalid-feedback" data-decimal_place="decimal_place">{{ $errors->first('decimal_place') }}</span>
    </div>
</div>

{{--icon--}}
@if(!isset($coin))
    <div class="form-group my-3">
        {{ Form::label('icon', __('Icon'), ['class' => 'd-block']) }}
        <div class="fileinput fileinput-new" data-provides="fileinput">
            <div class="fileinput-new img-thumbnail lf-w-100px lf-h-100px">
                <img alt="icon" src="{{ get_coin_icon($coin->icon ?? null) }}">
            </div>
            <div class="fileinput-preview fileinput-exists img-thumbnail lf-w-100px"></div>
            <div>
            <span id="button-group" class="btn btn-sm btn-outline-secondary btn-file">
                <span class="fileinput-new">{{ __('Select Icon') }}</span>
                <span class="fileinput-exists">{{ __('Change') }}</span>
                    {{ Form::file('icon', ['id' => 'icon','class' => form_validation($errors, 'icon')]) }}
            </span>

                <a href="#" id="remove" class="btn btn-sm btn-outline-danger fileinput-exists"
                   data-dismiss="fileinput">{{ __('Remove') }}</a>
                <span class="invalid-feedback" data-name="icon">{{ $errors->first('icon') }}</span>
            </div>
        </div>
    </div>
@endif

{{--is_active--}}
<div class="form-group my-3">
    <label for="is_active" class="control-label required">{{ __('Active Status') }}
        <small class="text-warning d-block">{{ __('Disable means deactivating all associated coin pair(s).') }}</small>
    </label>
    <div>
        <div class="lf-switch">
            {{ Form::radio('is_active', ACTIVE, true, ['id' => 'is_active-active', 'class' => 'lf-switch-input']) }}
            <label for="is_active-active" class="lf-switch-label lf-switch-label-on">{{ __('Enable') }}</label>

            {{ Form::radio('is_active', INACTIVE, null, ['id' => 'is_active-inactive', 'class' => 'lf-switch-input']) }}
            <label for="is_active-inactive" class="lf-switch-label lf-switch-label-off">{{ __('Disable') }}</label>
        </div>
        <span class="invalid-feedback" data-name="is_active">{{ $errors->first('is_active') }}</span>
    </div>
</div>

{{--exchange_status--}}
<div class="form-group my-3">
    <label for="exchange_status" class="control-label required">{{ __('Exchange Status') }}</label>
    <div>
        <div class="lf-switch">
            {{ Form::radio('exchange_status', ACTIVE, true, ['id' => 'exchange_status-active', 'class' => 'lf-switch-input']) }}
            <label for="exchange_status-active" class="lf-switch-label lf-switch-label-on">{{ __('Enable') }}</label>

            {{ Form::radio('exchange_status', INACTIVE, null, ['id' => 'exchange_status-inactive', 'class' => 'lf-switch-input']) }}
            <label for="exchange_status-inactive" class="lf-switch-label lf-switch-label-off">{{ __('Disable') }}</label>
        </div>
        <span class="invalid-feedback" data-name="exchange_status">{{ $errors->first('exchange_status') }}</span>
    </div>
</div>

{{--submit button--}}
<div class="form-group my-3">
    {{ Form::submit(__('Save'),['class'=>'btn btn-info form-btn form-submission-button']) }}
    {{ Form::reset(__('Reset'),['class'=>'btn btn-danger form-btn']) }}
</div>

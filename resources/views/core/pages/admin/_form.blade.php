<div class="form-group">
    {{ Form::label('title', __('Title')) }}
    {{ Form::text('title', null, ['class' => form_validation($errors, 'title')]) }}
    <span class="invalid-feedback">{{ $errors->first('title') }}</span>
</div>

<div class="form-group">
    {{ Form::label('slug', __('Slug')) }}
    {{ Form::text('slug', null, ['class' => form_validation($errors, 'slug')]) }}
    <span class="invalid-feedback">{{ $errors->first('slug') }}</span>
</div>
<fieldset class="border p-3 mb-4">
    <legend class="w-auto">{{ __('Settings') }}</legend>
    <div class="form-group row">
        <div class="col-md-6">
            {{ Form::label('navigation_type', __('Navigation Type')) }}
            {{ Form::select('settings[navigation_type]',navigation_type(), isset($page) ? null : 2, ['class' => form_validation($errors, 'navigation_type')]) }}
            <span class="invalid-feedback">{{ $errors->first('navigation_type') }}</span>
        </div>
        <div class="col-md-6">
            {{ Form::label('top_nav', __('Top Nav Layout')) }}
            {{ Form::select('settings[top_nav]',top_nav_type(), null, ['class' => form_validation($errors, 'top_nav')]) }}
            <span class="invalid-feedback">{{ $errors->first('top_nav') }}</span>
        </div>
    </div>

    <div class="form-group row">
        <div class="col-md-6">
            {{ Form::label('logo_inversed_top_nav', __('Top Nav Logo Inverse'), ['class' => 'd-block']) }}
            <div class="lf-switch">
                {{ Form::radio('settings[logo_inversed_top_nav]', ACTIVE, false, ['id' => 'logo_inversed_top_nav-active',
                'class' => 'lf-switch-input']) }}
                <label
                    for="logo_inversed_top_nav-active"
                    class="lf-switch-label lf-switch-label-on">{{ __('Active') }}
                </label>

                {{ Form::radio('settings[logo_inversed_top_nav]', INACTIVE, true, ['id' => 'logo_inversed_top_nav-inactive',
                'class' => 'lf-switch-input']) }}
                <label
                    for="logo_inversed_top_nav-inactive"
                    class="lf-switch-label lf-switch-label-off">{{ __('Inactive') }}
                </label>
            </div>
            <span class="invalid-feedback">{{ $errors->first('logo_inversed_top_nav') }}</span>
        </div>
        <div class="col-md-6">
            {{ Form::label('top_nav', __('Transparent Top Nav'), ['class' => 'd-block']) }}
            <div class="lf-switch">
                {{ Form::radio('settings[top_nav_transparent]', ACTIVE, false, ['id' => 'top_nav_transparent-active',
                'class' => 'lf-switch-input']) }}
                <label
                    for="top_nav_transparent-active"
                    class="lf-switch-label lf-switch-label-on">{{ __('Active') }}
                </label>

                {{ Form::radio('settings[top_nav_transparent]', INACTIVE, true, ['id' => 'top_nav_transparent-inactive',
                'class' => 'lf-switch-input']) }}
                <label
                    for="top_nav_transparent-inactive"
                    class="lf-switch-label lf-switch-label-off">{{ __('Inactive') }}
                </label>
            </div>
            <span class="invalid-feedback">{{ $errors->first('top_nav_transparent') }}</span>
        </div>
    </div>

    <div class="form-group row">
        <div class="col-md-6">
            {{ Form::label('hide_breadcrumb', __('Hide Breadcrumb'), ['class' => 'd-block']) }}
            <div class="lf-switch">
                {{ Form::radio('settings[hide_breadcrumb]', ACTIVE, true, ['id' => 'hide_breadcrumb-active',
                'class' => 'lf-switch-input']) }}
                <label
                    for="hide_breadcrumb-active"
                    class="lf-switch-label lf-switch-label-on">{{ __('Active') }}
                </label>

                {{ Form::radio('settings[hide_breadcrumb]', INACTIVE, false, ['id' => 'hide_breadcrumb-inactive',
                'class' => 'lf-switch-input']) }}
                <label
                    for="hide_breadcrumb-inactive"
                    class="lf-switch-label lf-switch-label-off">{{ __('Inactive') }}
                </label>
            </div>
            <span class="invalid-feedback">{{ $errors->first('hide_breadcrumb') }}</span>
        </div>
        <div class="col-md-6">
            {{ Form::label('side_nav', __('Side Nav Layout')) }}
            {{ Form::select('settings[side_nav]',side_nav_type(), null, ['class' => form_validation($errors, 'side_nav')]) }}
            <span class="invalid-feedback">{{ $errors->first('side_nav') }}</span>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-6">
            {{ Form::label('logo_inversed_side_nav', __('Side Nav Logo Inverse'), ['class' => 'd-block']) }}
            <div class="lf-switch">
                {{ Form::radio('settings[logo_inversed_side_nav]', ACTIVE, false, ['id' => 'logo_inversed_side_nav-active',
                'class' => 'lf-switch-input']) }}
                <label
                    for="logo_inversed_side_nav-active"
                    class="lf-switch-label lf-switch-label-on">{{ __('Active') }}
                </label>

                {{ Form::radio('settings[logo_inversed_side_nav]', INACTIVE, true, ['id' => 'logo_inversed_side_nav-inactive',
                'class' => 'lf-switch-input']) }}
                <label
                    for="logo_inversed_side_nav-inactive"
                    class="lf-switch-label lf-switch-label-off">{{ __('Inactive') }}
                </label>
            </div>
            <span class="invalid-feedback">{{ $errors->first('logo_inversed_side_nav') }}</span>
        </div>
        <div class="col-md-6">
            {{ Form::label('side_nav_fixed', __('Is Side Nav Fixed?'), ['class' => 'd-block']) }}
            <div class="lf-switch">
                {{ Form::radio('settings[side_nav_fixed]', ACTIVE, false, ['id' => 'side_nav_fixed-active',
                'class' => 'lf-switch-input']) }}
                <label
                    for="side_nav_fixed-active"
                    class="lf-switch-label lf-switch-label-on">{{ __('Active') }}
                </label>

                {{ Form::radio('settings[side_nav_fixed]', INACTIVE, true, ['id' => 'side_nav_fixed-inactive',
                'class' => 'lf-switch-input']) }}
                <label
                    for="side_nav_fixed-inactive"
                    class="lf-switch-label lf-switch-label-off">{{ __('Inactive') }}
                </label>
            </div>
            <span class="invalid-feedback">{{ $errors->first('side_nav_fixed') }}</span>
        </div>
    </div>
</fieldset>
<div class="form-group">
    {{ Form::submit($buttonText, ['class' => 'btn btn-info btn-block form-submission-button']) }}
</div>

<li class="individual-menu-item">
    <div class="innermenu">
        <div class="innermenuhead">
            <div class="title">
                {{$row['name'] !='' ? $row['name'] : 'Unnamed'}}
            </div>
            <div class="type">
                <span class="arrow-icon">
                    {{ menu_types($row['type']) }}
                    <i class="fa fa-caret-right"></i>
                </span>
            </div>
        </div>
        <div class="innermenubody">
            <p>
                <label>{{ __('Navigation Label') }}<br></label>
                <input type="text" class="name" value="{{$row['name']}}"
                       name="menu_item[{{$row['order']}}][name]">
            </p>
            @if($row['type'] === MENU_TYPE_LINK)
                <p>
                    <label>{{ __('Link') }}<br></label>
                    <input type="text" class="custom-link-field prevent-default"
                           value="{{$row['value']['name']}}" name="menu_item[{{$row['order']}}][value][name]">
                </p>
            @elseif ($row['type'] === MENU_TYPE_PAGE)
                <p class="pt-3">
                    <label>{{ __('Page: :route', ['route'=> $row['value']['name']]) }}</label>
                    <input type="hidden" class="page-field prevent-default"
                           value="{{$row['value']['name']}}" name="menu_item[{{$row['order']}}][value][name]">
                </p>
            @else
                <p class="pt-3">
                    <label>{{ __('Route: :route', ['route'=> $row['value']['name']]) }}</label>
                    <input type="hidden" class="route-field prevent-default"
                           value="{{$row['value']['name']}}" name="menu_item[{{$row['order']}}][value][name]">
                @if(Route::getRoutes()->getByName($row['value']['name']) && isset($row['value']['parameters']) && $row['value']['parameters'])
                    <fieldset class="border p-2 mb-2">
                        <legend class="w-auto font-size-14">{{ __('Parameters') }}</legend>
                        @foreach(Route::getRoutes()->getByName($row['value']['name'])->signatureParameters() as $signatureParameter)
                            <label>
                                {{ ucwords(str_replace(['_', '-'], ' ', $signatureParameter->getName())) }}
                                @if($signatureParameter->isOptional())
                                    ({{ __('optional') }})
                                @endif
                                <br>
                            </label>
                            <input type="text"
                                   class="route-param-field prevent-default{{ $signatureParameter->isOptional() ? '' : ' parameter-required' }}"
                                   value="{{ $row['value']['parameters'][$signatureParameter->getName()] ?: '' }}"
                                   name="menu_item[{{$row['order']}}][value][parameters][{{ $signatureParameter->getName() }}]">
                        @endforeach
                    </fieldset>
                    @endif
                    </p>
                @endif
                <div class="row">
                    <div class="col-sm-6">
                        <p>
                            <label>{{ __('Extra Class') }}<br></label>
                            <input type="text" name="menu_item[{{$row['order']}}][class]"
                                   value="{{$row['class']}}" class="prevent-default">
                        </p>
                    </div>
                    <div class="col-sm-6">
                        <p><label>{{ __('Menu Icon') }}<br></label><input type="text" name="menu_item[{{$row['order']}}][icon]"
                                                                          value="{{$row['icon']}}" class="prevent-default"></p>
                    </div>
                </div>
                <p><label>{{ __('Beginning Text') }}<br></label><input type="text" name="menu_item[{{$row['order']}}][beginning_text]"
                                                                       value="{{$row['beginning_text']}}" class="prevent-default"></p>
                <p><label>{{ __('Ending Text') }}<br></label><input type="text" name="menu_item[{{$row['order']}}][ending_text]"
                                                                    value="{{$row['ending_text']}}" class="prevent-default"></p>
                <p class="mt-2"><label for=""></label><input type="checkbox"
                                                             class="newwindow"{{$row['new_tab']==1 ? ' checked' : ''}}><em>{{ __('Open link in a new window/tab') }}</em>
                </p>
                <p class="mymgmenu"><label for=""></label><input type="checkbox"
                                                                 class="megamenu"{{$row['mega_menu'] == 1 ? ' checked' : ''}}><em>{{ __('Use As Mega Menu') }}</em>
                </p>
                <hr class="myhrborder">
                <button class="deletebutton">{{ __('Remove') }}</button>

                <input type="hidden" name="menu_item[{{$row['order']}}][type]" value="{{$row['type']}}" class="hidden-type-field">
                <input type="hidden" name="menu_item[{{$row['order']}}][parent_id]" value="{{$row['parent_id']}}" class="hidden-parent-field">
                <input type="hidden" name="menu_item[{{$row['order']}}][new_tab]" value="{{$row['new_tab']}}" class="hidden-newtab-field">
                <input type="hidden" name="menu_item[{{$row['order']}}][mega_menu]" value="{{$row['mega_menu']}}" class="hidden-megamenu-field">
                <input type="hidden" name="menu_item[{{$row['order']}}][order]" value="{{$row['order']}}" class="hidden-order-field">
        </div>
    </div>

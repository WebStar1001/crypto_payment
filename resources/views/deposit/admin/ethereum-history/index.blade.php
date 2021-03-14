@extends('layouts.master',['activeSideNav' => active_side_nav()])
@section('title', $title)
@section('content')
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-12">
                {{ $dataTable['filters'] }}
                {{ $dataTable['advanceFilters'] }}
                @component('components.table',['class'=> 'lf-data-table'])
                    @slot('thead')
                        <tr class="bg-primary text-white">
                            <th class="min-desktop">{{ __('Date') }}</th>
                            <th class="all">{{ __('Email') }}</th>
                            <th class="min-desktop">{{ __('Address') }}</th>
                            <th class="min-desktop">{{ __('Wallet') }}</th>
                            <th class="min-desktop">{{ __('Amount') }}</th>
                            <th class="all text-center">{{ __('Status') }}</th>
                            <th class="none">{{ __('Txn ID') }}</th>
                            <th class="text-right all no-sort">{{ __('Action') }}</th>
                        </tr>
                    @endslot

                    @foreach($dataTable['items'] as $deposit)
                        <tr>
                            <td>{{ $deposit->created_at }}</td>
                            <td>
                                @if (has_permission('admin.users.show'))
                                    <a target="_blank"
                                       href="{{ route('admin.users.show', $deposit->user_id) }}">{{ $deposit->user->email }}</a>
                                @else
                                    {{ $deposit->user->email }}
                                @endif
                            </td>
                            <td>
                                <a target="_blank" href="{{ settings('ethereum_blockchain_explorer') }}/address/{{ $deposit->receiver_address }}">{{ $deposit->receiver_address }}</a>
                            </td>
                            {{--<td>
                                <a target="_blank" href="{{ settings('ethereum_blockchain_explorer') }}/address/{{ $deposit->sender_address }}">{{ $deposit->sender_address }}</a>
                            </td>
                            <td>
                                <a target="_blank" href="{{ settings('ethereum_blockchain_explorer') }}/address/{{ $deposit->system_address }}">{{ $deposit->system_address }}</a>
                            </td>--}}
                            <td>{{ $deposit->symbol }}</td>
                            <td class="text-right">{{ $deposit->received }}</td>
                            <td class="text-center">
                                <span
                                    class="font-size-12 py-1 px-2 badge badge-{{ get_color_class($deposit->status,'transaction_status') }}">
                                    {{ ethereum_deposit_status($deposit->status) }}
                                </span>
                            </td>
                            <td><a target="_blank" href="{{ settings('ethereum_blockchain_explorer') }}/tx/{{ $deposit->txn_id_1 }}">{{ $deposit->txn_id_1 }}</a></td>
                            <td class="lf-action text-right">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-info dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-gear"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" role="menu">
                                        @if( has_permission('admin.history.ethereum-deposits.show'))
                                            <a class="dropdown-item"
                                               href="{{ route('admin.history.ethereum-deposits.show',$deposit->id) }}"><i
                                                    class="fa fa-eye-slash text-success mr-2"></i>{{ __('Show') }}</a>
                                        @endif
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                @endcomponent
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

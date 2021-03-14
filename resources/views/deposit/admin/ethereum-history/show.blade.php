@extends('layouts.master',['activeSideNav' => active_side_nav()])
@section('title', $title)

@section('content')
    <div class="container py-5">
        <div class="row">
            <div class="col-md-3 mb-4">
                @component('components.card',['type' => 'info', 'class' => 'lf-toggle-border-color lf-toggle-bg-card text-center', 'footerClass' => 'bg-primary'])
                    <img src="{{ get_avatar($ethereumDeposit->user->avatar) }}"
                         alt="{{ __('Profile Image') }}"
                         class="img-rounded img-fluid">
                    <a class="d-block mt-3 font-size-16 text-center"
                       href="{{ route('admin.users.show', $ethereumDeposit->user_id) }}">{{ $ethereumDeposit->user->profile->full_name }}</a>
                    <a class="d-block font-size-12 text-muted mb-1 text-center"
                       href="{{ route('admin.users.show', $ethereumDeposit->user_id) }}">{{ $ethereumDeposit->user->email }}</a>
                    <div class="flex align-items-center justify-content-center mt-2">
                        <span>{{ __('Status') }}:</span>
                        <span
                            class="ml-2 badge badge-{{ config("commonconfig.account_status.{$ethereumDeposit->user->status}.color_class") }}">{{ account_status($ethereumDeposit->user->status) }}</span>
                    </div>
                    @slot('footer')
                        <div class="font-size-12 text-muted">{{ __('Current Balance') }}</div>
                        <div>{{ $wallet->primary_balance }} {{ $wallet->symbol }}</div>
                    @endslot
                @endcomponent

                @if(isset($walletCount) && isset($openOrderCount))
                    <div class="">
                        <div class="list-group">
                            @if(has_permission('admin.users.wallets.index'))
                                <a href="{{ route('admin.users.wallets.index', $user->id) }}"
                                   class="list-group-item lf-toggle-border-color lf-toggle-bg-card d-flex justify-content-between align-items-center border-top-0 border-radius-0">
                                    {{ __('Wallet') }}
                                    <span class="badge badge-primary">{{ $walletCount }}</span>
                                </a>
                            @endif

                            @if(has_permission('admin.users.open-orders.index'))
                                <a href="{{ route('admin.users.open-orders.index', $user->id) }}"

                                   class="list-group-item lf-toggle-border-color lf-toggle-bg-card d-flex justify-content-between align-items-center">
                                    {{ __('Open Order') }}
                                    <span class="badge badge-primary">{{ $openOrderCount }}</span>
                                </a>
                            @endif

                            @if(has_permission('admin.users.trade-history.index'))
                                <a href="{{ route('admin.users.trade-history.index', $user->id) }}"
                                   class="list-group-item lf-toggle-border-color lf-toggle-bg-card d-flex justify-content-between align-items-center">
                                    {{ __('Trade History') }}
                                </a>
                            @endif
                        </div>
                    </div>
                @endif
            </div>
            <div class="col-md-9">
                @component('components.card', [
                    'class' => 'lf-toggle-bg-card lf-toggle-border-color',
                    'headerClass' => "bg-primary text-white d-flex justify-content-between",
                    'footerClass' => "bg-primary text-white",
                ])
                    @slot('header')
                        <h4 class="card-title my-auto">{{ __('Receiver Transaction Details') }}</h4>
                    @endslot
                    <div class="table-responsive">
                        @component('components.table', ['type' => 'borderless', 'class' => 'lf-toggle-text-color'])
                            <tr class="border-top-0">
                                <th>{{ __('Receiver Address') }}</th>
                                <td>
                                    <a target="_blank"
                                       href="{{ settings('ethereum_blockchain_explorer') }}/address/{{ $ethereumDeposit->receiver_address }}">{{ $ethereumDeposit->receiver_address }}</a>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ __('Received Amount') }}</th>
                                <td>{{ $ethereumDeposit->received }} {{ $ethereumDeposit->symbol }}</td>
                            </tr>
                            <tr>
                                <th>{{ __('Transaction ID') }}</th>
                                <td><a target="_blank"
                                       href="{{ settings('ethereum_blockchain_explorer') }}/tx/{{ $ethereumDeposit->txn_id_1 }}">{{ $ethereumDeposit->txn_id_1 }}</a>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ __('Sender Address') }}</th>
                                <td>
                                    <a target="_blank"
                                       href="{{ settings('ethereum_blockchain_explorer') }}/address/{{ $ethereumDeposit->sender_address }}">{{ $ethereumDeposit->sender_address }}</a>
                                </td>
                            </tr>
                        @endcomponent
                    </div>
                @endcomponent

                @component('components.card', [
                'class' => 'lf-toggle-bg-card lf-toggle-border-color mt-4',
                'headerClass' => "bg-primary text-white d-flex justify-content-between",
                'footerClass' => "bg-primary text-white",
            ])
                    @slot('header')
                        <h4 class="card-title my-auto">{{ __('System Transaction Details') }}</h4>
                    @endslot
                    <div class="table-responsive">
                        @component('components.table', ['type' => 'borderless', 'class' => 'lf-toggle-text-color'])
                            <tr class="border-top-0">
                                <th>{{ __('System Address') }}</th>
                                <td>
                                    <a target="_blank"
                                       href="{{ settings('ethereum_blockchain_explorer') }}/address/{{ $ethereumDeposit->system_address }}">{{ $ethereumDeposit->system_address }}</a>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ __('Sent Amount') }}</th>
                                <td>{{ $ethereumDeposit->sent }} {{ $ethereumDeposit->symbol }}</td>
                            </tr>
                            <tr>
                                <th>{{ __('Transaction ID') }}</th>
                                <td><a target="_blank"
                                       href="{{ settings('ethereum_blockchain_explorer') }}/tx/{{ $ethereumDeposit->txn_id_2 }}">{{ $ethereumDeposit->txn_id_2 }}</a>
                                </td>
                            </tr>
                            <tr>
                                <th>{{ __('Network Fee') }}</th>
                                <td>{{ $ethereumDeposit->network_fee }} {{ $ethereumDeposit->symbol }}</td>
                            </tr>

                            <tr>
                                <th>{{ __('Status') }}</th>
                                <td><span
                                        class="badge badge-{{ config("commonconfig.transaction_status.$ethereumDeposit->status.color_class") }}">{{ ethereum_deposit_status($ethereumDeposit->status) }}</span>
                                </td>
                            </tr>
                        @endcomponent
                    </div>
                    @slot('footer')
                        <a class="btn btn-info" target="_blank" href="{{ route('admin.history.deposits.show', $deposit->id) }}">{{ __('View Related Deposit') }}</a>
                    @endslot
                @endcomponent
            </div>
        </div>
    </div>
@endsection

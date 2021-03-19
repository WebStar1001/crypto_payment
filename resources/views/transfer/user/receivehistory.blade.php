@extends('layouts.master',['activeSideNav' => active_side_nav()])
@section('title', $title)
@section('content')
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-12">
                {{ $dataTable['filters'] }}
                {{ $dataTable['advanceFilters'] }}
                <div class="my-4">
                    @component('components.table',['class'=> 'lf-data-table'])
                        @slot('thead')
                            <tr class="bg-primary text-white">
                                <th class="all">{{ __('No') }}</th>
                                <th class="min-desktop">{{ __('Wallet') }}</th>
                                <th class="min-desktop">{{ __('Wallet Name') }}</th>
                                <th class="all">{{ __('Sender') }}</th>
                                <th class="min-desktop">{{ __('Amount') }}</th>
                                <th class="min-desktop">{{ __('Date') }}</th>
                            </tr>
                        @endslot

                        @foreach($dataTable['items'] as $key=>$transaction)
                            <tr>
                                <td>{{ ($key+1) }}</td>
                                <td>{{ $transaction->symbol }}</td>
                                <td>{{ $transaction->coin->name }}</td>
                                <td>{{ $transaction->user->username }}</td>
                                <td>{{ $transaction->amount }}</td>
                                <td>{{ $transaction->created_at->toFormattedDateString() }}</td>
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

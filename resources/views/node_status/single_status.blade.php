@component('components.table', ['type' => 'borderless', 'class' => 'lf-toggle-text-color'])
    <tr class="border-top-0">
        <th>{{ __('Status') }}</th>
        <td>
             <span class="py-2 px-3 font-size-12 badge badge-{{ $response['status'] ? 'success' : 'danger' }}">{{ active_status($response['status']) }}</span>
        </td>
    </tr>
    <tr>
        <th>{{ __('Version') }}</th>
        <td>{{ \Illuminate\Support\Str::limit($response['version'] ?: '-', 19) }}</td>
    </tr>
    <tr>
        <th>{{ __('Network') }}</th>
        <td>{{ $response['network'] ?: '-' }}</td>
    </tr>
@endcomponent

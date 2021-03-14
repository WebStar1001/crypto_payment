<?php

namespace App\Http\Controllers\Api\Ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Core\{TicketCommentRequest, TicketRequest};
use App\Models\Ticket\Ticket;
use App\Services\Core\{FileUploadService, TicketService};
use Illuminate\Support\{Facades\Auth};
use Ramsey\Uuid\Uuid;

class UserTicketController extends Controller
{
    public TicketService $ticketService;

    public function __construct(TicketService $ticketService)
    {
        $this->ticketService = $ticketService;
    }

    public function index(): JsonResponse
    {
        $tickets = Ticket::where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->paginate();

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'tickets' => $tickets
            ]
        ]);
    }

    public function show($ticket): JsonResponse
    {
        $ticket = Ticket::where('id', $ticket)
            ->where('user_id', auth()->id())
            ->firstOrFail();

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_DATA => [
                'ticket' => $ticket
            ]
        ]);
    }

    public function store(TicketRequest $request): JsonResponse
    {
        $params = [
            'user_id' => Auth::id(),
            'id' => Uuid::uuid4(),
            'title' => $request->get('title'),
            'content' => $request->get('content'),
            'previous_id' => $request->get('previous_id')
        ];

        if ($request->hasFile('attachment')) {
            $name = md5($params['id'] . auth()->id() . time());
            $uploadedAttachment = app(FileUploadService::class)->upload($request->file('attachment'), config('commonconfig.ticket_attachment'), $name, '', '', 'public');

            if ($uploadedAttachment) {
                $params['attachment'] = $uploadedAttachment;
            }
        }

        if ($ticket = Ticket::create($params)) {
            return response()->json([
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __('Ticket has been created successfully.'),
                RESPONSE_DATA => [
                    'ticket' => $ticket
                ]
            ]);
        }

        return response()->json([
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __('Failed to create the ticket.')
        ]);
    }

    public function comment(TicketCommentRequest $request, Ticket $ticket): JsonResponse
    {
        $request->validate(['content' => 'required']);

        $params = [
            'user_id' => Auth::id(),
            'content' => $request->get('content')
        ];

        if ($request->hasFile('attachment')) {
            $name = md5($ticket->id . auth()->id() . time());
            $uploadedAttachment = app(FileUploadService::class)->upload($request->file('attachment'), config('commonconfig.ticket_attachment'), $name, '', '', 'public');

            if ($uploadedAttachment) {
                $params['attachment'] = $uploadedAttachment;
            }
        }

        if ($ticket->comments()->create($params)) {
            return response()->json([
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __('The message has been created successfully.')
            ]);

        }

        return response()->json([
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __('Failed to place the comment.')
        ]);
    }

    public function download(Ticket $ticket, string $fileName)
    {
        return $this->ticketService->download($ticket, $fileName);
    }

    public function close(Ticket $ticket): JsonResponse
    {
        if ($ticket->changeStatus(STATUS_CLOSED)) {
            return response()->json([
                RESPONSE_STATUS_KEY => true,
                RESPONSE_MESSAGE_KEY => __('The ticket has been closed successfully')
            ]);
        }

        return response()->json([
            RESPONSE_STATUS_KEY => false,
            RESPONSE_MESSAGE_KEY => __('Failed to close the ticket.')
        ]);
    }
}

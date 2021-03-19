<?php

namespace App\Models\Transfer;

use App\Jobs\Withdrawal\WithdrawalProcessJob;
use App\Mail\Withdrawal\Confirmation;
use App\Models\BankAccount\BankAccount;
use App\Models\Coin\Coin;
use App\Models\Core\Notification;
use App\Models\Core\User;
use App\Models\Wallet\Wallet;
use App\Override\Eloquent\LaraframeModel as Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class WalletTransfer extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'user_id',
        'wallet_id',
        'receiver_id',
        'receiver_wallet_id',
        'symbol',
        'amount',
        'system_fee',
        'txn_id',
        'status',
    ];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(static function ($model) {
            $model->{$model->getKeyName()} = Str::uuid()->toString();
        });
    }

    public function coin(): BelongsTo
    {
        return $this->belongsTo(Coin::class, 'symbol', 'symbol');
    }

    public function bankAccount(): BelongsTo
    {
        return $this->belongsTo(BankAccount::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function receiver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'receiver_id', 'id');
    }

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class);
    }

    public function getRecipientWallet()
    {
        return Wallet::where('address', $this->address)
            ->where('symbol', $this->symbol)
            ->where('is_system_wallet', INACTIVE)
            ->where('is_active', ACTIVE)
            ->first();
    }

}

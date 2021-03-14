<?php


namespace App\Services\Ethereum;

use App\Override\Api\ERC20Api;
use Brick\Math\BigDecimal;
use Brick\Math\BigInteger;
use Illuminate\Support\Str;
use kornrunner\Keccak;

class Util
{
    public static function toWei($value, $decimalPlace = 18): string
    {
        return BigDecimal::of($value)->multipliedBy(BigInteger::of(bcpow(10, $decimalPlace)))->toBigInteger()->__toString();
    }

    public static function isAddress(string $address): bool
    {
        if (static::matchesPattern($address)) {
            return static::isAllSameCaps($address) ?: static::isValidChecksum($address);
        }

        return false;
    }

    private static function matchesPattern(string $address): int
    {
        return preg_match('/^(0x)?[0-9a-f]{40}$/i', $address);
    }

    private static function isAllSameCaps(string $address): bool
    {
        return preg_match('/^(0x)?[0-9a-f]{40}$/', $address) || preg_match('/^(0x)?[0-9A-F]{40}$/', $address);
    }

    private static function isValidChecksum($address)
    {
        $address = str_replace('0x', '', $address);
        $hash = Keccak::hash(strtolower($address), 256);

        for ($i = 0; $i < 40; $i++) {
            if (ctype_alpha($address[$i])) {
                $charInt = intval($hash[$i], 16);
                if ((ctype_upper($address[$i]) && $charInt <= 7) || (ctype_lower($address[$i]) && $charInt > 7)) {
                    return false;
                }
            }
        }

        return true;
    }

    public static function decodeInput(string $input, int $decimalPlace): array
    {
        $result = [];
        $methodSignature = substr($input, 2, 8);
        $methodSignatures = array_flip(ERC20Api::methodSignatures);
        if (isset($methodSignatures[$methodSignature])) {
            $result['method'] = $methodSignatures[$methodSignature];
            if ($result['method'] === "approve") {
                $result['spender'] = sprintf("0x%s", substr($input, 34, 40));
                $result['amount'] = Util::fromWei(sprintf("0x%s",substr($input, 74, 64)), $decimalPlace);
            } elseif ($result['method'] === "transfer") {
                $result['recipient'] = sprintf("0x%s", substr($input, 34, 40));
                $result['amount'] = Util::fromWei(sprintf("0x%s",substr($input, 74, 64)), $decimalPlace);
            } elseif ($result['method'] === "transferFrom") {
                $result['sender'] = sprintf("0x%s", substr($input, 34, 40));
                $result['recipient'] = sprintf("0x%s", substr($input, 98, 40));
                $result['amount'] = Util::fromWei(sprintf("0x%s",substr($input, 138, 64)), $decimalPlace);
            }
        }
        return $result;
    }

    public static function fromWei($value, $decimalPlace = 18): float
    {
        if (Str::startsWith($value, '0x')) {
            $value = hexdec($value);
        }
        return bcdiv(BigInteger::of($value), bcpow(10, $decimalPlace));
    }
}

<?php

namespace App\Http\Controllers\Api\KYC;

use App\Http\Controllers\Controller;
use App\Http\Requests\Kyc\UserKycVerificationRequest;
use App\Models\Kyc\KycVerification;
use App\Override\Logger;
use App\Services\Core\FileUploadService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserKycController extends Controller
{
    public function __invoke(UserKycVerificationRequest $request)
    {
        $uploadedIdFiles = [];
        foreach ($request->allFiles() as $fieldName => $file) {
            $uploadedIdFiles[$fieldName] = app(FileUploadService::class)->upload($file, config('commonconfig.path_id_image'), $fieldName, 'id', Auth::id(), 'public');
        }

        if (!empty($uploadedIdFiles)) {
            $attributes['card_image'] = $uploadedIdFiles;
            $attributes['status'] = STATUS_REVIEWING;
            $attributes['id'] = Str::uuid();
            $attributes['user_id'] = Auth::id();
            $attributes['type'] = $request->id_type;

            if (Auth::user()->is_id_verified === VERIFIED) {
                return redirect()->back()->with(RESPONSE_TYPE_ERROR, __('You can\'t change your ID verification information for having existing ID verification.'));
            }

            DB::beginTransaction();
            try {
                $created = KycVerification::create($attributes);
                if (!$created) {
                    throw new Exception('Failed to create KYC Verification.');
                }

                $updateUser = Auth::user()->update(['is_id_verified' => VERIFIED]);
                if (!$updateUser) {
                    throw new Exception('Failed to update user while KYC verification.');
                }
            } catch (Exception $exception) {
                DB::rollBack();
                Logger::error($exception, "[FAILED][UserKycController][store]");

                return response()->json([
                    RESPONSE_STATUS_KEY => false,
                    RESPONSE_MESSAGE_KEY => __('Failed to upload ID.')
                ]);
            }
            DB::commit();
        }

        return response()->json([
            RESPONSE_STATUS_KEY => true,
            RESPONSE_MESSAGE_KEY => __('ID has been uploaded successfully.')
        ]);
    }
}

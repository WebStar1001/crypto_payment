<?php

namespace Database\Seeders;

use App\Models\Core\Language;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $inputs = [
            [
                'name' => 'English',
                'short_code' => 'en',
                "icon" => "1d40d16afd304f4b21dca78ea9ffebd4.png",
                'direction'=>PAGE_DIRECTION_LEFT_TO_RIGHT,
            ],
            [
                'name' => 'বাংলা',
                'short_code' => 'bn',
                "icon" => "24c8d3a0e789301fbecc76708eadc3bd.png",
                'direction'=>PAGE_DIRECTION_LEFT_TO_RIGHT,
            ],
            [
                'name' => 'عربي',
                'short_code' => 'ar',
                "icon" => "_AR_.png",
                'direction'=>PAGE_DIRECTION_RIGHT_TO_LEFT,
            ]
        ];

        $languages = [];
        foreach ($inputs as $input) {
            $languages[$input['short_code']] = [
                'name' => $input['name'],
                'icon' => $input['icon'],
                'direction' => $input['direction'],
            ];
        }

        Cache::set('languages', $languages);

        Language::insert($inputs);
    }
}

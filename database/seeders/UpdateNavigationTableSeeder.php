<?php

namespace Database\Seeders;

use App\Models\Core\Navigation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class UpdateNavigationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $navigation = Navigation::where('slug', 'footer-nav-two')
            ->first();

        if( $navigation ) {
            $value = '[{"name":"Exchange","value":{"name":"exchange.index"},"class":"","icon":"","beginning_text":"","ending_text":"","type":"route","parent_id":"0","new_tab":"0","mega_menu":"0","order":"1"},{"name":"Public API","value":{"name":"public-api"},"class":"","icon":"","beginning_text":"","ending_text":"","type":"page","parent_id":"0","new_tab":"0","mega_menu":"0","order":"2"},{"name":"Private API","value":{"name":"private-api"},"class":"","icon":"","beginning_text":"","ending_text":"","type":"page","parent_id":"0","new_tab":"0","mega_menu":"0","order":"3"},{"name":"Blog","value":{"name":"blog.index"},"class":"","icon":"","beginning_text":"","ending_text":"","type":"route","parent_id":"0","new_tab":"0","mega_menu":"0","order":"4"},{"name":"Fees","value":{"name":"\/fees"},"class":"","icon":"","beginning_text":"","ending_text":"","type":"link","parent_id":"0","new_tab":"0","mega_menu":"0","order":"5"}]';

            $navigation->items = json_decode($value, true);
            $navigation->update();

            Artisan::call('clear:all');
        }
    }
}

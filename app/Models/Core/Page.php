<?php

namespace App\Models\Core;

use App\Override\Eloquent\LaraframeModel as Model;
use Illuminate\Support\Str;
use Psy\Util\Json;

class Page extends Model
{
    protected $casts = ['published_at' => 'datetime', 'settings' => 'array'];
    protected $fillable = ['slug','title','body','published_at', 'settings','is_home_page'];

    public function setSlugAttribute($value)
    {
        $this->attributes['slug'] = Str::slug($value);
    }

    public function setSettingsAttribute($value)
    {
        $this->attributes['settings'] = json_encode($value);
    }
}

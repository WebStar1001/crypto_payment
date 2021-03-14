<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Settings
    |--------------------------------------------------------------------------
    |
    | The configuration settings array is passed directly to HTMLPurifier.
    |
    | Feel free to add / remove / customize these attributes as you wish.
    |
    | Documentation: http://htmlpurifier.org/live/configdoc/plain.html
    |
    */

    'settings' => [

        /*
        |--------------------------------------------------------------------------
        | Core.Encoding
        |--------------------------------------------------------------------------
        |
        | The encoding to convert input to.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#Core.Encoding
        |
        */

        'Core.Encoding' => 'utf-8',

        /*
        |--------------------------------------------------------------------------
        | Core.SerializerPath
        |--------------------------------------------------------------------------
        |
        | The HTML purifier serializer cache path.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#Cache.SerializerPath
        |
        */

        'Cache.SerializerPath' => storage_path('purify'),

        /*
        |--------------------------------------------------------------------------
        | HTML.Doctype
        |--------------------------------------------------------------------------
        |
        | Doctype to use during filtering.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#HTML.Doctype
        |
        */

        'HTML.Doctype' => 'HTML 4.01 Transitional',

        /*
        |--------------------------------------------------------------------------
        | HTML.Allowed
        |--------------------------------------------------------------------------
        |
        | The allowed HTML Elements with their allowed attributes.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#HTML.Allowed
        |
        */
        'HTML.ForbiddenAttributes' => ['onabort', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onstalled', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onunload', 'onvolumechange', 'onwaiting', 'onwheel', 'lowsrc'],

        /*
        |--------------------------------------------------------------------------
        | HTML.ForbiddenElements
        |--------------------------------------------------------------------------
        |
        | The forbidden HTML elements. Elements that are listed in
        | this string will be removed, however their content will remain.
        |
        | For example if 'p' is inside the string, the string: '<p>Test</p>',
        |
        | Will be cleaned to: 'Test'
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#HTML.ForbiddenElements
        |
        */

        'HTML.ForbiddenElements' => 'script,style',

        /*
        |--------------------------------------------------------------------------
        | CSS.AllowedProperties
        |--------------------------------------------------------------------------
        |
        | The Allowed CSS properties.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#CSS.AllowedProperties
        |
        */

        'CSS.AllowedProperties' => 'font,font-size,font-weight,font-style,font-family,text-decoration,padding-left,color,background-color,text-align',

        /*
        |--------------------------------------------------------------------------
        | AutoFormat.AutoParagraph
        |--------------------------------------------------------------------------
        |
        | The Allowed CSS properties.
        |
        | This directive turns on auto-paragraphing, where double
        | newlines are converted in to paragraphs whenever possible.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#AutoFormat.AutoParagraph
        |
        */

        'AutoFormat.AutoParagraph' => false,

        /*
        |--------------------------------------------------------------------------
        | AutoFormat.RemoveEmpty
        |--------------------------------------------------------------------------
        |
        | When enabled, HTML Purifier will attempt to remove empty
        | elements that contribute no semantic information to the document.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#AutoFormat.RemoveEmpty
        |
        */

        'AutoFormat.RemoveEmpty' => false,

        /*
        |--------------------------------------------------------------------------
        | HTML.Trusted
        |--------------------------------------------------------------------------
        |
        | Indicates whether or not the user input is trusted or not. If the input is trusted,
        | a more expansive set of allowed tags and attributes will be used.
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#HTML.Trusted
        |
        */

        'HTML.Trusted' => true,

        /*
        |--------------------------------------------------------------------------
        | HTML.SafeIframe
        |--------------------------------------------------------------------------
        |
        | Whether or not to permit iframe tags in untrusted documents.
        | This directive must be accompanied by a whitelist of permitted iframes
        |
        | http://htmlpurifier.org/live/configdoc/plain.html#HTML.SafeIframe
        |
        */

        'HTML.SafeIframe' => true,
        'URI.SafeIframeRegexp' => '%^(http://|https://|//)(www.youtube-nocookie.com/embed/)%',

        'Attr.EnableID' => true,
    ],

    'custom_attributes' => [
        'aria-label',
        'aria-hidden',
        'aria-disabled',
        'aria-selected',
        'aria-haspopup',
        'aria-expanded',
        'aria-labelledby',
        'aria-current',
        'data-individual',
        'data-dismiss',
        'data-action',
        'data-toggle',
        'data-placement',
        'data-link',
        'data-wrapper',
        'data-pause',
        'data-pause-active',
        'data-process',
        'data-elapsed',
        'data-in',
        'data-in-transition',
        'data-out',
        'data-out-transition',
        'data-transition',
        'data-transition-interval',
        'data-animation',
        'data-pf-groups',
        'data-display-interval',
        'data-current-interval',
        'data-current-slide',
        'data-element-item-variation',
        'data-element-item-id',
        'data-cm-ctg',
        'data-cm-button',
        'data-cm-default-group',
        'data-cm-default-groups',
        'data-cm-column-xl',
        'data-cm-column-lg',
        'data-cm-column-md',
        'data-cm-column-sm',
        'data-cm-column-sx',
        'data-cm-column-tn',
        'data-cm-pfctg',
        'data-cm-lb-img',
        'data-cm-section',
        'data-cm-starting-group',
        'data-cmb-id',
        'data-cmb-src',
        'data-cmb-class',
        'data-cmb-classes',
        'data-cmb-wrapper',
        'data-cmb-sub',
        'data-cmb-sub-style',
        'data-cmb-style',
        'data-cmb-unit',
        'data-cmb-unit-available',
        'data-cmb-option',
        'data-cmb-option-name',
        'data-cmb-element',
        'data-cmb-element-type',
        'data-cmb-dynamic',
        'data-cmb-editable',
        'data-cmb-type',
        'data-cmb-resolution',
        'data-cmb-tabs',
        'data-cmb-child',
        'data-cmb-attribute',
        'data-exists-from-start',
        'data-animation-duration',
        'data-animation-delay',
        'data-slide-element-font-size',
        'data-x',
        'data-y',
        'data-cmb-dynamic-values',
    ],
];

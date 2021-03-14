<?php

namespace App\Providers;

use HTMLPurifier_AttrDef_Text;
use HTMLPurifier_HTMLDefinition;
use Illuminate\Support\ServiceProvider;
use Stevebauman\Purify\Facades\Purify;

class PurifySetupProvider extends ServiceProvider
{
    const DEFINITION_ID = 'cmb-editor';
    const DEFINITION_REV = 1;

    public function register()
    {
        //
    }

    public function boot()
    {
        $purifier = Purify::getPurifier();

        $config = $purifier->config;
        $purifier->config->set('HTML.DefinitionID', static::DEFINITION_ID);
        $purifier->config->set('HTML.DefinitionRev', static::DEFINITION_REV);

        if ($def = $config->maybeGetRawHTMLDefinition()) {
            $this->setupDefinitions($def);
        }

        $purifier->config = $config;
    }

    protected function setupDefinitions(HTMLPurifier_HTMLDefinition $def)
    {
        $def->addElement('section', 'Block', 'Flow', 'Common');
        $def->addElement('nav',     'Block', 'Flow', 'Common');
        $def->addElement('article', 'Block', 'Flow', 'Common');
        $def->addElement('aside',   'Block', 'Flow', 'Common');
        $def->addElement('header',  'Block', 'Flow', 'Common');
        $def->addElement('footer',  'Block', 'Flow', 'Common');
        $def->addElement('address', 'Block', 'Flow', 'Common');
        $def->addElement('hgroup', 'Block', 'Required: h1 | h2 | h3 | h4 | h5 | h6', 'Common');
        $def->addElement('figure', 'Block', 'Optional: (figcaption, Flow) | (Flow, figcaption) | Flow', 'Common');
        $def->addElement('figcaption', 'Inline', 'Flow', 'Common');
        $def->addElement('video', 'Block', 'Optional: (source, Flow) | (Flow, source) | Flow', 'Common', array(
            'src' => 'URI',
            'type' => 'Text',
            'width' => 'Length',
            'height' => 'Length',
            'poster' => 'URI',
            'preload' => 'Enum#auto,metadata,none',
            'controls' => 'Bool',
        ));
        $def->addElement('audio', 'Block', 'Flow', 'Common', array(
            'src' => 'URI',
            'type' => 'Text',
            'controls' => 'Bool'
        ));

        $def->addElement('s',    'Inline', 'Inline', 'Common');
        $def->addElement('var',  'Inline', 'Inline', 'Common');
        $def->addElement('sub',  'Inline', 'Inline', 'Common');
        $def->addElement('sup',  'Inline', 'Inline', 'Common');
        $def->addElement('mark', 'Inline', 'Inline', 'Common');
        $def->addElement('wbr',  'Inline', 'Empty', 'Core');
        $def->addElement('ins', 'Block', 'Flow', 'Common', array('cite' => 'URI', 'datetime' => 'CDATA'));
        $def->addElement('del', 'Block', 'Flow', 'Common', array('cite' => 'URI', 'datetime' => 'CDATA'));

        foreach (config('purify.custom_attributes') as $attribute){
            $def->info_global_attr[$attribute] = new HTMLPurifier_AttrDef_Text;
        }
    }
}










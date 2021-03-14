let cmbAllElements = {
    cmb_section: {
        allowedParent: ['cmb-content-wrapper'],
        addButtonText: '',
        icon: '<i class="cm cm-section"></i>',
        avoidableTabs : 'position',
        title: 'Section',
        elementTabName: 'container',
        elementType: 'static-layout',
        subWrapper: '.section-overlay',
        avoidableTabSettings : {
          'design' : [
              'padding-top',
              'padding-bottom',
              'padding-left',
              'padding-right',
              'margin-left',
              'margin-right',
          ]
        },
        allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
        htmlVariation: {
            'blank' : {
                subtitle: 'blank',
                icon: '<i class="cm cm-section-blank"></i>',
                html: `<section class="cmb_section">
<div class="section-overlay"></div>
</section>`
            },
            'full-1' : {
                subtitle: 'full 1/1',
                icon: '<i class="cm cm-section-col12"></i>',
                html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-12">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
        </section>`
            },
            'full-2' : {
                subtitle: 'full 1/2-1/2',
                icon: '<i class="cm cm-section-col6-6"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'full-3' : {
                subtitle: 'full 1/3-1/3-1/3',
                icon: '<i class="cm cm-section-col4_3"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'full-4' : {
                subtitle: 'full 1/4-1/4-1/4-1/4',
                icon: '<i class="cm cm-section-col3_4"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'full-6' : {
                subtitle: 'full 1/6-1/6-1/6-1/6-1/6-1/6',
                icon: '<i class="cm cm-section-col2_6"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'full-3-9' : {
                subtitle: 'full 1/4-3/4',
                icon: '<i class="cm cm-section-col3-9"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-3 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-9 col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'full-4-8' : {
                subtitle: 'full 1/3-2/3',
                icon: '<i class="cm cm-section-col4-8"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-8 com-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'full-5-7' : {
                subtitle: 'full 5/12-7/12',
                icon: '<i class="cm cm-section-col5-7"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-1' : {
                subtitle: 'box 1/1',
                icon: '<i class="cm cm-section-col12"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-12">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-2' : {
                subtitle: 'box 1/2-1/2',
                icon: '<i class="cm cm-section-col6-6"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-3' : {
                subtitle: 'box 1/3-1/3-1/3',
                icon: '<i class="cm cm-section-col4_3"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-4' : {
                subtitle: 'box 1/4-1/4-1/4-1/4',
                icon: '<i class="cm cm-section-col3_4"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-6' : {
                subtitle: 'box 1/6-1/6-1/6-1/6-1/6-1/6',
                icon: '<i class="cm cm-section-col2_6"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-3-9' : {
                subtitle: 'box 1/4-3/4',
                icon: '<i class="cm cm-section-col3-9"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-3 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-9 col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-4-8' : {
                subtitle: 'box 1/3-2/3',
                icon: '<i class="cm cm-section-col4-8"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-8 col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
            'box-5-7' : {
                subtitle: 'box 5/12-7/12',
                icon: '<i class="cm cm-section-col5-7"></i>',
                    html: `<section class="cmb_section">
<div class="section-overlay">
            <div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>
            </div>
            </section>`
            },
        },
        settings:{
            'section' : {
                title: 'Section Setting',
                options:[
                    {
                        'padding' : {
                            title: 'Padding',
                            subTitle : 'An element\'s padding is the space between its content and its border',
                            param : {
                                top: {
                                    placeholder: '0',
                                },
                                left: {
                                    placeholder: '0',
                                },
                                right: {
                                    placeholder: '0',
                                },
                                bottom: {
                                    placeholder: '0',
                                },
                            },
                            unit: cmbStyleUnits,
                            type: 'input',
                            inputType : 'fourSided',
                            attribute : 'style',
                            styleName: 'padding',
                            childItem: '.section-overlay'
                        },
                        'overlay-color' : {
                            title: 'Overlay Color',
                            subTitle : 'You can use solid color and opacity.',
                            type: 'input',
                            inputType : 'colorPicker',
                            attribute: 'style',
                            styleName: 'background-color',
                            childItem: '.section-overlay',
                            parentItem: '.dark',
                        },
                    }
                ]
            }
        },
    },
    cmb_container: {
        // allowedActionElement : false,
        allowedParent: ['cmb_section'],
        addButtonText: 'Container',
        icon: '<i class="cm cm-container"></i>',
        title: 'Container',
        elementTabName: 'container',
        elementType: 'static-layout',
        avoidableTabs : ['position', 'design'],
        avoidableTabSettings : {
            'design' : [
                'padding-left',
                'padding-right',
                'margin-left',
                'margin-right',
            ]
        },
        htmlVariation: {
            'blank-full' : {
                subtitle: 'fullwidth blank',
                icon: '<i class="cm cm-section-blank"></i>',
                html: `<div class="cmb_container container-fluid"></div>`
            },
            'full-1' : {
                subtitle: 'full 1/1',
                icon: '<i class="cm cm-section-col12"></i>',
                html: `<div class="cmb_container container-fluid">
                    <div class="cmb_row row">
                        <div class="cmb_column col-sm-12">
                            <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                        </div>
                    </div>
                </div>`
            },
            'full-2' : {
                subtitle: 'full 1/2-1/2',
                icon: '<i class="cm cm-section-col6-6"></i>',
                html: `<div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'full-3' : {
                subtitle: 'full 1/3-1/3-1/3',
                icon: '<i class="cm cm-section-col4_3"></i>',
                html: `<div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'full-4' : {
                subtitle: 'full 1/4-1/4-1/4-1/4',
                icon: '<i class="cm cm-section-col3_4"></i>',
                html: `<div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'full-6' : {
                subtitle: 'full 1/6-1/6-1/6-1/6-1/6-1/6',
                icon: '<i class="cm cm-section-col6-6"></i>',
                html: `<div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'full-3-9' : {
                subtitle: 'full 1/4-3/4',
                icon: '<i class="cm cm-section-col3-9"></i>',
                html: `<div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-3 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-9 col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'full-4-8' : {
                subtitle: 'full 1/3-2/3',
                icon: '<i class="cm cm-section-col4-8"></i>',
                html: `<div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-8 com-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'full-5-7' : {
                subtitle: 'full 5/12-7/12',
                icon: '<i class="cm cm-section-col5-7"></i>',
                html: `<div class="cmb_container container-fluid">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-blank' : {
                subtitle: 'box blank',
                icon: '<i class="cm cm-section-blank"></i>',
                html: `<div class="cmb_container container"></div>`
            },
            'box-1' : {
                subtitle: 'box 1/1',
                icon: '<i class="cm cm-section-col12"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-12">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-2' : {
                subtitle: 'box 1/2-1/2',
                icon: '<i class="cm cm-section-col6-6"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-3' : {
                subtitle: 'box 1/3-1/3-1/3',
                icon: '<i class="cm cm-section-col4_3"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-4' : {
                subtitle: 'box 1/4-1/4-1/4-1/4',
                icon: '<i class="cm cm-section-col3_4"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-6' : {
                subtitle: 'box 1/6-1/6-1/6-1/6-1/6-1/6',
                icon: '<i class="cm cm-section-col2_6"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-3-9' : {
                subtitle: 'box 1/4-3/4',
                icon: '<i class="cm cm-section-col3-9"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-3 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-9 col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-4-8' : {
                subtitle: 'box 1/3-2/3',
                icon: '<i class="cm cm-section-col4-8"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-md-4 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-8 col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
            'box-5-7' : {
                subtitle: 'box 5/12-7/12',
                icon: '<i class="cm cm-section-col5-7"></i>',
                html: `<div class="cmb_container container">
                <div class="cmb_row row">
                    <div class="cmb_column col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>
            </div>`
            },
        },
        settings:{
            container : {
                title: 'Container Setting',
                options: [{
                    'container-type' : {
                        title: 'Container type',
                        subTitle : 'container fluid or container',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType : 'switch',
                        fieldParam : {
                            'container' : 'Container',
                            'container-fluid' : 'Fullwidth Container',
                        },
                    },
                }]
            }
        },
    },
    cmb_row: {
        allowedParent: ['cmb_container', 'cmb_column'],
        addButtonText: 'Row',
        title: 'Row',
        icon: '<i class="cm cm-row"></i>',
        avoidableTabs: ['display', 'background'],
        avoidableTabSettings: {
            position : ['align-self','float','flex','display'],
            design : ['padding-left','padding-right','margin-left','margin-right','text-align']
        },
        elementTabName: 'container',
        elementType: 'static-layout',
        htmlVariation: {
            'row-blank' : {
                subtitle: 'blank',
                icon: '<i class="cm cm-section-blank"></i>',
                html: `<div class="cmb_row row">`
            },
            'col-1' : {
                subtitle: 'grid 1/1',
                icon: '<i class="cm cm-section-col12"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-sm-12">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
            'col-2' : {
                subtitle: 'grid 1/2-1/2',
                icon: '<i class="cm cm-section-col6-6"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
            'col-3' : {
                subtitle: 'grid 1/3-1/3-1/3',
                icon: '<i class="cm cm-section-col4_3"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-4">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
            'col-4' : {
                subtitle: 'grid 1/4-1/4-1/4-1/4',
                icon: '<i class="cm cm-section-col3_4"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
            'col-6' : {
                subtitle: 'grid 1/6-1/6-1/6-1/6-1/6-1/6',
                icon: '<i class="cm cm-section-col2_6"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-lg-2 col-md-3 col-sm-6">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
            'col-3-9' : {
                subtitle: 'grid 1/4-3/4',
                icon: '<i class="cm cm-section-col3-9"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-md-3 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-9 col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
            'col-4-8' : {
                subtitle: 'grid 1/3-2/3',
                icon: '<i class="cm cm-section-col4-8"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-md-4 col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-md-8 com-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
            'col-5-7' : {
                subtitle: 'grid 5/12-7/12',
                icon: '<i class="cm cm-section-col5-7"></i>',
                html: `<div class="cmb_row row">
                    <div class="cmb_column col-sm-5">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                    <div class="cmb_column col-sm-7">
                        <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
                    </div>
                </div>`
            },
        },
        settings:{
        },
    },
    cmb_column: {
        allowedParent: ['cmb_row'],
        addButtonText: 'Column',
        title: 'Column',
        icon: '<i class="cm cm-column"></i>',
        elementTabName: 'container',
        elementType: 'static-layout',
        avoidableTabs: ['background'],
        avoidableTabSettings: {
            position : ['align-content', 'justify-content', 'align-item','float','flex','display'],
            design : ['padding-left','padding-right','margin-left','margin-right']
        },
        htmlVariation: {
            'column-1' : {
                subtitle: '1 grid',
                icon: '<i class="cm cm-section-col1"></i>',
                html: `<div class="cmb_column col-sm-1">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-2' : {
                subtitle: '2 grid',
                icon: '<i class="cm cm-section-col2"></i>',
                html: `<div class="cmb_column col-sm-2">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-3' : {
                subtitle: '3 grid',
                icon: '<i class="cm cm-section-col3"></i>',
                html: `<div class="cmb_column col-sm-3">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-4' : {
                subtitle: '4 grid',
                icon: '<i class="cm cm-section-col4"></i>',
                html: `<div class="cmb_column col-sm-4">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-5' : {
                subtitle: '5 grid',
                icon: '<i class="cm cm-section-col5"></i>',
                html: `<div class="cmb_column col-sm-5">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-6' : {
                subtitle: '6 grid',
                icon: '<i class="cm cm-section-col6"></i>',
                html: `<div class="cmb_column col-sm-6">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-7' : {
                subtitle: '7 grid',
                icon: '<i class="cm cm-section-col7"></i>',
                html: `<div class="cmb_column col-sm-7">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-8' : {
                subtitle: '8 grid',
                icon: '<i class="cm cm-section-col8"></i>',
                html: `<div class="cmb_column col-sm-8">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-9' : {
                subtitle: '9 grid',
                icon: '<i class="cm cm-section-col9"></i>',
                html: `<div class="cmb_column col-sm-9">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-10' : {
                subtitle: '10 grid',
                icon: '<i class="cm cm-section-col10"></i>',
                html: `<div class="cmb_column col-sm-10">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-11' : {
                subtitle: '11 grid',
                icon: '<i class="cm cm-section-col11"></i>',
                html: `<div class="cmb_column col-sm-11">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
            'column-12' : {
                subtitle: '12 grid',
                icon: '<i class="cm cm-section-col12"></i>',
                html: `<div class="cmb_column col-sm-12">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
            },
        },
        settings:{
            column: {
                title: 'Column Setting',
                options: [
                    {
                        column: {
                            title: 'Column',
                            type: 'responsive-class',
                            optionName: 'grid',
                        },
                        order: {
                            title: 'Order',
                            type: 'responsive-class',
                            optionName: 'order',
                        },
                        offset: {
                            title: 'Offset',
                            type: 'responsive-class',
                            optionName: 'offset',
                        },
                    }
                ]
            }
        },
    },
    cmb_editable_text: {
        allowedParent: ['cmb_column'],
        allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete'],
        addButtonText: 'Editable Text',
        icon: '<i class="cm cm-text-block"></i>',
        title: 'Editable Text',
        elementTabName: 'component',
        elementType: 'static-layout',
        settings:{
        },
        html: '<div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>'
    },
};

cmbAllElements['cmb_slider'] = {
    allowedParent: ['cmb_section', 'cmb_column'],
    addButtonText: 'Image Slider',
    title: 'Slider',
    icon: '<i class="cm cm-image-slider"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    avoidableTabs : ['position','design'],
    subWrapper: '.cm-slide-container',
    settings:{
        slider: {
            title: 'Slider Setting',
            options: [
                {
                    'nav-position' : {
                        title: 'Slider Nav Position',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['sliderNavPosition'],
                        childItem: '.cm-slider'
                    },
                    'nav-button-color' : {
                        title: 'Slider Nav Color',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['sliderNavColor'],
                        childItem: '.cm-slider-direction'
                    },
                    'transparent-nav' : {
                        title: 'Enable Transparent Nav',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'toggle',
                        defaultValue: 'transparent-direction',
                        childItem: '.cm-slider'
                    },
                    'data-in-transition' : {
                        title: 'Transition In',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionIn'],
                        tagProp: 'data-in-transition',
                        childItem: '.cm-slider'
                    },
                    'data-out-transition' : {
                        title: 'Transition Out',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionOut'],
                        tagProp: 'data-out-transition',
                        childItem: '.cm-slider'
                    },
                    'data-display-interval' : {
                        title: 'Display Interval',
                        subTitle : 'Interval will be milliseconds',
                        type: 'input',
                        placeholder: '3000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-display-interval',
                        childItem: '.cm-slider'
                    },
                    'data-transition-interval' : {
                        title: 'Transition Interval',
                        subTitle : 'Interval will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-transition-interval',
                        childItem: '.cm-slider'
                    },
                    'data-pause-active' : {
                        title: 'Enable Pause Activity',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'toggle',
                        defaultValue: 'y',
                        tagProp: 'data-pause-active',
                        childItem: '.cm-slider'
                    },
                    'slider-height' : {
                        title: 'Slider Height',
                        subTitle : 'Specifies a top padding in percent of the width of the element',
                        type: 'input',
                        attribute : 'style',
                        styleName : 'padding-top',
                        inputType: 'range',
                        fieldParam: {
                          step: 0.1,
                          min: 10,
                          max: 100,
                        },
                        unit: {
                            '%':'%'
                        },
                        childItem: '.cm-slide-container'
                    },
                    'timeline-opacity' : {
                        title: 'Timeline Opacity',
                        subTitle : '',
                        type: 'input',
                        attribute : 'style',
                        styleName : 'opacity',
                        inputType: 'range',
                        fieldParam: {
                          step: 0.1,
                          min: 0,
                          max: 1,
                        },
                        childItem: '.cm-slider-timeline'
                    },
                    'timeline-position' : {
                        title: 'Timeline',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['sliderTimelinePosition'],
                        childItem: '.cm-slider'
                    },
                }
            ]
        }
    },
    html: `<div class="cmb_slider">
        <div class="cm-slider" data-in-transition="zoomIn" data-out-transition="flipOutX" data-display-interval="3000" data-transition-interval="1000" data-pause-active="y">
            <div class="cm-slide-container">
                <div class="cm-slide cmb_slide">
                    <div class="cm-slide-inner">
                    </div>
                </div>
            </div>

            <div class="cm-slider-timeline">
                <div class="cm-timeline-inner"></div>
            </div>
            <div class="cm-slider-direction cm-slider-direction-left"><i class="fa fa-caret-left"></i></div>
            <div class="cm-slider-direction cm-slider-direction-right"><i class="fa fa-caret-right"></i></div>
        </div>
</div>`,
    afterAdd : function (item) {
        cmSliderMethods.sliderRun(item.children('.cm-slider'),true);
    },
    onPreview : function () {
        $('.cm-slider').each(function () {
            cmSliderMethods.sliderRun($(this));
        })
    },
    beforeSave: function () {
        $('.cm-slider').each(function () {
            $(this).attr('data-destroy','y').removeAttr('data-current-interval')
                .removeAttr('data-pause')
                .removeAttr('data-process')
                .removeAttr('data-current-slide')
                .removeAttr('data-elapsed')
            $(this).find('.cmb_slide').each(function () {
                $(this).removeClass('cm-slide-disappearing').removeClass('cm-slide-current').removeAttr('style').removeClass('cm-slide-animated');
                if($(this).attr('data-in-transition')){
                    $(this).removeClass($(this).attr('data-in-transition'));
                }
                if($(this).attr('data-out-transition')){
                    $(this).removeClass($(this).attr('data-out-transition'));
                }
                $(this).find('.cmb-slide-element').each(function () {
                    $(this).removeAttr('style').removeClass('cm-slide-animated');
                    if($(this).attr('data-animation')){
                        $(this).removeClass($(this).attr('data-animation'));
                    }
                })
            })
        });
    },
    afterSave: function () {
        cmSliderMethods.sliderRun($('.cm-slider'),true);
    },
    afterMove: function(movedItem, previousParent){
        cmSliderMethods.rearrangeElement(movedItem.children('.cm-slider'));
    }
};
cmbAllElements['cmb_slide'] = {
    allowedParent: ['cmb_slider'],
    addButtonText: 'Slide',
    title: 'Slide',
    icon: '<i class="fa fa-sliders"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    avoidableTabs : ['position','design', 'general'],
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
    subWrapper: '.cm-slide-inner',
    settings:{
        slide : {
            title : 'Slide Settings',
            options : [
                {
                    'overlay-color' : {
                        title: 'Overlay Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background',
                        childItem: '.cm-slide-inner'
                    },
                    'data-in-transition' : {
                        title: 'Transition In',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionIn'],
                        tagProp: 'data-in-transition',
                    },
                    'data-out-transition' : {
                        title: 'Transition Out',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionOut'],
                        tagProp: 'data-out-transition',
                    },
                    'data-display-interval' : {
                        title: 'Display Interval',
                        subTitle : 'Interval will be milliseconds',
                        type: 'input',
                        placeholder: '3000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-display-interval',
                    },
                    'data-transition-interval' : {
                        title: 'Transition Interval',
                        subTitle : 'Interval will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-transition-interval',
                    },
                }
            ]
        }
    },
    html: `<div class="cm-slide cmb_slide">
    <div class="cm-slide-inner">
    </div>
</div>`,
    afterAdd: function (item) {
        cmSliderMethods.sliderRun(item.closest('.cm-slider'),true);
    }
};
cmbAllElements['cmb_slide_element_text'] = {
    allowedParent: ['cmb_slide'],
    addButtonText: 'Text',
    title: 'Text',
    icon: '<i class="cm cm-text-block"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    avoidableTabs : ['position','design', 'background', 'general'],
    hideActionSymbol: true,
    outsideOptionBox: true,
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    settings:{
        'text' : {
            title : 'Text Settings',
            options : [
                {
                    'data-animation' : {
                        title: 'Animation',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionIn'],
                        tagProp: 'data-animation',
                    },
                    'data-exists' : {
                        title: 'Item existance',
                        subTitle : 'Whether the item will be visible from beginning or not',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'toggle',
                        defaultValue: 'y',
                        tagProp: 'data-exists-from-start',
                    },
                    'data-animation-duration' : {
                        title: 'Animation Duration',
                        subTitle : 'Duration will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-duration',
                    },
                    'data-animation-delay' : {
                        title: 'Animation Delay',
                        subTitle : 'Delay will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-delay',
                    },
                    'text-effect' : {
                        title: 'Text Effect',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['sliderTextClass'],
                        childItem: '.cm-slide-element-core'
                    },
                    'color' : {
                        title: 'Text Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-single-line-editable-text'
                    },
                    'background-color' : {
                        title: 'Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem: '.cm-slide-element-core'
                    },
                    'font-weight' : {
                        title: 'Font Weight',
                        subTitle : '',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['font-weight'],
                        attribute : 'custom-class',
                    },
                    'padding' : {
                        title: 'Padding',
                        subTitle : 'Specifies a bottom padding in percent of the width of the element',
                        param : {
                            top: {
                                placeholder: '0',
                            },
                            left: {
                                placeholder: '0',
                            },
                            right: {
                                placeholder: '0',
                            },
                            bottom: {
                                placeholder: '0',
                            },
                        },
                        unit: {
                            '%': '%'
                        },
                        type: 'input',
                        inputType : 'fourSided',
                        attribute : 'style',
                        styleName: 'padding',
                        childItem: '.cm-slide-element-core'
                    },
                }
            ]
        }
    },
    html: `<div class="cmb-slide-element cmb_slide_element_text default-slide-element-position"><span class="cmb-single-line-editable-text cm-slide-element-core">Some Html Text here</span></div>`,
};
cmbAllElements['cmb_slide_element_image'] = {
    allowedParent: ['cmb_slide'],
    addButtonText: 'Image',
    title: 'Image',
    icon: '<i class="cm cm-image"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    avoidableTabs : ['position','design', 'background', 'general'],
    hideActionSymbol: true,
    outsideOptionBox: true,
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    settings:{
        'image' : {
            title : 'Image Settings',
            options : [
                {
                    'data-animation' : {
                        title: 'Animation',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionIn'],
                        tagProp: 'data-animation',
                    },
                    'data-exists' : {
                        title: 'Item existance',
                        subTitle : 'Whether the item will be visible from beginning or not',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'toggle',
                        defaultValue: 'y',
                        tagProp: 'data-exists-from-start',
                    },
                    'data-animation-duration' : {
                        title: 'Animation Duration',
                        subTitle : 'Duration will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-duration',
                    },
                    'data-animation-delay' : {
                        title: 'Animation Delay',
                        subTitle : 'Delay will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-delay',
                    },
                    'border-radius' : {
                        title: 'Border radius',
                        subTitle : 'this is four cornered border radius setting.',
                        param : {
                            'top-left': {
                                placeholder: '0',
                            },
                            'top-right': {
                                placeholder: '0',
                            },
                            'bottom-left': {
                                placeholder: '0',
                            },
                            'bottom-right': {
                                placeholder: '0',
                            },
                        },
                        unit: {
                            '%' : '%'
                        },
                        type: 'input',
                        inputType : 'fourCornered',
                        attribute : 'style',
                        styleName: 'border-*-radius',
                        childItem: 'img',
                    },
                    'background-color' : {
                        title: 'Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem: '.cm-slide-element-core'
                    },
                    'padding' : {
                        title: 'Padding',
                        subTitle : 'Specifies a bottom padding in percent of the width of the element',
                        param : {
                            top: {
                                placeholder: '0',
                            },
                            left: {
                                placeholder: '0',
                            },
                            right: {
                                placeholder: '0',
                            },
                            bottom: {
                                placeholder: '0',
                            },
                        },
                        unit: {
                            '%': '%'
                        },
                        type: 'input',
                        inputType : 'fourSided',
                        attribute : 'style',
                        styleName: 'padding',
                        childItem: '.cm-slide-element-core'
                    },
                    'image' : {
                        title: 'Image',
                        subTitle : 'link your image',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'src',
                        childItem: 'img'
                    },
                    'image-filter' : {
                        title: 'Image Filter',
                        subTitle : 'Select a filter',
                        type: 'input',
                        inputType : 'select',
                        attribute : 'custom-class',
                        fieldParam : cmbStyleTypes['filter'],
                        childItem: 'img'
                    },
                    'image-width' : {
                        title: 'Image Width',
                        subTitle : '',
                        type: 'input',
                        inputType : 'range',
                        attribute: 'style',
                        styleName : 'width',
                        fieldParam : {
                            step : 1,
                            min : 1,
                            max : 100
                        },
                        unit : {
                            '%' : '%'
                        }
                    },
                }
            ]
        }
    },
    html: `<div class="cmb-slide-element cmb_slide_element_image default-slide-element-position">
<img src="images/01.jpg" alt="slider img" class="w-100 cm-slide-element-core">
</div>`,
};
cmbAllElements['cmb_slide_element_button'] = {
    allowedParent: ['cmb_slide'],
    addButtonText: 'Button',
    title: 'Button',
    icon: '<i class="cm cm-link"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    avoidableTabs : ['position','design', 'background', 'general'],
    hideActionSymbol: true,
    outsideOptionBox: true,
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    settings:{
        'button' : {
            title : 'Button Settings',
            options : [
                {
                    'data-animation' : {
                        title: 'Animation',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionIn'],
                        tagProp: 'data-animation',
                    },
                    'data-exists' : {
                        title: 'Item existance',
                        subTitle : 'Whether the item will be visible from beginning or not',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'toggle',
                        defaultValue: 'y',
                        tagProp: 'data-exists-from-start',
                    },
                    'data-animation-duration' : {
                        title: 'Animation Duration',
                        subTitle : 'Duration will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-duration',
                    },
                    'data-animation-delay' : {
                        title: 'Animation Delay',
                        subTitle : 'Delay will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-delay',
                    },
                    'padding' : {
                        title: 'Padding',
                        subTitle : 'Specifies a bottom padding in percent of the width of the element',
                        param : {
                            top: {
                                placeholder: '0',
                            },
                            left: {
                                placeholder: '0',
                            },
                            right: {
                                placeholder: '0',
                            },
                            bottom: {
                                placeholder: '0',
                            },
                        },
                        unit: {
                            '%' : '%'
                        },
                        type: 'input',
                        inputType : 'fourSided',
                        attribute : 'style',
                        styleName: 'padding',
                        childItem: '.btn'
                    },
                    'color' : {
                        title: 'Type',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonType'],
                        childItem: '.btn'
                    },
                    'link' : {
                        title: 'Link',
                        subTitle : 'Button Link',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                        childItem: '.btn'
                    },
                    'target' : {
                        title: 'Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        fieldParam : cmbStyleTypes['anchorTargetType'],
                        childItem: '.btn'
                    }
                }
            ]
        }
    },
    html: `<div class="cmb-slide-element cmb_slide_element_button default-slide-element-position">
<a class="btn btn-primary" href="#"><span class="cmb-single-line-editable-text cm-slide-element-core">Button Text</span></a>
</div>`,
};
cmbAllElements['cmb_slide_element_shape'] = {
    allowedParent: ['cmb_slide'],
    addButtonText: 'Shape',
    title: 'Shape',
    icon: '<i class="cm cm-section-blank"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    avoidableTabs : ['position', 'design', 'background', 'general'],
    hideActionSymbol: true,
    outsideOptionBox: true,
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    settings:{
        'shape' : {
            title : 'Shape settings',
            options : [
                {
                    'data-animation' : {
                        title: 'Animation',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['transitionIn'],
                        tagProp: 'data-animation',
                    },
                    'data-exists' : {
                        title: 'Item existance',
                        subTitle : 'Whether the item will be visible from beginning or not',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'toggle',
                        defaultValue: 'y',
                        tagProp: 'data-exists-from-start',
                    },
                    'data-animation-duration' : {
                        title: 'Animation Duration',
                        subTitle : 'Duration will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-duration',
                    },
                    'data-animation-delay' : {
                        title: 'Animation Delay',
                        subTitle : 'Delay will be milliseconds',
                        type: 'input',
                        placeholder: '1000',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-animation-delay',
                    },
                    'background-color' : {
                        title: 'Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem: '.cm-slide-element-core'
                    },
                    'width' : {
                        title: 'Width',
                        subTitle : '',
                        type: 'input',
                        inputType : 'range',
                        attribute: 'style',
                        styleName : 'width',
                        fieldParam : {
                            step : 1,
                            min : 1,
                            max : 100
                        },
                        unit: {
                            '%' : '%'
                        }
                    },
                    'height' : {
                        title: 'Height',
                        subTitle : '',
                        type: 'input',
                        inputType : 'range',
                        attribute: 'style',
                        styleName : 'height',
                        fieldParam : {
                            step : 1,
                            min : 1,
                            max : 100
                        },
                        unit: {
                            '%' : '%'
                        }
                    },
                }
            ]
        }
    },
    html: `<div class="cmb-slide-element cmb_slide_element_shape default-slide-element-position"><div class="cm-slide-element-core"></div></div>`,
};

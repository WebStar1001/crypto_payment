cmbAllElements['cmb_pre_layout']= {
    allowedParent: ['cmb-content-wrapper'],
    addButtonText: 'Pre-build Template',
    title: 'Pre-build Template',
    icon: '<i class="fa fa-th"></i>',
    elementTabName: 'pre-build-template',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next','cmb-option-settings', 'cmb-option-delete'],
    settings:{
        setting:{
            title: 'image Setting',
                options: [
                {
                    'image' : {
                        title: 'Image',
                        subTitle : '',
                        type: 'input',
                        placeholder: 'background image',
                        attribute : 'prop',
                        inputType: 'image',
                        styleName: 'background-image',
                        tagProp: 'src',
                        childItem: 'img',
                        wrapperClass : '',
                    },
                    'button-color' : {
                        title: 'Button Type',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonType'],
                        childItem: '.btn'
                    },
                    'size' : {
                        title: 'Size',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonSize']
                    },
                    'button-link' : {
                        title: 'Button Link',
                        subTitle : 'Button Link',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                        childItem: '.btn'
                    },
                    'target' : {
                        title: 'Button Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        fieldParam : cmbStyleTypes['anchorTargetType'],
                        childItem: '.btn'
                    },
                }
            ]
        }
    },
    html: `<section class="cmb_pre_layout page-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <h2 class="text-white mt-0 cmb-single-line-editable-text">We've got what you need!</h2>
                <hr class="divider light my-4">
                <div class="cmb-editable-text text-white-50 mb-4">
                    <div class="cmb-editable-text-container">
                        Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!
                    </div>
                </div>
                <img src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg" alt="" style="display: table; margin: 10px auto">
                <a class="btn btn-light btn-xl js-scroll-trigger cmb-single-line-editable-text" href="#services">Get Started!</a>
            </div>
        </div>
    </div>
</section>`
};
cmbAllElements['cmb_tab']= {
    allowedParent: ['cmb_column'],
    addButtonText: 'Tab',
    title: 'Tab',
    icon: '<i class="cm cm-tab"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    settings:{
        tab : {
            title: 'Tab Settings',
            options: [
                {
                    'tab-link-color' : {
                        title: 'Tab Link Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_tab_item a',
                    },
                    'dark-tab-link-color' : {
                        title: 'Tab Link Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_tab_item a',
                        parentItem : '.dark',
                    },
                    'tab-link-background-color' : {
                        title: 'Tab Link Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_tab_item a',
                    },
                    'dark-tab-link-background-color' : {
                        title: 'Tab Link Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_tab_item a',
                        parentItem : '.dark',
                    },
                    'tab-link-hover-color' : {
                        title: 'Tab Link Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_tab_item a',
                        childPseudo: ':hover'
                    },
                    'dark-tab-link-hover-color' : {
                        title: 'Tab Link Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_tab_item a',
                        childPseudo: ':hover',
                        parentItem: '.dark',
                    },
                    'tab-link-hover-background-color' : {
                        title: 'Tab Link Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_tab_item a',
                        childPseudo: ':hover'
                    },
                    'dark-tab-link-hover-background-color' : {
                        title: 'Tab Link Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_tab_item a',
                        childPseudo: ':hover',
                        parentItem: '.dark',
                    },
                    'tab-link-active-color' : {
                        title: 'Tab Link Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_tab_item.tab-active a',
                    },
                    'dark-tab-link-active-color' : {
                        title: 'Tab Link Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_tab_item.tab-active a',
                        parentItem: '.dark',
                    },
                    'tab-link-active-background-color' : {
                        title: 'Tab Link Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_tab_item.tab-active a',
                    },
                    'dark-tab-link-active-background-color' : {
                        title: 'Tab Link Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_tab_item.tab-active a',
                        parentItem: '.dark',
                    },
                    'tab-body-color' : {
                        title: 'Tab Body Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.tab-body',
                    },
                    'dark-tab-body-color' : {
                        title: 'Tab Body Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.tab-body',
                        parentItem: '.dark',
                    },
                }
            ]
        },
    },
    html: `<div class="cmb_tab cmb-element">
    <ul class="tab-nav d-flex">
        <li class="cmb_tab_item tab-active"><a href="#" class="cmb-single-line-editable-text">Tab 1</a></li>
        <li class="cmb_tab_item"><a href="#" class="cmb-single-line-editable-text">Tab 2</a></li>
    </ul>
    <div class="tab-body tab-active">
        <div class="tab-inner tab-active"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
        <div class="tab-inner"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
    </div>
</div>`
};
cmbAllElements['cmb_tab_item']= {
    allowedParent: ['cmb_tab'],
    addButtonText: 'Tab Item',
    title: 'Tab Item',
    allowedActionElement : ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete'],
    hideActionSymbol : true,
    icon: '<i class="fa fa-th"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    settings:{
    },
    html: ['.tab-nav','<li class="cmb_tab_item"><a href="#" class="cmb-single-line-editable-text">New Tab</a></li>'],
    afterAdd: function (targetDom) {
        targetDom.closest('.cmb_tab').children('.tab-body').append('<div class="tab-inner"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>');
        targetDom.closest('.cmb_tab').children('.tab-body').children('.tab-inner').removeClass('tab-active').eq(0).addClass('tab-active');
        targetDom.closest('.cmb_tab').children('.tab-nav').children('.cmb_tab_item').removeClass('tab-active').eq(0).addClass('tab-active');
    },
    afterPrev: function (targetDom,previousIndex) {
        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex-1).before(targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex));
    },
    afterNext: function (targetDom,previousIndex) {
        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex+1).after(targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex));
    },
    onLoad: function (targetDom) {
        $(document).on('click', '.cmb_tab_item', function () {
            $(this).addClass('tab-active').siblings('.cmb_tab_item').removeClass('tab-active').closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq($(this).index()).addClass('tab-active').siblings('.tab-inner').removeClass('tab-active');
        });
    },
    beforeDelete: function (targetDom) {
        targetDom.closest('.cmb_tab').find('.tab-active').removeClass('tab-active');
        let indexId = 1;
        if(targetDom.index() > 0){
            indexId = 0;
        }
        targetDom.closest('.tab-nav').children('.cmb_tab_item').eq(indexId).addClass('tab-active');
        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(indexId).addClass('tab-active')

        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(targetDom.index()).remove();
    },
    beforeSave: function(){
        $('.cmb_tab').each(function () {
            $(this).find('.tab-active').removeClass('tab-active');;
            $(this).children('.tab-nav').children('.cmb_tab_item').eq(0).addClass('tab-active');
            $(this).children('.tab-body').children('.tab-inner').eq(0).addClass('tab-active');
        })
    }
};






cmbAllElements['cmb_custom_tab']= {
    allowedParent: ['cmb_column'],
    addButtonText: 'Custom Tab',
    title: 'Custom Tab',
    icon: '<i class="cm cm-tab"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    settings:{
        tab : {
            title: 'Tab Settings',
            options: [
                {
                    'tab-link-color' : {
                        title: 'Tab Link Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_custom_tab_item',
                    },
                    'dark-tab-link-color' : {
                        title: 'Tab Link Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb_custom_tab_item',
                        parentItem : '.dark',
                    },
                    'tab-link-background-color' : {
                        title: 'Tab Link Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_custom_tab_item',
                    },
                    'dark-tab-link-background-color' : {
                        title: 'Tab Link Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb_custom_tab_item',
                        parentItem : '.dark',
                    },
                    'tab-link-hover-color' : {
                        title: 'Hover Tab Link Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        pseudo : ':hover',
                        childItem : '.cmb_custom_tab_item',
                    },
                    'dark-tab-link-hover-color' : {
                        title: 'Hover Tab Link Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        pseudo : ':hover',
                        childItem : '.cmb_custom_tab_item',
                        parentItem : '.dark',
                    },
                    'tab-link-hover-background-color' : {
                        title: 'Hover Tab Link Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        pseudo : ':hover',
                        childItem : '.cmb_custom_tab_item',
                    },
                    'dark-custom-tab-link-hover-background-color' : {
                        title: 'Hover Tab Link Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        pseudo : ':hover',
                        childItem : '.cmb_custom_tab_item',
                        parentItem : '.dark',
                    },
                    'active-tab-link-color' : {
                        title: 'Active Tab Link Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.tab-active.cmb_custom_tab_item',
                    },
                    'dark-active-tab-link-color' : {
                        title: 'Active Tab Link Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.tab-active.cmb_custom_tab_item',
                        parentItem : '.dark',
                    },
                    'tab-link-arrow-color' : {
                        title: 'Tab Link Arrow Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        pseudo : ':before',
                        childItem : '.cmb_custom_tab_link',
                    },
                    'dark-tab-link-arrow-color' : {
                        title: 'Tab Link Arrow Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        pseudo : ':before',
                        childItem : '.cmb_custom_tab_link',
                        parentItem : '.dark',
                    },
                    'tab-body-text-color' : {
                        title: 'Tab Body Text Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.tab-body',
                    },
                    'dark-tab-body-text-color' : {
                        title: 'Tab Body Text Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.tab-body',
                        parentItem : '.dark',
                    },
                    'tab-body-background-color' : {
                        title: 'Tab Body Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.tab-body',
                    },
                    'dark-tab-body-background-color' : {
                        title: 'Tab Body Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.tab-body',
                        parentItem : '.dark',
                    },
                    'tab-body-border-color' : {
                        title: 'Tab Body Border Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.tab-body',
                    },
                    'dark-tab-body-border-color' : {
                        title: 'Tab Body Border Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.tab-body',
                        parentItem : '.dark',
                    },
                }
            ]
        },
    },
    html: `<div class="cmb_custom_tab cmb-element">
    <ul class="tab-nav">
        <li class="cmb_custom_tab_item text-center tab-active">
           <div class="d-flex cmb_custom_tab_link">
                <span class="m-auto">
                    <span class="glyph-icon flaticon-box tab-icon"></span>
                    <strong class="font-size-18 d-block"><span class="cmb-single-line-editable-text">Tab 1</span></strong>
                </span>
            </div>
        </li>
        <li class="cmb_custom_tab_item text-center">
           <div class="d-flex cmb_custom_tab_link">
                <span class="m-auto">
                    <span class="glyph-icon flaticon-atm tab-icon"></span>
                    <strong class="font-size-18 d-block"><span class="cmb-single-line-editable-text">Tab 2</span></strong>
                </span>
            </div>
        </li>
    </ul>
    <div class="tab-body tab-active mt-4">
        <div class="tab-inner tab-active"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore eos modi, molestiae mollitia quia saepe voluptatem? A ab aperiam architecto commodi consequuntur debitis delectus, distinctio dolorem eligendi eum eveniet ex facere hic in incidunt laboriosam minima</div></div></div>
        <div class="tab-inner"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore eos modi, molestiae mollitia quia saepe voluptatem? A ab aperiam architecto commodi consequuntur debitis delectus, distinctio dolorem eligendi eum eveniet ex facere hic in incidunt laboriosam minima</div></div></div>
    </div>
</div>`,
    onLoad: function (){
        $(document).on('click', '.cmb_custom_tab_item', function () {
            $(this).addClass('tab-active').siblings('.cmb_custom_tab_item').removeClass('tab-active').closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq($(this).index()).addClass('tab-active').siblings('.tab-inner').removeClass('tab-active');
        });
    }
};
cmbAllElements['cmb_custom_tab_item']= {
    allowedParent: ['cmb_custom_tab'],
    addButtonText: 'Tab Item',
    title: 'Tab Item',
    allowedActionElement : ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-settings'],
    hideActionSymbol : true,
    icon: '<i class="fa fa-th"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    settings:{
        title : {
            title: 'Tab Item',
            options: [
                {
                    'icon' : {
                        title: 'Icon',
                        subTitle : 'Select a icon',
                        type: 'input',
                        inputType : 'dropdown',
                        fieldParam : cmbStyleTypes['custom-icon'],
                        attribute: 'custom-class',
                        childItem : '.tab-icon',
                        wrapperClass: 'icon-dropdown'
                    },
                }
            ]
        },
    },
    html: ['.tab-nav',`<li class="cmb_custom_tab_item text-center">
   <div class="d-flex cmb_custom_tab_link">
<span class="m-auto">
            <span class="glyph-icon flaticon-box tab-icon"></span>
            <strong class="font-size-18 d-block"><span class="cmb-single-line-editable-text">New Tab Item</span></strong>
        </span>
    </div>
</li>`],
   afterAdd: function (targetDom) {
        targetDom.closest('.cmb_custom_tab').children('.tab-body').append('<div class="tab-inner"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore eos modi, molestiae mollitia quia saepe voluptatem? A ab aperiam architecto commodi consequuntur debitis delectus, distinctio dolorem eligendi eum eveniet ex facere hic in incidunt laboriosam minima</div></div></div>');
        targetDom.closest('.cmb_custom_tab').children('.tab-body').children('.tab-inner').removeClass('tab-active').eq(0).addClass('tab-active');
        targetDom.closest('.cmb_custom_tab').children('.tab-nav').children('.cmb_tab_item').removeClass('tab-active').eq(0).addClass('tab-active');
    },
    afterPrev: function (targetDom,previousIndex) {
        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex-1).before(targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex));
    },
    afterNext: function (targetDom,previousIndex) {
        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex+1).after(targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(previousIndex));
    },
    onLoad: function (targetDom) {
        $(document).on('click', '.cmb_custom_tab_item', function () {
            $(this).addClass('tab-active').siblings('.cmb_tab_item').removeClass('tab-active').closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq($(this).index()).addClass('tab-active').siblings('.tab-inner').removeClass('tab-active');
        });
    },
    beforeDelete: function (targetDom) {
        targetDom.closest('.cmb_custom_tab').find('.tab-active').removeClass('tab-active');
        let indexId = 1;
        if(targetDom.index() > 0){
            indexId = 0;
        }
        targetDom.closest('.tab-nav').children('.cmb_custom_tab_item').eq(indexId).addClass('tab-active');
        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(indexId).addClass('tab-active')

        targetDom.closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq(targetDom.index()).remove();
    },
    beforeSave: function(){
        $('.cmb_custom_tab').each(function () {
            $(this).find('.tab-active').removeClass('tab-active');;
            $(this).children('.tab-nav').children('.cmb_custom_tab_item').eq(0).addClass('tab-active');
            $(this).children('.tab-body').children('.tab-inner').eq(0).addClass('tab-active');
        })
    }
};






cmbAllElements['cmb_gallery']= {
    allowedParent: ['cmb_column'],
    addButtonText: 'Image Gallery',
    title: 'Image Gallery',
    icon: '<i class="cm cm-image-gallery"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    subWrapper: '.cm-pfbox',
    avoidableTabs : ['position','design'],
    settings:{
        gallery:{
            title: 'Gallery Setting',
                options: [
                {
                    'compact' : {
                        title: 'Compact Mode',
                        subTitle : 'On of compact mode',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'toggle',
                        defaultValue: 'no-space',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'col-xl' : {
                        title: 'Extra large',
                        subTitle : 'Number of column for the grid. works on equal to or greater than 1200px',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-cm-column-xl',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'col-lg' : {
                        title: 'Large',
                        subTitle : 'Number of column for the grid. works on between 992px to 1199px',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-cm-column-lg',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'col-md' : {
                        title: 'Medium',
                        subTitle : 'Number of column for the grid. works on between 768px to 991px',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-cm-column-md',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'col-sm' : {
                        title: 'Small',
                        subTitle : 'Number of column for the grid. works on between 576px to 700px',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-cm-column-sm',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'col-xs' : {
                        title: 'Extra Small',
                        subTitle : 'Number of column for the grid. works on between 575px to 400px',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-cm-column-xs',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'col-tn' : {
                        title: 'Tiny',
                        subTitle : 'Number of column for the grid. works on less than 400px',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'number',
                        tagProp: 'data-cm-column-tn',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'button-available' : {
                        title: 'Active buttons',
                        subTitle : 'If off, the button will not be visible',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        fieldParam: {
                            '': 'On',
                            'false': 'Off',
                        },
                        tagProp: 'data-cm-button',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'default-group' : {
                        title: 'Active All group',
                        subTitle : 'If off, default group will not be visible',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        fieldParam: {
                            '': 'On',
                            'false': 'Off',
                        },
                        tagProp: 'data-cm-default-group',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'starting-group' : {
                        title: 'Different Start group',
                        subTitle : 'If given, specific group will be activated instead of All',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'select',
                        fieldParam: function (){
                            let data = $('.' + $('#cmb-admin-modal').attr('data-cmb-wrapper') + '[data-cmb-id="' + $('#cmb-admin-modal').attr('data-cmb-id') + '"]').attr('data-pf-groups');
                            let objItem = {}
                            if(data){
                                data = data.split('|');
                                $.each(data,function (key,val) {
                                    if(val || $.is_numeric(val)){
                                        objItem[val] = val.replace(/\-/g, ' ');
                                    }
                                })
                            }
                            return objItem;
                        },
                        tagProp: 'data-cm-starting-group',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                }
            ]
        }
    },
    html: `<div class="cmb_gallery cm-pfolio cmb-element">
    <div class="cm-pfbox cm-lb-img-group">
        <div class="cm-pfitem cmb_gallery_item" data-cm-section="general">
            <div class="cm-pf-img">
                <img src="images/demo.jpg" alt="" class="cm-lb-img-link" data-cm-lb-img="">
            </div>
        </div>
    </div>
</div>`,
    afterAdd : function (item) {
        cmPfolio.reCall(item.children('.cm-pfbox'));
    },
    beforeSave : function () {
        $('.cmb_gallery').children('.cm-pfbtn-grp').remove();
    },
    afterSave : function () {
        cmPfolio.reCall();
    },

};
cmbAllElements['cmb_gallery_item']= {
    allowedParent: ['cmb_gallery'],
    addButtonText: 'Image Gallery item',
    title: 'Image Gallery item',
    icon: '<i class="fa fa-th"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    subWrapper: '.cm-pfbox',
    avoidableTabs : ['position','design'],
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-settings'],
    hideActionSymbol: true,
    settings:{
        'gallery item':{
            title: 'Gallery Item Setting',
                options: [
                {
                    'category' : {
                        title: 'category',
                        subTitle : 'add 1 or multiple categories for the item',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'multiInput',
                        tagProp: 'data-cm-section',
                        afterChange: function () {
                            cmPfolio.reCall();
                        },
                    },
                    'image' : {
                        title: 'Image',
                        subTitle : 'link your image',
                        type: 'input',
                        placeholder: 'background image',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'src',
                        childItem : '.cm-lb-img-link',
                        afterChange: function (item) {
                            cmPfolio.reCall(item.closest('.cm-pfbox'));
                        },
                    },
                    'custom-image' : {
                        title: 'custom image',
                        subTitle : 'use if you want to use different image in lightbox',
                        type: 'input',
                        placeholder: 'background image',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'data-cm-lb-img',
                        childItem : '.cm-lb-img-link',
                    },
                }
            ]
        }
    },
    html: `<div class="cm-pfitem cmb_gallery_item" data-cm-section="general">
    <div class="cm-pf-img">
        <img src="images/demo.jpg" alt="" class="cm-lb-img-link">
    </div>
</div>`,
    afterAdd : function (item) {
        cmPfolio.reCall(item.closest('.cm-pfbox'));
    },
    afterPrev : function (item) {
        cmPfolio.reCall(item.closest('.cm-pfbox'));
    },
    afterNext : function (item) {
        cmPfolio.reCall(item.closest('.cm-pfbox'));
    },
    afterDelete : function (parentItem) {
        cmPfolio.reCall(parentItem.children('.cm-pfbox'));
    },
};
cmbAllElements['cmb_default_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Default Title',
    title: 'Default Title',
    icon: '<i class="cm cm-title-default"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    subWrapper: '.cmb-title',
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title',
                        childPseudo : '::before'
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title',
                        childPseudo : '::before',
                        parentItem: '.dark',
                    },
                    'highlight-border-color' : {
                        title: 'Highlight Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title',
                        childPseudo : '::after'
                    },
                    'dark-highlight-border-color' : {
                        title: 'Highlight Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title',
                        childPseudo : '::after',
                        parentItem: '.dark',
                    },
                    'color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem: '.dark',
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-default-title-wrapper cmb_default_title cmb-element">
<h2 class="cmb-title"><span class="cmb-title-part-1 cmb-single-line-editable-text">Default</span> <span class="cmb-title-part-2 cmb-single-line-editable-text">Title</span></h2>
        </div>`,
};
cmbAllElements['cmb_bottom_circle_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Bottom Circle Title',
    title: 'Bottom Circle Title',
    icon: '<i class="cm cm-title-bottom-circle"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    subWrapper: '.cmb-title',
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title',
                        childPseudo : '::before'
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title',
                        childPseudo : '::before',
                        parentItem : '.dark'
                    },
                    'circle-color' : {
                        title: 'Circle Background Color',
                        subTitle : 'Select a  color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-title',
                        childPseudo : '::after'
                    },
                    'dark-circle-color' : {
                        title: 'Circle Background Color (Dark)',
                        subTitle : 'Select a  color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-title',
                        childPseudo : '::after',
                        parentItem : '.dark'
                    },
                    'color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-bottom-circle-title-wrapper cmb_bottom_circle_title cmb-element">
            <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Bottom Circle Title</span></h2>
        </div>`,
};
cmbAllElements['cmb_sideline_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Sideline Title',
    title: 'Sideline Title',
    icon: '<i class="cm cm-title-sideline"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    subWrapper: ['.cmb-title', '.cmb-subtitle'],
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'border-left-color' : {
                        title: 'Left Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        pseudo : '::before'
                    },
                    'dark-border-left-color' : {
                        title: 'Left Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        pseudo : '::before',
                        parentItem : '.dark'
                    },
                    'border-right-color' : {
                        title: 'Right Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        pseudo : '::after'
                    },
                    'dark-border-right-color' : {
                        title: 'Right Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        pseudo : '::after',
                        parentItem : '.dark'
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                    'subtitle-color' : {
                        title: 'Subtitle Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle'
                    },
                    'dark-subtitle-color' : {
                        title: 'Subtitle Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-sideline-title-wrapper cmb_sideline_title cmb-element">
            <div class="cmb-title-container">
                <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Sideline Title</span></h2>
                <h5 class="cmb-subtitle"><span class="cmb-single-line-editable-text">Lorem ipsum</span></h5>
            </div>
        </div>`,
};
cmbAllElements['cmb_sub_boxed_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Sub Boxed Title',
    title: 'Sub Boxed Title',
    icon: '<i class="cm cm-title-sub-boxed"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'tagline-first-part-color' : {
                        title: 'Tagline First Part Color',
                        subTitle : 'Select a color for tagline 1st part text',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-title-part-1',
                    },
                    'dark-tagline-first-part-color' : {
                        title: 'Tagline First Part Color (Dark)',
                        subTitle : 'Select a color for tagline 1st part text',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-title-part-1',
                        parentItem : '.dark'
                    },
                    'tagline-second-part-color' : {
                        title: 'Tagline Second Part Color',
                        subTitle : 'Select a color for tagline 2nd part text',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-title-part-2',
                    },
                    'dark-tagline-second-part-color' : {
                        title: 'Tagline Second Part Color (Dark)',
                        subTitle : 'Select a color for tagline 2nd part text',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-title-part-2',
                        parentItem : '.dark'
                    },
                    'tagline-second-part-bg-color' : {
                        title: 'Tagline Second Part Background Color',
                        subTitle : 'Select a color for tagline 2nd part background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-title-part-2',
                    },
                    'dark-tagline-second-part-bg-color' : {
                        title: 'Tagline Second Part Background Color (Dark)',
                        subTitle : 'Select a color for tagline 2nd part background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-title-part-2',
                        parentItem : '.dark'
                    },
                    'tagline-border-color' : {
                        title: 'Tagline Border Color',
                        subTitle : 'Select a color for tagline border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : ['.cmb-title-part-1', '.cmb-title-part-2'],
                    },
                    'dark-tagline-border-color' : {
                        title: 'Tagline Border Color (Dark)',
                        subTitle : 'Select a color for tagline border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : ['.cmb-title-part-1', '.cmb-title-part-2'],
                        parentItem : '.dark'
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-sub-boxed-title-wrapper cmb_sub_boxed_title cmb-element">
            <div class="cmb-title-container">
                <h5 class="cmb-subtitle"><span class="cmb-title-part-1 cmb-single-line-editable-text">Lorem</span> <span class="cmb-title-part-2 cmb-single-line-editable-text">ipsum</span></h5>
                <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Sub Boxed Title</span></h2>
            </div>
        </div>`,
};
cmbAllElements['cmb_jumbo_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Jumbo Title',
    title: 'Jumbo Title',
    icon: '<i class="cm cm-title-jumbo"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    subWrapper: ['.cmb-title-container', '.cmb-title', '.cmb-subtitle'],
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                        childPseudo : ['::after', '::before']
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                        childPseudo : ['::after', '::before'],
                        parentItem : '.dark'
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                    'subtitle-color' : {
                        title: 'Subtitle Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle'
                    },
                    'dark-subtitle-color' : {
                        title: 'Subtitle Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-jumbo-title-wrapper cmb_jumbo_title cmb-element">
            <div class="cmb-title-container">
                <h5 class="cmb-subtitle"><span class="cmb-single-line-editable-text">Lorem ipsum</span></h5>
                <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Jumbo Title</span></h2>
            </div>
        </div>`,
};
cmbAllElements['cmb_sub_top_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Sub Top Title',
    title: 'Sub Top Title',
    icon: '<i class="cm cm-title-sub-top"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    subWrapper: ['.cmb-title-container', '.cmb-title', '.cmb-subtitle'],
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-subtitle',
                        childPseudo : ['::after', '::before']
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-subtitle',
                        childPseudo : ['::after', '::before'],
                        parentItem : '.dark'
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                    'subtitle-color' : {
                        title: 'Subtitle Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle'
                    },
                    'dark-subtitle-color' : {
                        title: 'Subtitle Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-sub-top-title-wrapper cmb_sub_top_title cmb-element">
                <h5 class="cmb-subtitle"><span class="cmb-single-line-editable-text">Lorem ipsum</span></h5>
                <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Sub Top Title</span></h2>
            </div>`,
};
cmbAllElements['cmb_bottom_art_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Bottom Art Title',
    title: 'Bottom Art Title',
    icon: '<i class="cm cm-title-art"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                        childPseudo : ['::after', '::before']
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                        childPseudo : ['::after', '::before'],
                        parentItem : '.dark'
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                    'icon' : {
                        title: 'Icon',
                        subTitle : 'Select a icon',
                        type: 'input',
                        inputType : 'dropdown',
                        fieldParam : cmbStyleTypes['fa-icon-class'],
                        attribute: 'custom-class',
                        childItem : '.cmb-title-icon',
                        wrapperClass: 'icon-dropdown'
                    },
                    'icon-color' : {
                        title: 'Icon Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title-icon'
                    },
                    'dark-icon-color' : {
                        title: 'Icon Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title-icon',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-bottom-art-title-wrapper cmb_bottom_art_title cmb-element">
            <div class="cmb-title-container">
                <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Bottom Art Title</span></h2>
                <i class="fa fa-cut cmb-title-icon"></i>
            </div>
        </div>`,
};
cmbAllElements['cmb_shadow_text_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Shadow Text Title',
    title: 'Shadow Text Title',
    icon: '<i class="cm cm-title-shadow"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    subWrapper: ['.cmb-title-container', '.cmb-title', '.cmb-subtitle'],
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'shadow-text' : {
                        title: 'Shadow Text',
                        subTitle : '',
                        type: 'input',
                        inputType : 'text',
                        attribute : 'style',
                        styleName: 'content',
                        childItem : '.cmb-title-container',
                        childPseudo: '::before',
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                    'subtitle-color' : {
                        title: 'Subtitle Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle'
                    },
                    'dark-subtitle-color' : {
                        title: 'Subtitle Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle',
                        parentItem : '.dark'
                    },
                    'shadow-font-size' : {
                        title: 'Shadow Font Size',
                        subTitle : 'You can customize shadow font-size.',
                        type: 'input',
                        inputType: 'number',
                        attribute : 'style',
                        styleName : 'font-size',
                        unit : {
                            'vh': 'vh'
                        },
                        childItem : '.cmb-title-container',
                        childPseudo : '::before',
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-shadow-text-title-wrapper cmb_shadow_text_title cmb-element">
            <div class="cmb-title-container">
                <h5 class="cmb-subtitle"><span class="cmb-single-line-editable-text">Lorem ipsum dolor</span></h5>
                <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Shadow Text Title</span></h2>
            </div>
        </div>`,
};
cmbAllElements['cmb_line_wrapped_title'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Line Wrapped Title',
    title: 'Line Wrapped Title',
    icon: '<i class="cm cm-title-wrapped"></i>',
    elementTabName: 'header',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    subWrapper: ['.cmb-title-container', '.cmb-title', '.cmb-subtitle'],
    settings:{
        title : {
            title: 'Title Settings',
            options: [
                {
                    'align' : {
                        title: 'Title Align',
                        subTitle : 'Select a title align',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['title-align'],
                        attribute : 'custom-class',
                    },
                    'vertical-border-color' : {
                        title: 'Vertical Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                        childPseudo : ['::after', '::before']
                    },
                    'dark-vertical-border-color' : {
                        title: 'Vertical Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                        childPseudo : ['::after', '::before'],
                        parentItem : '.dark'
                    },
                    'horizontal-border-color' : {
                        title: 'Horizontal Border Color',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                    },
                    'dark-horizontal-border-color' : {
                        title: 'Horizontal Border Color (Dark)',
                        subTitle : 'Select a border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-title-container',
                        parentItem : '.dark'
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-title',
                        parentItem : '.dark'
                    },
                    'subtitle-color' : {
                        title: 'Subtitle Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle'
                    },
                    'dark-subtitle-color' : {
                        title: 'Subtitle Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-subtitle',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-margin-bottom cmb-line-wrapped-title-wrapper cmb_line_wrapped_title cmb-element">
            <div class="cmb-title-container">
                <h2 class="cmb-subtitle"><span class="cmb-single-line-editable-text">Lorem ipsum dolor</span></h2>
                <h2 class="cmb-title"><span class="cmb-single-line-editable-text">Line Wrapped Title</span></h2>
            </div>
        </div>`,
};
cmbAllElements['cmb_img'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Image',
    title: 'Image',
    icon: '<i class="cm cm-image"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    settings:{
        image : {
            title: 'Image Settings',
            options: [
                {
                    'src' : {
                        title: 'Image',
                        subTitle : 'Specifies the path to the image',
                        type: 'input',
                        placeholder: 'image',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'src',
                        childItem: 'img',
                    },
                    'alt' : {
                        title: 'Image alternate Text',
                        subTitle : 'Specifies an alternate text for an image',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'alt',
                        childItem: 'img',
                    },
                    'link' : {
                        title: 'Link',
                        subTitle : 'Image Link',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                    },
                    'target' : {
                        title: 'Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        fieldParam : cmbStyleTypes['anchorTargetType']
                    },
                    'size' : {
                        title: 'Image Size',
                        subTitle : 'Specifies an alternate text for an image',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'switch',
                        childItem: 'img',
                        fieldParam : cmbStyleTypes['imgSize']
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem: 'img'
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem: 'img',
                        parentItem : '.dark'
                    },
                    'border-type' : {
                        title: 'Border Style',
                        subTitle : '',
                        type: 'input',
                        attribute : 'style',
                        inputType: 'select',
                        styleName: 'border-style',
                        fieldParam: cmbStyleTypes['border']['style'],
                        childItem: 'img'
                    },
                    'border-width' : {
                        title: 'Border Width',
                        subTitle : '',
                        type: 'input',
                        attribute : 'style',
                        inputType: 'number',
                        styleName: 'border-width',
                        unit : {
                            'px': 'px'
                        },
                        childItem: 'img'
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
                        unit: cmbStyleUnits,
                        type: 'input',
                        inputType : 'fourCornered',
                        attribute : 'style',
                        styleName: 'border-*-radius',
                        childItem: 'img'
                    },
                }
            ]
        },
    },
    html: `<a class="cmb_img" href="#"><img class="img-fluid" src="/plugins/cm-visual-editor/images/demo.jpg" alt=""/></a>`,
};
cmbAllElements['cmb_img_lightbox'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Darkbox',
    title: 'Darkbox',
    icon: '<i class="cm cm-lightbox"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    settings:{
        'lightbox' : {
            title: 'Darkbox Settings',
            options: [
                {
                    'src' : {
                        title: 'Image Darkbox',
                        subTitle : 'Specifies the path to the image',
                        type: 'input',
                        placeholder: 'image',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'src',
                        childItem: 'img',
                    },
                    'large-src' : {
                        title: 'Large Image',
                        subTitle : 'Specifies the path to the image',
                        type: 'input',
                        placeholder: 'image',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'data-cm-lb-img',
                        childItem: 'img',
                    },
                    'alt' : {
                        title: 'Image alternate Text',
                        subTitle : 'Specifies an alternate text for an image',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'alt',
                        childItem: 'img',
                    },
                    'size' : {
                        title: 'Image Size',
                        subTitle : 'Specifies an alternate text for an image',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'switch',
                        childItem: 'img',
                        fieldParam : cmbStyleTypes['imgSize']
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem: 'img'
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem: 'img',
                        parentItem : '.dark'
                    },
                    'border-type' : {
                        title: 'Border Style',
                        subTitle : '',
                        type: 'input',
                        attribute : 'style',
                        inputType: 'select',
                        styleName: 'border-style',
                        fieldParam: cmbStyleTypes['border']['style'],
                        childItem: 'img'
                    },
                    'border-width' : {
                        title: 'Border Width',
                        subTitle : '',
                        type: 'input',
                        attribute : 'style',
                        inputType: 'number',
                        styleName: 'border-width',
                        unit : {
                            'px': 'px'
                        },
                        childItem: 'img'
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
                        unit: cmbStyleUnits,
                        type: 'input',
                        inputType : 'fourCornered',
                        attribute : 'style',
                        styleName: 'border-*-radius',
                        childItem: 'img'
                    },
                }
            ]
        },
    },
    html: `<span class="cmb_img_lightbox"><img class="img-fluid cm-lb-img-link" src="/plugins/cm-visual-editor/images/demo.jpg" alt=""/></span>`,
};
cmbAllElements['cmb_square_img'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Square image',
    title: 'Square Image',
    icon: '<i class="cm cm-square-image"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    settings:{
        'image' : {
            title: 'Square Image Settings',
            options: [
                {
                    'src' : {
                        title: 'Image',
                        subTitle : 'Specifies the path to the image',
                        type: 'input',
                        placeholder: 'image',
                        attribute : 'style',
                        inputType: 'image',
                        styleName: 'background-image',
                        childItem: '.cmb-img-holder',
                    },
                    'link' : {
                        title: 'Link',
                        subTitle : 'Image Link',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                    },
                    'target' : {
                        title: 'Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        fieldParam : cmbStyleTypes['anchorTargetType']
                    },
                    'size' : {
                        title: 'Image Size',
                        subTitle : 'Specifies an alternate text for an image',
                        type: 'input',
                        attribute : 'style',
                        inputType: 'switch',
                        childItem: '.cmb-img-holder',
                        styleName: 'background-size',
                        fieldParam : cmbStyleTypes['squareImgSize']
                    },
                    'image-position' : {
                        title: 'Image Position',
                        subTitle : 'The background-position property sets the starting position of a background image',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['background-position'],
                        attribute : 'style',
                        styleName: 'background-position',
                        childItem: '.cmb-img-holder',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem: '.cmb-img-holder'
                    },
                    'color-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem: '.cmb-img-holder',
                        parentItem : '.dark'
                    },
                    'border-type' : {
                        title: 'Border Style',
                        subTitle : '',
                        type: 'input',
                        attribute : 'style',
                        inputType: 'select',
                        styleName: 'border-style',
                        fieldParam: cmbStyleTypes['border']['style'],
                        childItem: '.cmb-img-holder'
                    },
                    'border-width' : {
                        title: 'Border Width',
                        subTitle : '',
                        type: 'input',
                        attribute : 'style',
                        inputType: 'number',
                        styleName: 'border-width',
                        unit : {
                            'px': 'px'
                        },
                        childItem: '.cmb-img-holder'
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
                        unit: cmbStyleUnits,
                        type: 'input',
                        inputType : 'fourCornered',
                        attribute : 'style',
                        styleName: 'border-*-radius',
                        childItem: '.cmb-img-holder'
                    },
                }
            ]
        },
    },
    html: `<a class="cmb_square_img" href="#"><span class="cmb-square-image-wrapper"><span class="cmb-img-holder"></span></span></a>`,
};
cmbAllElements['cmb_alert'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Alert Box',
    title: 'Alert Box',
    icon: '<i class="cm cm-alert"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    settings: {
        'alert box' : {
            title: 'Alert Box Settings',
            options: [
                {
                    'alert-class' : {
                        title: 'Alert Type',
                        subTitle : 'Select a alert type',
                        type: 'input',
                        placeholder: 'image',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['alertType']
                    },
                    'hide-alert' : {
                        title: 'Disable Close Alert',
                        subTitle : 'You can enable or disable alert close option',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.close',
                    },
                }
            ]
        },
    },
    html: `<div class="alert alert-warning alert-dismissible fade show cmb_alert cmb-element" role="alert">
  <span class="cmb-single-line-editable-text">A simple primary alert—check it out!</span>
  <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`,
    beforeSave: function(){
        $('.cmb_alert').find('button').attr('data-dismiss','alert');
    },
    afterSave: function(){
        $('.cmb_alert').find('button').removeAttr('data-dismiss');
    },
    onLoad: function(){
        $('.cmb_alert').find('button').removeAttr('data-dismiss');
    },
};
cmbAllElements['cmb_button'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Button',
    title: 'Button',
    icon: '<i class="cm cm-link"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['background'],
    settings: {
        'button' : {
            title: 'Button Settings',
            options: [
                {
                    'color' : {
                        title: 'Type',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonType']
                    },
                    'size' : {
                        title: 'Size',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonSize']
                    },
                    'link' : {
                        title: 'Link',
                        subTitle : 'Button Link',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                    },
                    'target' : {
                        title: 'Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        fieldParam : cmbStyleTypes['anchorTargetType']
                    },
                }
            ]
        },
    },
    html: `<a class="cmb_button btn btn-primary cmb-element" href="#">
              <span class="cmb-single-line-editable-text">Button Text</span>
          </a>`
};
cmbAllElements['cmb_tagline_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Tagline Box',
    title: 'Tagline Box',
    icon: '<i class="cm cm-tagline-box"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['background'],
    settings: {
        'tagline box' : {
            title: 'Tagline Box Settings',
            options: [
                {
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-tagline-box-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb-tagline-box-title',
                        parentItem : '.dark'
                    },
                    'subtitle-color' : {
                        title: 'Subtitle Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : 'p'
                    },
                    'dark-subtitle-color' : {
                        title: 'Subtitle Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : 'p',
                        parentItem : '.dark'
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem : '.cmb-tagline-box-container'
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem : '.cmb-tagline-box-container',
                        parentItem : '.dark'
                    },
                    'background-color' : {
                        title: 'Background Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'background-color',
                        childItem : '.cmb-tagline-box-container'
                    },
                    'dark-background-color' : {
                        title: 'Background Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'background-color',
                        childItem : '.cmb-tagline-box-container',
                        parentItem : '.dark'
                    },
                    'button-type' : {
                        title: 'Button Type',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonType'],
                        childItem: '.cmb-tagline-btn'
                    },
                    'button-size' : {
                        title: 'Button Size',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonSize'],
                        childItem: '.cmb-tagline-btn'
                    },
                    'button-link' : {
                        title: 'Button Link',
                        subTitle : 'Button Link',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                        childItem: '.cmb-tagline-btn'
                    },
                    'button-target' : {
                        title: 'Button Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        fieldParam : cmbStyleTypes['anchorTargetType'],
                        childItem: '.cmb-tagline-btn'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb_tagline_box cmb-element">
        <div class="cmb-tagline-box-container d-md-block flex-column d-flex clearfix">
            <div class="order-2 float-md-right flex-grow-12 my-2 ml-md-3">
                <a href="#" class="btn btn-success d-block cmb-single-line-editable-text cmb-tagline-btn">Tagline Box Button</a>
            </div>
            <div class="order-1">
                <h4 class="cmb-tagline-box-title">
                <span class="cmb-single-line-editable-text">These boxes are very customizable with numerous options to choose from</span>
</h4>
                <p><span class="cmb-single-line-editable-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos error illum iure molestiae odio omnis praesentium sequi velit voluptates.</span></p>
        </div>

        </div>
    </div>`
};
cmbAllElements['cmb_section_separator'] = {
    allowedParent: ['cmb_column', 'cmb_section'],
    addButtonText: 'Section Separator',
    title: 'Section Separator',
    icon: '<i class="cm cm-separator"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['design', 'position', 'background'],
    settings: {
        'separator' : {
            title: 'Section Separator Settings',
            options: [
                {
                    'padding-top' : {
                        title: 'Padding Top',
                        subTitle : '',
                        type: 'input',
                        placeholder: '100',
                        attribute : 'style',
                        inputType: 'number',
                        styleName: 'padding-top',
                        unit: cmbStyleUnits
                    },
                    'padding-bottom' : {
                        title: 'Padding Bottom',
                        subTitle : '',
                        type: 'input',
                        placeholder: '100',
                        attribute : 'style',
                        inputType: 'number',
                        styleName: 'padding-bottom',
                        unit: cmbStyleUnits
                    },
                    'blank' : {
                        title: 'Blank Style',
                        subTitle : 'You can enable or disable separator style',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'cmb-is-blank',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-top-color',
                        pseudo: ['::after', '::before']
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-top-color',
                        pseudo: ['::after', '::before'],
                        parentItem : '.dark'
                    },
                    'icon-color' : {
                        title: 'Icon Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem: '.cmb-separator-icon'
                    },
                    'dark-icon-color' : {
                        title: 'Icon Color (Dark)',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem: '.cmb-separator-icon',
                        parentItem : '.dark'
                    },
                    'icon' : {
                        title: 'Select Icon',
                        subTitle : '',
                        type: 'input',
                        inputType : 'dropdown',
                        attribute : 'custom-class',
                        fieldParam : cmbStyleTypes['fa-icon-class'],
                        styleName : 'color',
                        childItem : '.cmb-separator-icon',
                        wrapperClass : 'icon-dropdown'
                    }
                }
            ]
        },
    },
    html: `<div class="cmb_section_separator"><span class="fa fa-code cmb-separator-icon"></span></div>`
};
cmbAllElements['cmb_social_media_link'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Social Media Link',
    title: 'Social Media Link',
    icon: '<i class="cm cm-social-link"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    settings:{
        settings : {
            title: 'Social Media Link Settings',
            options: [
                {
                    'size' : {
                        title: 'Size',
                        subTitle : 'Select icon size',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['social-media']['size'],
                        attribute: 'custom-class',
                    },
                    'color' : {
                        title: 'Icon Color',
                        subTitle : 'Select a Icon color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                    },
                    'dark-color' : {
                        title: 'Icon Color (Dark)',
                        subTitle : 'Select a Icon color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        parentItem : '.dark'
                    },
                    'color-hover' : {
                        title: 'Hover Icon Color',
                        subTitle : 'Select a Icon Hover color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        pseudo : ':hover',
                    },
                    'dark-color-hover' : {
                        title: 'Hover Icon Color (Dark)',
                        subTitle : 'Select a Icon Hover color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        pseudo : ':hover',
                        parentItem : '.dark'
                    },
                    'background-color' : {
                        title: 'Background Color',
                        subTitle : 'Select a background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                    },
                    'dark-background-color' : {
                        title: 'Background Color (Dark)',
                        subTitle : 'Select a background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        parentItem : '.dark'
                    },
                    'background-hover-color' : {
                        title: 'Background Hover Color',
                        subTitle : 'Select a background hover color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        pseudo : ':hover',
                    },
                    'dark-background-hover-color' : {
                        title: 'Background Hover Color (Dark)',
                        subTitle : 'Select a background hover color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        pseudo : ':hover',
                        parentItem : '.dark'
                    },
                    'icon' : {
                        title: 'Icon',
                        subTitle : 'Select a icon',
                        type: 'input',
                        inputType : 'dropdown',
                        fieldParam : cmbStyleTypes['social-media']['icon'],
                        attribute: 'custom-class',
                        childItem : '.cmb-social-media-icon',
                        wrapperClass: 'icon-dropdown'
                    },
                }
            ]
        },
    },
    html: `<a href="#" class="cmb_social_media_link"><i class="fa fa-facebook cmb-social-media-icon"></i></a>`,
};
cmbAllElements['cmb_content_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Content Box',
    title: 'Content Box',
    icon: '<i class="cm cm-content-box"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-move'],
    avoidableTabs : ['position', 'background', 'design'],
    settings:{
        'content box' : {
            title: 'Content Box Settings',
            options: [
                {
                    'style' : {
                        title: 'Style',
                        subTitle : 'Select a Style',
                        type: 'input',
                        inputType : 'select',
                        attribute : 'custom-class',
                        fieldParam : cmbStyleTypes['contentBoxType']
                    },
                    'background-color' : {
                        title: 'Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                    },
                    'dark-background-color' : {
                        title: 'Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        parentItem : '.dark',
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
                        unit: cmbStyleUnits,
                        type: 'input',
                        inputType : 'fourCornered',
                        attribute : 'style',
                        styleName: 'border-*-radius',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                    },
                    'dark-border-color' : {
                        title: 'Border Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        parentItem : '.dark',
                    },
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-content-box-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-content-box-title',
                        parentItem : '.dark',
                    },
                    'content-color' : {
                        title: 'Content Text Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-content-box-content'
                    },
                    'dark-content-color' : {
                        title: 'Content Text Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-content-box-content',
                        parentItem : '.dark',
                    },
                    'cover' : {
                        title: 'Cover Image',
                        subTitle : 'This image only use for cover-image style',
                        type: 'input',
                        placeholder: 'image',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'src',
                        childItem: '.cover-image',
                    },
                    'icon' : {
                        title: 'Icon',
                        subTitle : 'Select a icon',
                        type: 'input',
                        inputType : 'dropdown',
                        fieldParam : cmbStyleTypes['fa-icon-class'],
                        attribute: 'custom-class',
                        childItem : '.cmb-icon',
                        wrapperClass: 'icon-dropdown'
                    },
                    'icon-color' : {
                        title: 'Icon Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-icon',
                    },
                    'dark-icon-color' : {
                        title: 'Icon Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-icon',
                        parentItem : '.dark',
                    },
                    'icon-background-color' : {
                        title: 'Icon Background Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-icon',
                    },
                    'dark-icon-background-color' : {
                        title: 'Icon Background Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-icon',
                        parentItem : '.dark',
                    },
                    'button-color' : {
                        title: 'Button Color',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonType'],
                        childItem : '.cmb-content-box-btn',
                    },
                    'hide-button' : {
                        title: 'Hide Button',
                        subTitle: '',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-content-box-link'
                    },
                    'button-link' : {
                        title: 'Button Link',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                        childItem : '.cmb-content-box-btn',
                    },
                    'target' : {
                        title: 'Button Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        childItem : '.cmb-content-box-btn',
                        fieldParam : cmbStyleTypes['anchorTargetType']
                    },
                }
            ]
        },
    },
    html: `<div class="cmb_content_box cmb-element">
                <div class="cmb-main">
                <img src="/storage/images/regular_site/img-1.jpg" alt="cover-image" class="w-100 cover-image">
                    <div class="cmb-content-box-icon">
                        <i class="fa fa-facebook cmb-icon"></i>
                    </div>
                    <div class="cmb-content">
                        <h3 class="cmb-content-box-title"><span class="cmb-single-line-editable-text">Title goes here.</span></h3>
                        <div class="cmb-content-box-content">
                         <span class="cmb-single-line-editable-text">In sit amet urna dapibus, pretium nisi nec, imperdiet velit maecenas mi ets.</span>
                    </div>
    </div>
    </div>
                    <div class="cmb-content-box-link">
                        <a href="#"
                           class="btn btn-success cmb-content-box-btn"><span class="cmb-single-line-editable-text">Read More</span></a>
                    </div>
                </div>`,
};
cmbAllElements['cmb_icon_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Icon Box',
    title: 'Icon Box',
    icon: '<i class="cm cm-content-box"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background', 'design'],
    settings:{
        'content box' : {
            title: 'Icon Box Settings',
            options: [
                {
                    'title-color' : {
                        title: 'Title Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-icon-box-title'
                    },
                    'dark-title-color' : {
                        title: 'Title Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-icon-box-title',
                        parentItem : '.dark'
                    },
                    'content-color' : {
                        title: 'Content Text Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-icon-box-content'
                    },
                    'dark-content-color' : {
                        title: 'Content Text Color (Dark)',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-icon-box-content'
                    },
                    'icon-color' : {
                        title: 'Icon Color',
                        subTitle : 'Select a color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-icon',
                    },
                    'icon' : {
                        title: 'Icon',
                        subTitle : 'Select a icon',
                        type: 'input',
                        inputType : 'dropdown',
                        fieldParam : cmbStyleTypes['custom-icon'],
                        attribute: 'custom-class',
                        childItem : '.custom-icon',
                        wrapperClass: 'icon-dropdown'
                    },
                    'button-color' : {
                        title: 'Button Color',
                        subTitle : '',
                        type: 'input',
                        attribute : 'custom-class',
                        inputType: 'select',
                        fieldParam: cmbStyleTypes['buttonType'],
                        childItem : '.cmb-icon-box-btn',
                    },
                    'hide-button' : {
                        title: 'Hide Button',
                        subTitle: '',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-icon-box-btn'
                    },
                    'button-link' : {
                        title: 'Button Link',
                        subTitle : '',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                        childItem : '.cmb-icon-box-btn',
                    },
                    'target' : {
                        title: 'Button Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        childItem : '.cmb-icon-box-btn',
                        fieldParam : cmbStyleTypes['anchorTargetType']
                    },
                }
            ]
        },
    },
    html: `<div class="my-3 d-flex cmb_icon_box">
    <div class="lf-w-100px">
        <span class="glyph-icon flaticon-box custom-icon"></span>
    </div>
    <div class="ml-3">
        <h4 class="mt-0 cmb-icon-box-title"><span class="cmb-single-line-editable-text">Security Wallet</span></h4>
        <p class="cmb-icon-box-content"><span class="cmb-single-line-editable-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore eaque.</span></p>
        <p><a href="#" class="btn btn-sm cmb-icon-box-btn"><span class="cmb-single-line-editable-text">Visit Now</span></a></p>
    </div>
</div>`
};
cmbAllElements['cmb_price_table_item'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Pricing',
    title: 'Pricing',
    icon: '<i class="cm cm-pricing"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-delete', 'cmb-option-copy', 'cmb-option-add', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background', 'design'],
    subWrapper : '.cmb_pricing_feature_ul',
    settings:{
        pricing : {
            title: 'Pricing Table Settings',
            options: [
                {
                    'color' : {
                        title: 'Color',
                        subTitle : 'Select a Style',
                        type: 'input',
                        inputType : 'select',
                        attribute : 'custom-class',
                        fieldParam : cmbStyleTypes['pricingTableColor']
                    },
                    'active' : {
                        title: 'Make Active',
                        subTitle : '',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'active',
                    },
                    'border-color' : {
                        title: 'Border Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
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
                        unit: cmbStyleUnits,
                        type: 'input',
                        inputType : 'fourCornered',
                        attribute : 'style',
                        styleName: 'border-*-radius',
                    },
                    'button-link' : {
                        title: 'Link',
                        subTitle : 'Button Link',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'href',
                        childItem : '.cmb_price_btn a'
                    },
                    'button-target' : {
                        title: 'Target',
                        subTitle : 'Specifies where to open the linked document',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'switch',
                        tagProp: 'target',
                        fieldParam : cmbStyleTypes['anchorTargetType'],
                        childItem : '.cmb_price_btn a'
                    },
                }
            ]
        },
    },
    html: `
        <div class="cmb_price_table_item clearfix cmb-element">
           <!--HEAD PRICE DETAIL START-->
                <div class="cmb_head_price clearfix">

                    <!--HEAD CONTENT START-->
                    <div class="cmb_head_content clearfix">

                        <!--HEAD START-->
                        <div class="head_bg"></div>
                        <div class="head">
                            <span class="cmb-single-line-editable-text">Basic</span>
                        </div>
                        <!--//HEAD END-->

                    </div>
                    <!--//HEAD CONTENT END-->

                    <!--PRICE START-->
                    <div class="cmb_price_tag clearfix">
                        <span class="price">
                            <span class="sign cmb-single-line-editable-text">$</span>
                            <span class="currency cmb-single-line-editable-text">99</span>
                            <span class="cent cmb-single-line-editable-text">.99</span>
                            <span class="month cmb-single-line-editable-text">/M</span>
                        </span>
                    </div>
                    <!--//PRICE END-->

                </div>
                <!--//HEAD PRICE DETAIL END-->

                <!--FEATURE LIST START-->
                <div class="cmb_feature_list">
                    <ul class="cmb_pricing_feature_ul pt-3">
                        <li class="cmb_pricing_feature_item"><strong class="cmb-single-line-editable-text">2GB</strong> <span class="cmb-single-line-editable-text">Bandwidth</span></li>
                        <li class="cmb_pricing_feature_item"><strong class="cmb-single-line-editable-text">150GB</strong> <span class="cmb-single-line-editable-text">Storage</span></li>
                        <li class="cmb_pricing_feature_item"><strong>12</strong> <span class="cmb-single-line-editable-text">Accounts</span></li>
                        <li class="cmb_pricing_feature_item"><strong>7</strong> <span class="cmb-single-line-editable-text">Host Domain</span></li>
                        <li class="cmb_pricing_feature_item"><strong class="cmb-single-line-editable-text">24/7</strong> <span class="cmb-single-line-editable-text">Support</span></li>
                    </ul>
                </div>
                <!--//FEATURE LIST END-->

                <!--BUTTON START-->
                <div class="cmb_price_btn clearfix">
                    <a class="cmb-single-line-editable-text" href="#">Sign up</a>
                </div>
                <!--//BUTTON END-->
        </div>`,
};
cmbAllElements['cmb_pricing_feature_item'] = {
    allowedParent: ['cmb_price_table_item'],
    addButtonText: 'Feature List',
    title: 'Feature List',
    icon: '<i class="fa fa-check"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy'],
    avoidableTabs : ['position', 'background', 'design'],
    html: `<li class="cmb_pricing_feature_item"><strong class="cmb-single-line-editable-text">2GB</strong> <span class="cmb-single-line-editable-text">Bandwidth</span></li>`,
};
cmbAllElements['cmb_testimonial'] = {
    allowedParent: ['cmb_column', 'cmb_container'],
    addButtonText: 'Testimonial',
    title: 'Testimonial',
    icon: '<i class="cm cm-testimonial"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-add'],
    avoidableTabs : ['position', 'background', 'design'],
    settings:{

    },
    html: `
<div class="tm_testimonial cmb_testimonial cmb-element">
    <div class="cmb_testimonial_item cmb-element">
        <div class="row">
            <div class="col-md-4 col-sm-12 text-center">
                <div class="img lf-w-200px lf-h-200px rounded-circle overflow-hidden border-3 border-danger m-auto">
                    <img src="/plugins/cm-visual-editor/images/avatar.jpg"
                         alt="client avatar" class="tm-testimonial-img">
                </div>
                <h5 class="text-danger font-size-20 mb-0 mt-3">Mr Client</h5>
                <p class="font-size-18">Web Designer</p>
            </div>
            <div class="col-md-8 col-sm-12">
                <blockquote class="blockquote d-flex">
                    <i class="fa fa-quote-left text-danger"></i>
                    <div class="ml-3 pt-3 mt-md-3 mt-0">
                        <p>
                            <i><span class="cmb-single-line-editable-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iste officiis quam, recusandae sapiente soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iste officiis quam, recusandae sapiente soluta!</span></i>
                        </p>
                        <div class="tm-btn-group mt-4">
                            <button class="btn btn-sm font-size-18 lf-btn-primary prev">
                                <i class="fa fa-long-arrow-left"></i>
                            </button>
                            <button class="btn btn-sm font-size-18 lf-btn-primary next">
                                <i class="fa fa-long-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </blockquote>
            </div>
        </div>
    </div>
    <div class="cmb_testimonial_item cmb-element d-none">
        <div class="row">
            <div class="col-md-4 col-sm-12 text-center">
                <div class="img lf-w-200px lf-h-200px rounded-circle overflow-hidden border-3 border-danger m-auto">
                    <img src="/plugins/cm-visual-editor/images/avatar.jpg"
                         alt="client avatar" class="tm-testimonial-img">
                </div>
                <h5 class="text-danger font-size-20 mb-0 mt-3"><span class="cmb-single-line-editable-text">Mr Client</span></h5>
                <p class="font-size-18"><span class="cmb-single-line-editable-text">Web Designer</span></p>
            </div>
            <div class="col-md-8 col-sm-12">
                <blockquote class="blockquote d-flex">
                    <i class="fa fa-quote-left text-danger"></i>
                    <div class="ml-3 pt-3 mt-md-3 mt-0">
                        <p>
                            <i><span class="cmb-single-line-editable-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iste officiis quam, recusandae sapiente soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iste officiis quam, recusandae sapiente soluta!</span></i>
                        </p>
                        <div class="tm-btn-group mt-4">
                            <button class="btn btn-sm font-size-18 lf-btn-primary prev">
                                <i class="fa fa-long-arrow-left"></i>
                            </button>
                            <button class="btn btn-sm font-size-18 lf-btn-primary next">
                                <i class="fa fa-long-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </blockquote>
            </div>
        </div>
    </div>
</div>`,
    onLoad: function (){
        // prev
        $(document).on("click", ".prev", function (){
            let testimonial = $(this).parents(".tm_testimonial");
            let parentItem = $(this).parents(".cmb_testimonial_item");
            let indexNumber = parentItem.index();
            testimonial.find(".cmb_testimonial_item").addClass("d-none")
            let nextIndex = '';
            if (indexNumber <= 0){
                nextIndex = testimonial.find(".cmb_testimonial_item").length-1;
            }
            else {
                nextIndex = indexNumber-1;
            }
            testimonial.find(".cmb_testimonial_item").eq(nextIndex).removeClass("d-none")
        });

        // prev
        $(document).on("click", ".next", function (){
            let testimonial = $(this).parents(".tm_testimonial");
            let parentItem = $(this).parents(".cmb_testimonial_item");
            let indexNumber = parentItem.index();
            testimonial.find(".cmb_testimonial_item").addClass("d-none")

            let nextIndex = '';
            if (testimonial.find(".cmb_testimonial_item").length-1 <= indexNumber){
                nextIndex = 0;
            }
            else {
                nextIndex = indexNumber+1;
            }
            testimonial.find(".cmb_testimonial_item").eq(nextIndex).removeClass("d-none")
        });
    }
};
cmbAllElements['cmb_testimonial_item'] = {
    allowedParent: ['cmb_testimonial'],
    addButtonText: 'Testimonial',
    title: 'Testimonial Item',
    icon: '<i class="cm cm-testimonial"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background', 'design'],
    settings:{
        testimonial : {
            title: 'Testimonial Settings',
            options: [
                {
                    'client-avatar' : {
                        title: 'Client Avatar',
                        subTitle : 'Specifies the path to the image',
                        type: 'input',
                        placeholder: 'image',
                        attribute : 'prop',
                        inputType: 'image',
                        tagProp: 'src',
                        childItem: '.tm-testimonial-img',
                    },
                    'alt' : {
                        title: 'Client Avatar Text',
                        subTitle : 'Specifies an alternate text for an image',
                        type: 'input',
                        attribute : 'prop',
                        inputType: 'text',
                        tagProp: 'alt',
                        childItem: '.tm-testimonial-img',
                    },
                }
            ]
        },
    },
    html: `
<div class="cmb_testimonial_item cmb-element d-none">
    <div class="row">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="img lf-w-200px lf-h-200px rounded-circle overflow-hidden border-3 border-danger m-auto">
                <img src="/plugins/cm-visual-editor/images/avatar.jpg"
                     alt="client avatar" class="tm-testimonial-img">
            </div>
            <h5 class="text-danger font-size-20 mb-0 mt-3">Mr Client</h5>
            <p class="font-size-18">Web Designer</p>
        </div>
        <div class="col-md-8 col-sm-12">
            <blockquote class="blockquote d-flex">
                <i class="fa fa-quote-left text-danger"></i>
                <div class="ml-3 pt-3 mt-md-3 mt-0">
                    <p>
                        <i><span class="cmb-single-line-editable-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iste officiis quam, recusandae sapiente soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iste officiis quam, recusandae sapiente soluta!</span></i>
                    </p>
                    <div class="tm-btn-group mt-4">
                        <button class="btn btn-sm font-size-18 lf-btn-primary prev">
                            <i class="fa fa-long-arrow-left"></i>
                        </button>
                        <button class="btn btn-sm font-size-18 lf-btn-primary next">
                            <i class="fa fa-long-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </blockquote>
        </div>
    </div></div>`,
};
cmbAllElements['cmb_accordion'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Accordion',
    title: 'Accordion',
    icon: '<i class="cm cm-accordion"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete', 'cmb-option-add', 'cmb-option-settings'],
    avoidableTabs : ['position', 'background', 'design'],
    settings:{
        accordion : {
            title: 'Accordion Settings',
            options: [
                {
                    'icon-direction' : {
                        title: 'Left side icon',
                        subTitle : '',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'left-handler',
                    },
                    'independent-expand' : {
                        title: 'independent expand',
                        subTitle : '',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'prop',
                        tagProp: 'data-individual',
                        defaultValue: 'y',
                    },
                    'heading-color' : {
                        title: 'Heading Color',
                        subTitle : 'Select a heading text color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-accordion-header',
                    },
                    'dark-heading-color' : {
                        title: 'Heading Color (Dark)',
                        subTitle : 'Select a heading text color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-accordion-header',
                        parentItem : '.dark'
                    },
                    'heading-background-color' : {
                        title: 'Heading Background Color',
                        subTitle : 'Select a heading background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-accordion-header',
                    },
                    'dark-heading-background-color' : {
                        title: 'Heading Background Color (Dark)',
                        subTitle : 'Select a heading background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-accordion-header',
                        parentItem : '.dark'
                    },
                    'heading-border-color' : {
                        title: 'Heading Border Color',
                        subTitle : 'Select a heading border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-accordion-header',
                    },
                    'dark-heading-border-color' : {
                        title: 'Heading Border Color (Dark)',
                        subTitle : 'Select a heading border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-accordion-header',
                        parentItem : '.dark'
                    },
                    'cmb-accordion-body-color' : {
                        title: 'Content Color',
                        subTitle : 'Select a content text default color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-accordion-body',
                    },
                    'dark-cmb-accordion-body-color' : {
                        title: 'Content Color (Dark)',
                        subTitle : 'Select a content text default color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem : '.cmb-accordion-body',
                        parentItem : '.dark'
                    },
                    'cmb-accordion-body-background-color' : {
                        title: 'Content Background Color',
                        subTitle : 'Select a content background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-accordion-body',
                    },
                    'dark-cmb-accordion-body-background-color' : {
                        title: 'Content Background Color (Dark)',
                        subTitle : 'Select a content background color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'background-color',
                        childItem : '.cmb-accordion-body',
                        parentItem : '.dark'
                    },
                    'cmb-accordion-body-border-color' : {
                        title: 'Content Border Color',
                        subTitle : 'Select a content border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-accordion-body',
                    },
                    'dark-cmb-accordion-body-border-color' : {
                        title: 'Content Border Color (Dark)',
                        subTitle : 'Select a content border color',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute : 'style',
                        styleName : 'border-color',
                        childItem : '.cmb-accordion-body',
                        parentItem : '.dark'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb-accordion cmb_accordion cmb-element">
        <div class="cmb_accordion_item cmb-accordion-item">
            <h5 class="cmb-accordion-header">
                <span class="cmb-accordion-handler">&#10011;</span><span class="cmb-single-line-editable-text">Home Automation</span>
            </h5>
            <div class="cmb-accordion-body">
               <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore eos modi, molestiae mollitia quia saepe voluptatem? A ab aperiam architecto commodi consequuntur debitis delectus, distinctio dolorem eligendi eum eveniet ex facere hic in incidunt laboriosam minima</div></div></div>
            </div>
        </div>
    </div>`,
    beforeSave: function () {
        $('.cmb-accordion-item').removeClass('active').find('.cmb-accordion-handler').html('&#10011;');
    }
};
cmbAllElements['cmb_accordion_item'] = {
    allowedParent: ['cmb_accordion'],
    addButtonText: 'Accordion Item',
    title: 'Accordion Item',
    icon: '<i class="fa fa-arrows-h"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev','cmb-option-next', 'cmb-option-delete'],
    avoidableTabs : ['position', 'background', 'design'],
    settings:{
    },
    html: `<div class="cmb_accordion_item cmb-accordion-item">
            <h5 class="cmb-accordion-header">
                <span class="cmb-accordion-handler">&#10011;</span><span class="cmb-single-line-editable-text">Home Automation</span>
            </h5>
            <div class="cmb-accordion-body">
               <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
            </div>
        </div>`,
};
cmbAllElements['cmb_audio_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Audio',
    title: 'Audio',
    icon: '<i class="cm cm-audio"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position', 'background', 'design'],
    settings: {
        setting: {
            title: 'Audio Settings',
            options: [
                {
                    'audio-src' : {
                        title: 'Audio',
                        subTitle: 'Upload an audio file.',
                        type: 'input',
                        inputType: 'url',
                        attribute: 'prop',
                        tagProp: 'src',
                        childItem: '.cmb-audio'
                    },
                    loop : {
                        title: 'Loop',
                        subTitle: 'Turn on to loop the media.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        tagProp: 'loop',
                        defaultValue: 'loop',
                        childItem: '.cmb-audio',
                    },
                    'auto-play' : {
                        title: 'Autoplay',
                        subTitle: 'Turn on to autoplay the media.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        defaultValue: 'autoplay',
                        tagProp: 'autoplay',
                        childItem: '.cmb-audio'
                    },
                    preload : {
                        title: 'Preload',
                        subTitle: 'Specifies if and how the audio should be loaded when the page loads. Defaults to "None".\n' +
                            '• "None": The audio should not be loaded when the page loads.\n' +
                            '• "Auto": The audio should be loaded entirely when the page loads.\n' +
                            '• "Metadata": Only metadata should be loaded when the page loads.',
                        type: 'input',
                        inputType: 'switch',
                        attribute: 'prop',
                        fieldParam: {
                            'none' : 'None',
                            'auto' : 'Auto',
                            'metadata' : 'Metadata',
                        },
                        tagProp: 'preload',
                        childItem: '.cmb-audio'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb_audio_box cmb-element">
         <audio controls="controls" class="cmb-audio w-100" src="demo-audio.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>`
};
cmbAllElements['cmb_video_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Video',
    title: 'Video',
    icon: '<i class="cm cm-video"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position', 'background', 'design'],
    settings: {
        setting: {
            title: 'Video Settings',
            options: [
                {
                    'video-mp4-src' : {
                        title: 'Video MP4 URL',
                        subTitle: 'Add your MP4 video file url. Make sure your video file format is MP4',
                        type: 'input',
                        inputType: 'url',
                        attribute: 'prop',
                        tagProp: 'src',
                        childItem: '.cmb-video'
                    },
                    'video-max-width' : {
                        title: 'Video Max Width',
                        subTitle: 'Set the maximum width the video should take up.' +
                            ' Enter value in pixel (px) or percentage (%), ex: 200px.' +
                            ' Leave empty to use full video width. Default currently set to 100%.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'style',
                        styleName: 'max-width',
                    },
                    controls : {
                        title: 'Video Controls',
                        subTitle: 'Controls whether the video controls should show or not. Default currently set to True.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        tagProp: 'controls',
                        defaultValue: 'controls',
                        childItem: '.cmb-video',
                    },
                    loop : {
                        title: 'Loop Video',
                        subTitle: 'Turn on to loop the media.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        tagProp: 'loop',
                        defaultValue: 'loop',
                        childItem: '.cmb-video',
                    },
                    'autoplay' : {
                        title: 'Autoplay Video',
                        subTitle: 'IMPORTANT: In some modern browsers,' +
                            ' videos with sound won\'t be auto played, ' +
                            'and thus won\'t show as container background when not muted.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        defaultValue: 'autoplay',
                        tagProp: 'autoplay',
                        childItem: '.cmb-video'
                    },
                    'muted' : {
                        title: 'Mute Video',
                        subTitle: 'IMPORTANT: In some modern browsers, videos with sound won\'t be auto played, and thus won\'t show as container background when not muted.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        defaultValue: 'muted',
                        tagProp: 'muted',
                        childItem: '.cmb-video'
                    },
                    preload : {
                        title: 'Preloading Video',
                        subTitle: 'Controls how / if the browser should preload the video. ' +
                            'Choose "Metadata" if only the video metadata should be preloaded on page load or "Auto" to preload the full video on page load.',
                        type: 'input',
                        inputType: 'switch',
                        attribute: 'prop',
                        fieldParam: {
                            'none' : 'None',
                            'auto' : 'Auto',
                            'metadata' : 'Metadata',
                        },
                        tagProp: 'preload',
                        childItem: '.cmb-video'
                    },
                    'preview-image ' : {
                        title: 'Preview Image',
                        subTitle: 'Upload an image to display as a video preview.',
                        type: 'input',
                        inputType: 'url',
                        attribute: 'prop',
                        tagProp: 'poster',
                        childItem: '.cmb-video'
                    },
                }
            ]
        },
    },
    html: `<div class="cmb_video_box cmb-element">
         <video controls poster="" class="cmb-video w-100" src="demo-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>`
};
cmbAllElements['cmb_youtube_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Youtube Video',
    title: 'Youtube Video',
    icon: '<i class="cm cm-youtube"></i>',
    elementTabName: 'media',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position', 'background', 'design'],
    settings: {
        setting: {
            title: 'Video Settings',
            options: [
                {
                    'video-id' : {
                        title: 'Video ID',
                        subTitle: 'For example the Video ID for https://www.youtube.com/watch?v=569TlvRLn90 is 569TlvRLn90',
                        type: 'input',
                        inputType: 'url',
                        attribute: 'prop',
                        tagProp: 'data-cmb-src',
                        afterChange: function (targetDom) {
                            targetDom.find('iframe').attr('src', 'https://www.youtube-nocookie.com/embed/' + targetDom.attr('data-cmb-src'));
                        }
                    },
                    'video-aspect-ratios' : {
                        title: 'Video Aspect ratios',
                        subTitle: 'Aspect ratios for responsive purpose',
                        type: 'input',
                        inputType: 'switch',
                        attribute: 'custom-class',
                        fieldParam: {
                            'embed-responsive-21by9' : '21x9',
                            'embed-responsive-16by9' : '16x9',
                            'embed-responsive-4by3' : '4x3',
                            'embed-responsive-1by1' : '1x1',
                        },
                    },
                    'autoplay' : {
                        title: 'Autoplay Video',
                        subTitle: 'Toggle video auto playing.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        tagProp: 'allow',
                        defaultValue: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                        childItem: '.cmb-youtube-iframe'
                    },
                }
            ]
        },
    },
    html: `<div class="embed-responsive embed-responsive-16by9 cmb_youtube_box cmb-element" data-cmb-src="zpOULjyy-n8">
        <iframe
            class="embed-responsive-item cmb-youtube-iframe"
            src="https://www.youtube-nocookie.com/embed/zpOULjyy-n8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
         ></iframe>
    </div>`
};
cmbAllElements['cmb_table_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Table',
    title: 'Table',
    icon: '<i class="cm cm-table"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    customAction:{
        'add-row' : {title : 'add row',text : '<i class="fa fa-bars"></i>'},
        'add-col' : {title : 'add column',text : '<i class="fa fa-columns"></i>'},
    },
    avoidableTabs: ['design', 'position', 'background'],
    settings: {
        setting: {
            title: 'Table Settings',
            options: [
                {
                    'dark-table' : {
                        title: 'Dark Table',
                        subTitle: 'Toggle the table dark style.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'table-dark',
                        childItem: '.cmb_table',
                    },
                    'bordered-table' : {
                        title: 'Bordered Table Style',
                        subTitle: 'Toggle table border style.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'table-bordered',
                        childItem: '.cmb_table',
                    },
                    'striped-table' : {
                        title: 'Striped Table Style',
                        subTitle: 'Toggle table striped style.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'table-striped',
                        childItem: '.cmb_table',
                    },
                    'hide-table-header' : {
                        title: 'Hide Table Header',
                        subTitle: 'Toggle table header display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-table-header',
                    },
                    'hide-table-footer' : {
                        title: 'Hide Table Footer',
                        subTitle: 'Toggle table footer display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-table-footer',
                    },
                }
            ]
        },
    },
    html: `<div class="table-responsive cmb_table_box cmb-element">
        <table class="table cmb_table">
            <thead class="cmb-table-header">
                <tr>
                    <th class="cmb-table-cell"><span class="cmb-single-line-editable-text">Column 1</span></th>
                    <th class="cmb-table-cell"><span class="cmb-single-line-editable-text">Column 2</span></th>
                </tr>
            </thead>

            <tbody class="cmb_table_body">
                <tr class="cmb_table_row">
                    <td class="cmb-table-cell"><span class="cmb-single-line-editable-text">Column 1 value</span></td>
                    <td class="cmb-table-cell"><span class="cmb-single-line-editable-text">Column 2 value</span></td>
                </tr>
            </tbody>

            <tfoot class="cmb-table-footer">
                <tr>
                    <th class="cmb-table-cell"><span class="cmb-single-line-editable-text">Column 1</span></th>
                    <th class="cmb-table-cell"><span class="cmb-single-line-editable-text">Column 2</span></th>
                </tr>
            </tfoot>
        </table>
    </div>`
};
cmbAllElements['cmb_table_body'] = {
    allowedParent: ['cmb_table_box'],
    addButtonText: 'Table',
    title: 'Table Body',
    icon: '<i class="fa fa-table"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-add'],
    avoidableTabs: [],
    settings: {},
    html: `<tbody class="cmb_table_body"></tbody>`
};
cmbAllElements['cmb_table_row'] = {
    allowedParent: ['cmb_table_body'],
    addButtonText: 'Table Row',
    title: 'Table Row',
    icon: '<i class="fa fa-list-ul"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete'],
    avoidableTabs: [],
    settings: {},
    afterAdd: function(targetDom) {
        let childElementLength = targetDom.closest('table').children('thead').find('th').length;
        let htmlData = '';

        for(let i = 0; i < childElementLength; i++) {
            htmlData = htmlData + '<td class="cmb-table-cell"><span class="cmb-single-line-editable-text">Column '+ (i + 1) +' value</span></td>';
        }

        targetDom.html(htmlData);
    },
    html: `<tr class="cmb_table_row"></tr>`
};
cmbAllElements['cmb_person_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Person',
    title: 'Person',
    icon: '<i class="cm cm-user"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['background', 'position'],
    avoidableTabSettings: {
        design : ['text-align']
    },
    settings: {
        setting: {
            title: 'Person Settings',
            options: [
                {
                    'person-name-color' : {
                        title: 'Person Name Text Color',
                        subTitle: 'Text color control for the person name text.',
                        type: 'input',
                        inputType: 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-person-name'
                    },
                    'dark-person-name-color' : {
                        title: 'Person Name Text Color (Dark)',
                        subTitle: 'Text color control for the person name text.',
                        type: 'input',
                        inputType: 'colorPicker',
                        attribute : 'style',
                        styleName : 'color',
                        childItem: '.cmb-person-name',
                        parentItem: '.dark',
                    },
                    'person-avatar' : {
                        title: 'Person Avatar URL',
                        subTitle: 'Add person avatar url. Make sure avatar file format is image (jpg/png).',
                        type: 'input',
                        inputType: 'url',
                        childItem: '.cmb-person-avatar',
                        attribute : 'prop',
                        tagProp : 'src',
                    },
                    'name-text-color' : {
                        title: 'Name Text Color',
                        subTitle: 'Control profile text color.',
                        type: 'input',
                        inputType: 'colorPicker',
                        childItem: '.team-member-name',
                        attribute : 'style',
                        styleName : 'color',
                    },
                    'dark-name-text-color' : {
                        title: 'Name Text Color (Dark)',
                        subTitle: 'Control profile text color.',
                        type: 'input',
                        inputType: 'colorPicker',
                        childItem: '.team-member-name',
                        attribute : 'style',
                        styleName : 'color',
                        parentItem: '.dark',
                    },
                    'name-bg' : {
                        title: 'Name Background Color',
                        subTitle: 'Control name background color.',
                        type: 'input',
                        inputType: 'colorPicker',
                        childItem: '.team-member-name',
                        attribute : 'style',
                        styleName : 'background-color',
                    },
                    'dark-name-bg' : {
                        title: 'Name Background Color',
                        subTitle: 'Control name background color.',
                        type: 'input',
                        inputType: 'colorPicker',
                        childItem: '.team-member-name',
                        attribute : 'style',
                        styleName : 'background-color',
                        parentItem: '.dark',
                    },
                    'social-link-bar' : {
                        title: 'Hide Social link bar',
                        subTitle: 'Toggle social link display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.social-media-links',
                    },
                    'person-fb-link' : {
                        title: 'Facebook Link',
                        subTitle: 'Insert Facebook link.',
                        type: 'input',
                        inputType: 'url',
                        attribute : 'prop',
                        tagProp: 'href',
                        childItem: '.cmb-person-fb-link',
                    },
                    'person-fb-container' : {
                        title: 'Hide Facebook link',
                        subTitle: 'Toggle facebook link display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-person-fb-link',
                    },
                    'person-tw-link' : {
                        title: 'Twitter Link',
                        subTitle: 'Insert Twitter link.',
                        type: 'input',
                        inputType: 'url',
                        attribute : 'prop',
                        tagProp: 'href',
                        childItem: '.cmb-person-tw-link',
                    },
                    'person-tw-container' : {
                        title: 'Hide Twitter link',
                        subTitle: 'Toggle twitter link display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-person-tw-link',
                    },

                    'person-yt-link' : {
                        title: 'Youtube Link',
                        subTitle: 'Insert Youtube link.',
                        type: 'input',
                        inputType: 'url',
                        attribute : 'prop',
                        tagProp: 'href',
                        childItem: '.cmb-person-yt-link',
                    },
                    'person-yt-container' : {
                        title: 'Hide Youtube link',
                        subTitle: 'Toggle youtube link display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-person-yt-link',
                    },
                    'person-li-link' : {
                        title: 'Linkedin Link',
                        subTitle: 'Insert Linkedin link.',
                        type: 'input',
                        inputType: 'url',
                        attribute : 'prop',
                        tagProp: 'href',
                        childItem: '.cmb-person-li-link',
                    },
                    'person-li-container' : {
                        title: 'Hide Linkedin link',
                        subTitle: 'Toggle linkedin link display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-person-li-link',
                    },
                    'person-so-link' : {
                        title: 'Stackoverflow Link',
                        subTitle: 'Insert Stackoverflow link.',
                        type: 'input',
                        inputType: 'url',
                        attribute : 'prop',
                        tagProp: 'href',
                        childItem: '.cmb-person-so-link',
                    },
                    'person-so-container' : {
                        title: 'Hide Stackoverflow link',
                        subTitle: 'Toggle stackoverflow link display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-person-so-link',
                    },
                }
            ]
        },
    },
    html: `<div class="cmb_person_box team-item text-center">
    <div class="position-relative">
        <img src="/storage/images/regular_site/team-1.jpg" alt="team member" class="cmb-person-avatar img-fluid">
        <div class="team-content d-flex">
            <div class="m-auto">
                <p class="text-white">
                <span class="cmb-single-line-editable-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, vero?</span>
            </p>
            <ul class="social-media-links">
                <li>
                    <a href="#" class="cmb-person-fb-link">
                        <i class="fa fa-facebook cmb-social-media-icon"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="cmb-person-tw-link">
                        <i class="fa fa-twitter cmb-social-media-icon"></i>
                    </a>
                </li>
                <li>
                    <a class="nav-link cmb-person-yt-link" href="#"><i class="fa fa-youtube cmb-social-media-icon"></i></a>
                </li>
                <li>
                    <a class="nav-link cmb-person-li-link" href="#"><i class="fa fa-linkedin cmb-social-media-icon"></i></a>
                </li>
                <li>
                    <a class="nav-link cmb-person-so-link" href="#"><i class="fa fa-stack-overflow cmb-social-media-icon"></i></a>
                </li>

            </ul>
            </div>
        </div>
    </div>
    <div class="team-member-name p-3 bg-danger">
        <h3 class="font-size-22 text-white"><span class="cmb-single-line-editable-text cmb-person-name">Marco Jon. D</span></h3>
    </div>
</div>`
};
cmbAllElements['cmb_checklist_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Checklist',
    title: 'Checklist',
    icon: '<i class="cm cm-list"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
    avoidableTabs: ['position', 'design'],
    settings: {
        setting: {
            title: 'Checklist Settings',
            options: [
                {
                    'select-icon' : {
                        title: 'Select Icon',
                        subTitle : 'Global setting for all list items.',
                        type: 'input',
                        inputType : 'dropdown',
                        fieldParam : cmbStyleTypes['fa-icon-unicode'],
                        attribute: 'style',
                        styleName: 'content',
                        childItem : '.cmb_checklist_item',
                        childPseudo : '::before',
                        wrapperClass: 'icon-dropdown'
                    },
                    'icon-color' : {
                        title: 'Select Icon Color',
                        subTitle : 'Set list item icon color.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb_checklist_item',
                        childPseudo : '::before',
                    },
                    'dark-icon-color' : {
                        title: 'Select Icon Color (Dark)',
                        subTitle : 'Set list item icon color.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb_checklist_item',
                        childPseudo : '::before',
                        parentItem: '.dark',
                    },
                    'icon-font-size' : {
                        title: 'Icon Font Size',
                        subTitle : 'Set list item icon font size',
                        type: 'input',
                        inputType : 'number',
                        unit: cmbStyleUnits,
                        attribute: 'style',
                        styleName: 'font-size',
                        childItem : '.cmb_checklist_item',
                        childPseudo : '::before',
                    },
                    'checklist-item-font-size' : {
                        title: 'Item Font Size',
                        subTitle : 'Set list item font size',
                        type: 'input',
                        inputType : 'number',
                        unit: cmbStyleUnits,
                        attribute: 'style',
                        styleName: 'font-size',
                        childItem : '.cmb_checklist_item',
                    },
                    'checklist-item-font-color' : {
                        title: 'Item Text Color',
                        subTitle : 'Set list item text color.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb_checklist_item',
                    },
                    'dark-checklist-item-font-color' : {
                        title: 'Item Text Color (Dark)',
                        subTitle : 'Set list item text color.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'color',
                        childItem : '.cmb_checklist_item',
                        parentItem: '.dark',
                    },
                    'gap-between-item' : {
                        title: 'Gap Between Item',
                        subTitle : 'Set gap between item.',
                        type: 'input',
                        inputType : 'number',
                        unit: cmbStyleUnits,
                        attribute: 'style',
                        styleName: 'margin-bottom',
                        childItem : '.cmb_checklist_item',
                    },

                    'show-item-divider-line' : {
                        title: 'Show Item Divider Line',
                        subTitle: 'Toggle item divider line display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'cmb-checklist-border-bottom',
                    },
                    'item-divider-line-color' : {
                        title: 'Item Divider Line Color',
                        subTitle : 'Set item divider line color.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem : '.cmb_checklist_item',
                    },
                    'dark-item-divider-line-color' : {
                        title: 'Item Divider Line Color (Dark)',
                        subTitle : 'Set item divider line color.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'border-color',
                        childItem : '.cmb_checklist_item',
                        parentItem: '.dark',
                    },
                }
            ]
        },
    },
    html: `<ul class="list-unstyled cmb_checklist_box cmb-element">
        <li class="media cmb_checklist_item" style="">
            <span class="cmb-single-line-editable-text">List Item</span>
        </li>
    </ul>`
};
cmbAllElements['cmb_checklist_item'] = {
    allowedParent: ['cmb_checklist_box'],
    addButtonText: 'List Item',
    title: 'List Item',
    icon: '<i class="fa fa-list"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy',],
    avoidableTabs: [],
    html: `<li class="media cmb_checklist_item">
        <span class="cmb-single-line-editable-text">List Item</span>
    </li>`,
};
cmbAllElements['cmb_form_box'] = {
    allowedParent: ['cmb_column'],
    addButtonText: 'Form',
    title: 'Form',
    icon: '<i class="cm cm-form"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next', 'cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Settings',
            options: [
                {
                    'form-action-url' : {
                        title: 'Form Action URL',
                        subTitle: 'Set form action URL',
                        type: 'input',
                        inputType: 'url',
                        attribute: 'prop',
                        tagProp: 'action',
                    },
                    'form-method' : {
                        title: 'Form Method',
                        subTitle: 'Set form method.',
                        type: 'input',
                        inputType: 'switch',
                        fieldParam: {
                            'get' : 'GET',
                            'post' : 'POST',
                        },
                        attribute: 'prop',
                        tagProp: 'method',
                    },
                    'allow-form-enctype' : {
                        title: 'Allow Form Enctype',
                        subTitle: 'Toggle form enctype option.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'prop',
                        tagProp: 'enctype',
                        defaultValue: 'multipart/form-data',
                    },
                }
            ]
        },
    },
    html: `<form action="" class="cmb_form_box cmb-element" method="get">
        <div class="form-group cmb_form_group_text">
            <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
            <input id="" type="text" class="form-control cmb-form-control" name="" placeholder="placeholder" value="">
            <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
        </div>
    </form>`
};
cmbAllElements['cmb_form_group_text'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Text Element',
    title: 'Text Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-placeholder' : {
                        title: 'Input Placeholder',
                        subTitle: 'Set input placeholder text.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'placeholder',
                        childItem: '.cmb-form-control',
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'input-value' : {
                        title: 'Input Default Value',
                        subTitle: 'Set input default value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_text">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <input id="" type="text" class="form-control cmb-form-control" name="" placeholder="placeholder" value="">
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_hidden'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Hidden Element',
    title: 'Hidden Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'input-value' : {
                        title: 'Input Default Value',
                        subTitle: 'Set input default value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    }
                }
            ]
        },
    },
    html: `<div class="form-group mb-0 cmb_form_group_hidden">
        <input id="" type="hidden" class="cmb-form-control" name="" value="">
    </div>`,
};
cmbAllElements['cmb_form_group_email'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Email Element',
    title: 'Email Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-placeholder' : {
                        title: 'Input Placeholder',
                        subTitle: 'Set input placeholder text.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'placeholder',
                        childItem: '.cmb-form-control',
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'input-value' : {
                        title: 'Input Default Value',
                        subTitle: 'Set input default value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_email">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <input id="" type="email" class="form-control cmb-form-control" name="" placeholder="placeholder" value="">
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_password'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Password Element',
    title: 'Password Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_password">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <input id="" type="password" class="form-control cmb-form-control" name="">
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_number'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Number Element',
    title: 'Number Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-placeholder' : {
                        title: 'Input Placeholder',
                        subTitle: 'Set input placeholder text.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'placeholder',
                        childItem: '.cmb-form-control',
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'input-value' : {
                        title: 'Input Default Value',
                        subTitle: 'Set input default value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    },
                    'input-min' : {
                        title: 'Input Min Value',
                        subTitle: 'Set input min value.',
                        type: 'input',
                        inputType: 'number',
                        attribute: 'prop',
                        tagProp: 'min',
                        childItem: '.cmb-form-control',
                    },
                    'input-max' : {
                        title: 'Input Max Value',
                        subTitle: 'Set input max value.',
                        type: 'input',
                        inputType: 'number',
                        attribute: 'prop',
                        tagProp: 'max',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_number">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <input id="" type="number" max="" min="" class="form-control cmb-form-control" name="" placeholder="placeholder" value="">
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_range'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Range Element',
    title: 'Range Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'input-value' : {
                        title: 'Input Default Value',
                        subTitle: 'Set input default value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    },
                    'input-min' : {
                        title: 'Input Min Value',
                        subTitle: 'Set input min value.',
                        type: 'input',
                        inputType: 'number',
                        attribute: 'prop',
                        tagProp: 'min',
                        childItem: '.cmb-form-control',
                    },
                    'input-max' : {
                        title: 'Input Max Value',
                        subTitle: 'Set input max value.',
                        type: 'input',
                        inputType: 'number',
                        attribute: 'prop',
                        tagProp: 'max',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_range">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <input id="" type="range" max="50" min="0" class="form-control-range cmb-form-control" name="" value="">
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_file'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'File Element',
    title: 'File Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_file">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <input id="" type="file" class="form-control-file cmb-form-control" name="">
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_color'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Color Element',
    title: 'Color Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'input-value' : {
                        title: 'Input Default Value',
                        subTitle: 'Set input default value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_color">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <div>
            <input id="" type="color" class="cmb-form-control" name="" value="">
        </div>
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_row'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Form Row',
    title: 'Form Row',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
    avoidableTabs: ['position', 'design'],
    html: `<div class="form-row cmb_form_group_row">
        <div class="cmb_form_column col-sm-12"></div>
    </div>`,
};
cmbAllElements['cmb_form_column'] = {
    allowedParent: ['cmb_form_group_row'],
    addButtonText: 'Form Column',
    title: 'Form Column',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
    avoidableTabs: ['position', 'design'],
    htmlVariation: {
        'column-1' : {
            subtitle: '1 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-1">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-2' : {
            subtitle: '2 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-2">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-3' : {
            subtitle: '3 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-3">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-4' : {
            subtitle: '4 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-4">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-5' : {
            subtitle: '5 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-5">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-6' : {
            subtitle: '6 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-6">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-7' : {
            subtitle: '7 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-7">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-8' : {
            subtitle: '8 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-8">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-9' : {
            subtitle: '9 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-9">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-10' : {
            subtitle: '10 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-10">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-11' : {
            subtitle: '11 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-11">
    <div class="cmb_editable_text"><div class="cmb-editable-text"><div class="cmb-editable-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div></div></div>
</div>`
        },
        'column-12' : {
            subtitle: '12 grid',
            icon: '<i class="fa fa-columns"></i>',
            html: `<div class="cmb_form_column col-sm-12">
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
};
cmbAllElements['cmb_form_textarea'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Textarea Element',
    title: 'Textarea Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-id' : {
                        title: 'Input ID',
                        subTitle: 'Set input element ID.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'id',
                        childItem: '.cmb-form-control',
                        afterChange: function (targetDom) {
                            targetDom.siblings('.cmb-input-text-label').attr('for', targetDom.attr('id') );
                        }
                    },
                    'input-placeholder' : {
                        title: 'Input Placeholder',
                        subTitle: 'Set input placeholder text.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'placeholder',
                        childItem: '.cmb-form-control',
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'input-rows' : {
                        title: 'Textarea Rows',
                        subTitle: 'Set textarea rows.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'rows',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_textarea">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <textarea class="form-control cmb-form-control" name="" placeholder="placeholder" id="" rows="3"></textarea>
        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_group_radio'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    subWrapper: '.cmb_form_radio_items',
    addButtonText: 'Radio Element',
    title: 'Radio Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_radio">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <div class="cmb_form_radio_items">
            <div class="custom-control custom-radio cmb_form_radio_item">
                <label>
                    <input type="radio" class="custom-control-input cmb-form-control" name="radio" value="">
                    <span class="custom-control-label pt-1"><span class="cmb-single-line-editable-text">Radio Item</span></span>
                </label>
            </div>
        </div>

        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_radio_item'] = {
    allowedParent: ['cmb_form_group_radio'],
    addButtonText: 'Radio Item',
    title: 'Radio Item',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position', 'design', 'background'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'input-value' : {
                        title: 'Input Value',
                        subTitle: 'Set input value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    },
                }
            ]
        },
    },
    afterAdd: function(targetDom) {
        let previousNameAttribute = targetDom.siblings('.cmb_form_radio_item').eq(0).find('.cmb-form-control').attr('name');

        if( targetDom.siblings('.cmb_form_radio_item').length > 0 )
        {
            targetDom.find('.cmb-form-control').attr('name', previousNameAttribute);
        }
    },
    html: `<div class="custom-control custom-radio cmb_form_radio_item">
        <label>
            <input type="radio" class="custom-control-input cmb-form-control" name="radio" value="value">
            <span class="custom-control-label pt-1"><span class="cmb-single-line-editable-text">Radio Item</span></span>
        </label>
    </div>`,
};
cmbAllElements['cmb_form_group_checkbox'] = {
    allowedParent: ['cmb_form_box'],
    subWrapper: '.cmb_form_checkbox_items',
    addButtonText: 'Checkbox Element',
    title: 'Checkbox Element',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings', 'cmb-option-add'],
    avoidableTabs: ['position'],
    settings: {
        setting: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'toggle_label_display' : {
                        title: 'Hide This Form Element Label',
                        subTitle: 'Toggle this form element label display.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-text-label',
                    },
                    'input-name' : {
                        title: 'Input Name',
                        subTitle: 'Set input name.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'name',
                        childItem: '.cmb-form-control',
                    },
                    'toggle_input_help_text' : {
                        title: 'Hide This Form Element Help Text',
                        subTitle: 'Toggle this form element help text.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute: 'custom-class',
                        defaultValue: 'd-none',
                        childItem: '.cmb-input-help-text',
                    },
                }
            ]
        },
    },
    html: `<div class="form-group cmb_form_group_checkbox">
        <label for="" class="cmb-input-text-label"><span class="cmb-single-line-editable-text">Element Label</span></label>
        <div class="cmb_form_checkbox_items">
            <div class="custom-control custom-checkbox cmb_form_checkbox_item">
                <label>
                    <input type="checkbox" class="custom-control-input cmb-form-control" name="checkbox" value="">
                    <span class="custom-control-label pt-1"><span class="cmb-single-line-editable-text">Checkbox Item</span></span>
                </label>
            </div>
        </div>

        <small class="form-text text-muted cmb-input-help-text"><span class="cmb-single-line-editable-text">We'll never share your email with anyone else.</span></small>
    </div>`,
};
cmbAllElements['cmb_form_checkbox_item'] = {
    allowedParent: ['cmb_form_group_checkbox'],
    addButtonText: 'Checkbox Item',
    title: 'Checkbox Item',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position', 'design', 'background'],
    settings: {
        checkbox: {
            title: 'Form Element Group Settings',
            options: [
                {
                    'input-value' : {
                        title: 'Input Value',
                        subTitle: 'Set input value.',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'prop',
                        tagProp: 'value',
                        childItem: '.cmb-form-control',
                    },
                }
            ]
        },
    },
    afterAdd: function(targetDom) {
        let previousNameAttribute = targetDom.siblings('.cmb_form_checkbox_item').eq(0).find('.cmb-form-control').attr('name');

        if( targetDom.siblings('.cmb_form_checkbox_item').length > 0 )
        {
            targetDom.find('.cmb-form-control').attr('name', previousNameAttribute);
        }
    },
    html: `<div class="custom-control custom-checkbox cmb_form_checkbox_item">
        <label>
            <input type="checkbox" class="custom-control-input cmb-form-control" name="checkbox" value="value">
            <span class="custom-control-label pt-1"><span class="cmb-single-line-editable-text">Checkbox Item</span></span>
        </label>
    </div>`,
};
cmbAllElements['cmb_reset_button'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Reset Button',
    title: 'Reset Button',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {},
    html: `<button type="reset" class="btn lf-btn-primary border-0 cmb_reset_button"><span class="cmb-single-line-editable-text">RESET</span></button>`,
};
cmbAllElements['cmb_submit_button'] = {
    allowedParent: ['cmb_form_box', 'cmb_form_column'],
    addButtonText: 'Submit Button',
    title: 'Submit Button',
    icon: '<i class="fa fa-list-alt"></i>',
    elementTabName: 'component',
    elementType: 'static-layout',
    allowedActionElement: ['cmb-option-prev', 'cmb-option-next','cmb-option-delete', 'cmb-option-copy', 'cmb-option-settings'],
    avoidableTabs: ['position'],
    settings: {},
    html: `<button type="submit" class="btn btn-success border-0 cmb_submit_button"><span class="cmb-single-line-editable-text">Submit</span></button>`,
};

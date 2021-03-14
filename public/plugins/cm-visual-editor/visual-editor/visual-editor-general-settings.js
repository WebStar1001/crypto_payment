let cmbGeneralSettings = {
    title: 'Settings',
    options: {
        general: {
            title: 'Primary Setting',
            options: [
                {
                    'xs-hide' : {
                        title: 'Hide On Extra Small Screen',
                        subTitle : 'Works only when screen size is less then 576px.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'cmb-d-none',
                        wrapperClass : '',
                    },
                    'sm-hide' : {
                        title: 'Hide On Small Screen',
                        subTitle : 'Works only when screen size is from 576px to 767px.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'cmb-d-sm-none',
                        wrapperClass : '',
                    },
                    'md-hide' : {
                        title: 'Hide On Medium Screen',
                        subTitle : 'Works only when screen size is from 768px to 991px.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'cmb-d-md-none',
                        wrapperClass : '',
                    },
                    'lg-hide' : {
                        title: 'Hide On Large Screen',
                        subTitle : 'Works only when screen size is from 992px to 1199px.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'cmb-d-lg-none',
                        wrapperClass : '',
                    },
                    'xl-hide' : {
                        title: 'Hide On Extra Large Screen',
                        subTitle : 'Works only when screen size is more than 1199px.',
                        type: 'input',
                        inputType: 'toggle',
                        attribute : 'custom-class',
                        defaultValue: 'cmb-d-xl-none',
                        wrapperClass : '',
                    },
                    'class' : {
                        title: 'Extra Class',
                        subTitle : 'If needed, use extra classes already styled before',
                        placeholder: 'Custom Class',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'class',
                        blackList : ['d-none', 'd-sm-none', 'd-md-none', 'd-lg-none', 'd-xl-none'],
                    },
                    'id' : {
                        title: 'Id Name',
                        subtitle : 'If needed, Use the dom ID',
                        placeholder: 'ID Name',
                        type: 'input',
                        inputType: 'text',
                        attribute: 'id',
                        blackList : [' '],
                    },
                },
            ]
        },
        position: {
            title: 'Position Setting',
            resolutionMessage: true,
            options: [
                {
                    float: {
                        title: 'Float',
                        type: 'responsive-class',
                        optionName: 'float',
                    },
                    display: {
                        title: 'Display',
                        type: 'responsive-class',
                        optionName: 'display',
                    },
                    flex: {
                        title: 'Flex',
                        type: 'responsive-class',
                        optionName: 'flex',
                    },
                    'justify-content': {
                        title: 'Justify Content',
                        type: 'responsive-class',
                        optionName: 'justifyContent',
                    },
                    'align-content': {
                        title: 'Align Content',
                        type: 'responsive-class',
                        optionName: 'alignContent',
                    },
                    'align-item': {
                        title: 'Align Item',
                        type: 'responsive-class',
                        optionName: 'alignItem',
                    },
                    'align-self': {
                        title: 'Align Self',
                        type: 'responsive-class',
                        optionName: 'alignSelf',
                    },
                }
            ]
        },
        design: {
            title: 'Design Setting',
            resolutionMessage: true,
            options: [
                {
                    'padding-top': {
                        title: 'Padding Top',
                        type: 'responsive-class',
                        optionName: 'paddingTop',
                    },
                    'padding-right': {
                        title: 'Padding Right',
                        type: 'responsive-class',
                        optionName: 'paddingRight',
                    },
                    'padding-bottom': {
                        title: 'Padding Bottom',
                        type: 'responsive-class',
                        optionName: 'paddingBottom',
                    },
                    'padding-left': {
                        title: 'Padding Left',
                        type: 'responsive-class',
                        optionName: 'paddingLeft',
                    },
                    'margin-top': {
                        title: 'Margin Top',
                        type: 'responsive-class',
                        optionName: 'marginTop',
                    },
                    'margin-right': {
                        title: 'Margin Right',
                        type: 'responsive-class',
                        optionName: 'marginRight',
                    },
                    'margin-bottom': {
                        title: 'Margin Bottom',
                        type: 'responsive-class',
                        optionName: 'marginBottom',
                    },
                    'margin-left': {
                        title: 'Margin Left',
                        type: 'responsive-class',
                        optionName: 'marginLeft',
                    },
                    'text-align': {
                        title: 'Text Align',
                        type: 'responsive-class',
                        optionName: 'textAlign',
                    },
                }
            ]
        },
        background: {
            title: 'Background Setting',
            options: [
                {
                    'background-color' : {
                        title: 'Background Color',
                        subTitle : 'You can use solid color and opacity.',
                        type: 'input',
                        inputType : 'colorPicker',
                        attribute: 'style',
                        styleName: 'background-color',
                    },
                    'background-image' : {
                        title: 'Background Image',
                        subTitle : 'Use image link as background.',
                        type: 'input',
                        placeholder: 'background image',
                        attribute : 'style',
                        inputType: 'image',
                        styleName: 'background-image',
                        wrapperClass : '',
                    },
                    'background-position' : {
                        title: 'Background Position',
                        subTitle : 'The background-position property sets the starting position of a background image',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['background-position'],
                        attribute : 'style',
                        styleName: 'background-position',
                        wrapperClass : '',
                    },
                    'background-attachment' : {
                        title: 'Background Attachment',
                        subTitle : 'The background-attachment property sets whether a background image scrolls with the rest of the page, or is fixed.',
                        type: 'input',
                        inputType : 'switch',
                        fieldParam : cmbStyleTypes['background-attachment'],
                        attribute : 'style',
                        styleName: 'background-attachment',
                        wrapperClass : '',
                    },
                    'background-repeat' : {
                        title: 'Background Repeat',
                        subTitle : 'The background-repeat property sets if/how a background image will be repeated.',
                        type: 'input',
                        inputType : 'switch',
                        fieldParam : cmbStyleTypes['background-repeat'],
                        attribute : 'style',
                        styleName: 'background-repeat',
                        wrapperClass : '',
                    },
                    'background-size' : {
                        title: 'Background Size',
                        subTitle : 'The background-size property specifies the size of the background images.',
                        type: 'input',
                        inputType : 'select',
                        fieldParam : cmbStyleTypes['background-size'],
                        attribute : 'custom-class',
                        wrapperClass : '',
                    },
                }
            ]
        },
    }
};

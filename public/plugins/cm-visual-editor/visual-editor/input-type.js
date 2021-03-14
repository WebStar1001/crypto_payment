let cmbAllInputType = {
    text: {
        html: '<input type="text"/>',
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-type-text',
        output : function(option, dataType, value){
            let hasUnit = option.param && option.param[0].unit ? true : (!!option.unit);
            let unit = option.param && option.param[0].unit ? option.param[0].unit : (option.unit ? option.unit : false);
            let placeholder = option.param && option.param[0].placeholder ? option.param[0].placeholder : option.placeholder;
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html, this.className, this.tagname, hasUnit);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType);
            return finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,value,placeholder,unit) + '</div>';
        },
    },
    number: {
        html : '<input type="number" />',
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-type-number',
        output : function(option, dataType, value){
            let hasUnit = option.param && option.param[0].unit ? true : (!!option.unit);
            let unit = option.param && option.param[0].unit ? option.param[0].unit : (option.unit ? option.unit : false);
            let placeholder = option.param && option.param[0].placeholder ? option.param[0].placeholder : option.placeholder;
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html, this.className, this.tagname, hasUnit);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType);
            return finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,value,placeholder,unit) + '</div>';
        },
    },
    url: {
        html : '<input type="url" />',
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-type-url',
        output : function(option, dataType, value){
            let placeholder = option.param && option.param[0].placeholder ? option.param[0].placeholder : option.placeholder;
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html, this.className, this.tagname, false);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType);
            return finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,value,placeholder,false) + '</div>';
        },
    },
    colorPicker: {
        html: '<input type="text" />',
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-type-color-picker',
        output : function(option, dataType, value){
            let hasUnit = false;
            let unit = false;
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html, this.className, this.tagname, hasUnit);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType);
            return finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,value,false,unit) + '</div>';
        },
    },
    range: {
        html : {
            'infoStart' : '<div class="cmb-input-info-box">',
            'infoEnd' : '</div>',
            'parentStart' : '<div class="cmb-input-range-box">',
            'parentEnd' : '</div>',
            'input' : '<input type="range" />'
        },
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-type-range',
        output : function(option, dataType, value){
            let numValue = $.isNumeric(parseFloat(value)) ? parseFloat(value) : ''
            value = numValue ? value : '';
            let fieldParam = option.param && option.param[0].fieldParam ?  (typeof option.param[0].fieldParam === 'function' ? option.param[0].fieldParam() : option.param[0].fieldParam) : (typeof option.fieldParam === 'function' ? option.fieldParam() : option.fieldParam);
            let hasUnit = option.param && option.param[0].unit ? true : (!!option.unit);
            let unit = option.param && option.param[0].unit ? option.param[0].unit : (option.unit ? option.unit : false);
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html.input, this.className, this.tagname, hasUnit);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType) + this.html.parentStart + this.html.infoStart + (numValue ? numValue : 'n/a') + this.html.infoEnd;
            return finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,value,false,unit,fieldParam) + this.html.parentEnd + '</div>';
        },
    },
    textarea: {
        html:{
            inputStart: '<textarea>',
            inputEnd: '</textarea>',
        },
        tagname: 'textarea',
        className: 'cmb-option-box-input cmb-input-type-textarea',
        output : function(option, dataType, value){
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html.inputStart, this.className, this.tagname, false);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType);
            finalHtml = finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,false,option.placeholder,false, false, '>');
            return finalHtml + value + this.html.inputEnd + '</div>';
        }
    },
    select: {
        html:{
            inputStart: '<select>',
            inputEnd: '</select>',
        },
        tagname: 'select',
        className: 'cmb-option-box-input cmb-input-type-select',
        output : function(option, dataType, value){
            let fieldParam = option.param && option.param[0].fieldParam ?  (typeof option.param[0].fieldParam === 'function' ? option.param[0].fieldParam() : option.param[0].fieldParam) : (typeof option.fieldParam === 'function' ? option.fieldParam() : option.fieldParam);
            let hasUnit = option.param && option.param[0].unit ? true : (!!option.unit);
            let unit = option.param && option.param[0].unit ? option.param[0].unit : (option.unit ? option.unit : false);
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html.inputStart, this.className, this.tagname, hasUnit);
            /*let validator = '';
            if(option.fieldParam){
                let separator = '';
                $.each(option.fieldParam, function (key, val) {
                    validator = validator + separator + key;
                    separator = '|';
                })
            }
            if(validator){
                dataType['data-cmb-validator'] = validator;
            }*/
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType);
            finalHtml = finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,false, false,unit, false, '>');
            finalHtml = finalHtml + '<option value="">Select</option>';
            $.each(fieldParam, function (key, val) {
                finalHtml = finalHtml + '<option value="' + key + '"' + (key==value ? ' selected' : '') + '>' + val + '</option>';
            })
            return finalHtml + this.html.inputEnd + '</div>';
        }
    },
    switch: {
        html : {
            'parentStart' : '<div class="cmb-switch">',
            'parentEnd' : '</div>',
            'input' : '<input type="radio" />',
            'labelStart' : '<label class="cmb-switch-label">',
            'labelEnd': '</label>'
        },
        tagname: 'input',
        className: 'cmb-option-box-input cmb-switch-input',
        output : function(option, dataType, value){
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType) + this.html.parentStart;
            let inputHtml = this;
            let uniqueName =dataType['data-cmb-class'] + '-' + dataType['data-cmb-option-name'];
            let fieldParam = option.param && option.param[0].fieldParam ?  (typeof option.param[0].fieldParam === 'function' ? option.param[0].fieldParam() : option.param[0].fieldParam) : (typeof option.fieldParam === 'function' ? option.fieldParam() : option.fieldParam);
            $.each(fieldParam,function(key, val){
                let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,inputHtml.html.input, inputHtml.className, inputHtml.tagname, false);
                let uniqueId = uniqueName + '-'+ key.replace(/\s/g, '-');
                coreHtml = coreHtml.split('/>');
                finalHtml = finalHtml + coreHtml[0] + ' id="' + uniqueId + '"';
                finalHtml = finalHtml + ' value="' + key + '"';
                if(value && value.toString()===key.toString()){
                    finalHtml = finalHtml + ' checked';
                }
                finalHtml = finalHtml + ' name="' + uniqueName + '"' + '/>';
                finalHtml = finalHtml + inputHtml.html.labelStart.replace('>',(' for="' + uniqueId + '">')) + val + inputHtml.html.labelEnd;
            });
            return finalHtml + inputHtml.html.parentEnd + '</div>';
        },
    },
    dropdown: {
        html : {
            'dropdownWrapperStart': '<div class="cmb-dropdown">',
            'dropdownWrapperEnd': '</div>',
            'parentStart' : '<div class="cmb-switch cmb-dropdown">',
            'parentEnd' : '</div>',
            'inputHolderStart':'<div class="cmb-dropdown-item-holder">',
            'inputHolderEnd':'</div>',
            'input' : '<input type="radio" class="cmb-dropdown-item"/>',
            'labelStart' : '<label class="cmb-switch-label cmb-icon-changer">',
            'labelEnd': '</label>'
        },
        tagname: 'input',
        className: 'cmb-option-box-input cmb-switch-input',
        output : function(option, dataType, value){
            let MainWrapperStarting = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType) + this.html.inputHolderStart;
            let finalHtml = this.html.parentStart;
            let inputHtml = this;
            let uniqueName =dataType['data-cmb-class'] + '-' + dataType['data-cmb-option-name'];
            let fieldParam = option.param && option.param[0].fieldParam ?  (typeof option.param[0].fieldParam === 'function' ? option.param[0].fieldParam() : option.param[0].fieldParam) : (typeof option.fieldParam === 'function' ? option.fieldParam() : option.fieldParam);
            $.each(fieldParam,function(key, val){
                let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,inputHtml.html.input, inputHtml.className, inputHtml.tagname, false);
                let uniqueId = uniqueName + '-'+ key.replace(/\s/g, '-');
                coreHtml = coreHtml.split('/>');
                finalHtml = finalHtml + coreHtml[0] + ' id="' + uniqueId + '"';
                finalHtml = finalHtml + ' value="' + key + '"';
                if(value && value.toString()===key.toString()){
                    MainWrapperStarting = MainWrapperStarting + val ;
                    finalHtml = finalHtml + ' checked';
                }
                finalHtml = finalHtml + ' name="' + uniqueName + '"' + '/>';
                finalHtml = finalHtml + inputHtml.html.labelStart.replace('>',(' for="' + uniqueId + '">')) + val + inputHtml.html.labelEnd;
            });
            return MainWrapperStarting + this.html.inputHolderEnd + finalHtml  + inputHtml.html.parentEnd + '</div>';
        },
    },
    toggle: {
        html : {
            'parentStart' : '<div class="d-table m-auto">',
            'parentEnd' : '</div>',
            'input' : '<input type="checkbox" />',
            'labelStart' : '<label class="cmb-filter-checkbox-label">',
            'labelEnd': '</label>'
        },
        tagname: 'input',
        className: 'cmb-option-box-input cmb-filter-checkbox',
        output : function(option, dataType, value){
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType) + this.html.parentStart;
            let uniqueId =dataType['data-cmb-class'] + '-' + dataType['data-cmb-option-name'];
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html.input, this.className, this.tagname, false);
            coreHtml = coreHtml.split('/>');
            finalHtml = finalHtml + coreHtml[0] + ' id="' + uniqueId + '"';
            finalHtml = finalHtml + ' value="' + option.defaultValue + '"';

            if(value){
                finalHtml = finalHtml + ' checked';
            }
            finalHtml = finalHtml + '/>';
            finalHtml = finalHtml + this.html.labelStart.replace('>',(' for="' + uniqueId + '">')) + this.html.labelEnd;
            return finalHtml + this.html.parentEnd + '</div>';
        },
    },
    fourSided: {
        html: {
            parentStart: '<div class="cmb-4-sided-option"><div>',
            parentEnd: '</div></div>',
            'input' : '<input type="text" />',
        },
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-four-sided',
        output : function(option, dataType, value){
            let thisOption = this;

            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType) + this.html.parentStart;

            $.each(option.param, function (subName, subVal) {
                let individualValue = value[subName] ? value[subName] : '';
                let hasUnit = subVal.unit ? true : (option.unit ? true : false);
                let unit = subVal.unit ? subVal.unit : (option.unit ? option.unit : false);
                let placeholder = subVal.placeholder ? subVal.placeholder : option.placeholder;
                finalHtml = finalHtml + '<div class="cmb-4-sided-' + subName + '">';
                let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,thisOption.html.input, thisOption.className, thisOption.tagname, hasUnit, subName);
                finalHtml = finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,individualValue,placeholder,unit) + '</div>';
            })
            finalHtml = finalHtml + '<div class="cmb-4-sided-inner">'+ option.styleName +'</div>';
            return finalHtml + this.html.parentEnd + '</div>';
        },
    },
    fourCornered: {
        html: {
            parentStart: '<div class="cmb-4-cornered-option"><div>',
            parentEnd: '</div></div>',
            'input' : '<input type="text" />',
        },
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-four-cornered',
        output : function(option, dataType, value){
            let thisOption = this;

            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType) + this.html.parentStart;

            $.each(option.param, function (subName, subVal) {
                subName = Array.isArray(option.param) ? subVal : subName;
                let placeholder = subVal.placeholder ? subVal.placeholder : option.placeholder;
                let individualValue = value[subName] ? value[subName] : '';
                let hasUnit = subVal.unit ? true : (option.unit ? true : false);
                let unit = subVal.unit ? subVal.unit : (option.unit ? option.unit : false);
                finalHtml = finalHtml + '<div class="cmb-4-cornered-' + subName + '">';
                let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,thisOption.html.input, thisOption.className, thisOption.tagname, hasUnit, subName);
                finalHtml = finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,individualValue,placeholder,unit) + '</div>';
            })
            finalHtml = finalHtml + '<div class="cmb-4-sided-inner-left">Left</div>';
            finalHtml = finalHtml + '<div class="cmb-4-sided-inner-right">Right</div>';
            finalHtml = finalHtml + '<div class="cmb-4-sided-inner-top">Top</div>';
            finalHtml = finalHtml + '<div class="cmb-4-sided-inner-bottom">Bottom</div>';
            return finalHtml + this.html.parentEnd + '</div>';
        },
    },
    image: {
        html : '<input type="url" />',
        tagname: 'input',
        className: 'cmb-option-box-input cmb-input-type-image',
        output : function(option, dataType, value){
            let placeholder = option.param && option.param[0].placeholder ? option.param[0].placeholder : option.placeholder;
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute, this.html, this.className, this.tagname, false);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType);
            return finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,value,placeholder,false) + '<img class="cmb-option-box-img img-fluid" alt="no valid image" />' + '</div>';
        },
    },
    multiInput: {
        html: {
            wrapperStart: '<div class="cmb-multi-input">',
            wrapperEnd: '</div>',
            input:'<input type="hidden"/>',
            loopedItemWrapperStart: '<div>',
            loopInput: '<input type="text" class="cmb-visible-single-input">',
            loopInputSeparator: '>',
            removeItem: '<a href="javascript:;" class="cmb-multi-input-remove">-</a>',
            loopedItemWrapperEnd: '</div>',
            insertItem:'<a href="javascript:;" class="cmb-multi-input-insert">+</a>'
        },
        tagname: 'input',
        className: 'cmb-option-box-input cmb-hidden-main-input',
        output : function(option, dataType, value){
            let coreItem = this;
            let hasUnit = option.param && option.param[0].unit ? true : (!!option.unit);
            let unit = option.param && option.param[0].unit ? option.param[0].unit : (option.unit ? option.unit : false);
            let placeholder = option.param && option.param[0].placeholder ? option.param[0].placeholder : option.placeholder;
            let coreHtml = cmbInputBuildingFuncs.inputHtmlBuilder(option.attribute,this.html.input, this.className, this.tagname, hasUnit);
            let finalHtml = cmbInputBuildingFuncs.inputWrapperBeginning(option, dataType) + this.html.wrapperStart;
            finalHtml = finalHtml + cmbInputBuildingFuncs.textFieldBuilder(coreHtml,value,placeholder,unit);

            let loopedItem = value.split('|');
            if(loopedItem.length>0){
                $.each(loopedItem, function (key, val) {
                    if(val || $.isNumeric(val)){
                        finalHtml = finalHtml + coreItem.html.loopedItemWrapperStart ;
                        let inputPart = coreItem.html.loopInput.split(coreItem.html.loopInputSeparator);
                        finalHtml = finalHtml + inputPart[0] + ' value="' + val + '"' + coreItem.html.loopInputSeparator;
                        finalHtml = finalHtml + coreItem.html.removeItem + coreItem.html.loopedItemWrapperEnd;
                    }
                })
            }
            return finalHtml + this.html.insertItem + this.html.wrapperEnd + '</div>';
        },
    },
};

let cmbInputBuildingFuncs = {
    inputHtmlBuilder: function(attributeType, htmlText, className, tagName, hasUnit, subName){
        htmlText = htmlText.split('<'+ tagName);
        let finalHtml = '<'+tagName + (hasUnit ? ' data-cmb-unit-available="yes"' : '' );
        if(subName){
            finalHtml = finalHtml + ' data-cmb-sub-style="'+ subName + '"';
        }
        if(className!==''){
            finalHtml = finalHtml  + ' class="' + className + (attributeType==='dynamic-layout' ? ' cmb-dynamic-input-type' : '') + '"';
        }
        return finalHtml  + htmlText[1];
    },

    unitBuilder: function(unit, selectedUnit){
        let htmlText = '<select class="cmb-helper-unit">';
        $.each(unit, function (key,value) {
            if(cmbStyleUnits[key]){
                htmlText = htmlText + '<option value="' + key + '"' + (key === selectedUnit ? ' selected' : '') + '>';
                htmlText = htmlText + value + '</option>';
            }
        })
        return htmlText + '</select>';;
    },

    inputValueSeparator: function(value) {
        let selectedUnit = '';
        value = (value || $.isNumeric(value)) ? value : '';
        let outputValue = parseFloat(value);
        if(!outputValue && !$.isNumeric(outputValue)){
            return {
                value: '',
                selectedUnit: ''
            }
        }
        selectedUnit = value.replace(outputValue,'');
        value = parseFloat(value);
        return {
            value: outputValue,
            selectedUnit: selectedUnit
        }
    },

    inputWrapperBeginning: function(option, dataType){
        let finalHtml = '<div class="cmb-combined-input-wrapper'+ (option.wrapperClass ? ' ' + option.wrapperClass : '') + '"';
        $.each(dataType,function(key,value){
            finalHtml = finalHtml + ' ' + key + '="' + value + '"';
        });
        return finalHtml +'>';
    },
    textFieldBuilder: function(coreHtml,value,placeholder,unit,fieldParam,separator){
        separator = separator ? separator : '/>';
        coreHtml = coreHtml.split(separator);
        let finalHtml = coreHtml[0];
        let unitHtml = '';
        if(unit){
            value = cmbInputBuildingFuncs.inputValueSeparator(value);
            unitHtml = cmbInputBuildingFuncs.unitBuilder(unit, value.selectedUnit);
            value = value.value;
        }
        if(value || $.isNumeric(value)){
            finalHtml = finalHtml + ' value="' + value + '"';
        }
        if(fieldParam){
            $.each(fieldParam, function (key, val) {
                finalHtml = finalHtml + ' ' + key + '="' + val + '"';
            })
        }
        if(placeholder){
            finalHtml = finalHtml + ' placeholder="' + placeholder + '"';
        }
        return finalHtml + separator + unitHtml;
    },

    //--------------------------SAVING DATA--------------------------//
    getValidator : function(options, subStyleName) {
        let validator = [];
        let optionParam = false;
        if(options.param && options.param[subStyleName] && options.param[subStyleName]['fieldParam']){
            optionParam = typeof options.param[subStyleName]['fieldParam'] === 'function' ? options.param[subStyleName]['fieldParam']() : options.param[subStyleName]['fieldParam'];
        }
        else if(options.param && options.param[0] && options.param[0]['fieldParam']){
            optionParam = typeof options.param[0]['fieldParam'] === 'function' ? options.param[0]['fieldParam']() : options.param[0]['fieldParam'];
        }
        else if(options.fieldParam){
            optionParam = typeof options.fieldParam === 'function' ? options.fieldParam() : options.fieldParam;
        }

        if (options.inputType !== 'range' && optionParam)
        {
            validator = Object.keys(optionParam);
        }
        return validator;
    },
    setStyle : function(targetDom, childItem, pseudo, childPseudo, styleName, value, parentItem){
        let styleIndex = parentItem + '.'+ targetDom.attr('data-cmb-wrapper') + '[data-cmb-id="'+targetDom.attr('data-cmb-id')+'"]' + (pseudo ? pseudo : '') + (childItem ? ' ' + childItem + (childPseudo ? childPseudo : '') : '');


        if(!cmbStyleObject[styleIndex]){
            cmbStyleObject[styleIndex] = {};
        }
        if(value===''){
            if(cmbStyleObject[styleIndex][styleName]){
                delete cmbStyleObject[styleIndex][styleName];
            }
            if(Object.keys(cmbStyleObject[styleIndex]).length <=0){
                delete cmbStyleObject[styleIndex];
            }
        }
        else{
            if(styleName==='background-image'){
                value = 'url("'+value+'")';
            }
            else if(styleName==='content'){
                value = value.replace(/"+/g, '');
                value = '"' + value + '"'
            }
            cmbStyleObject[styleIndex][styleName]=value;
        }
    },
    pseudoLoop : function(targetDom, options, pseudoValue, value, styleName){
        let $this = this;
        let parentItem = options.parentItem ? options.parentItem + ' ' : '';
        if (options.childItem){
            if (Array.isArray(options.childItem)){
                $.each(options.childItem, function (childItemKey, childItemValue) {
                    if (Array.isArray(options.childPseudo)){
                        $.each(options.childPseudo, function (childPseudoKey, childPseudoValue) {
                            $this.setStyle(targetDom, childItemValue, pseudoValue, childPseudoValue, styleName, value, parentItem);
                        });
                    }
                    else {
                        $this.setStyle(targetDom, childItemValue, pseudoValue, options.childPseudo, styleName, value, parentItem);
                    }
                })
            }
            else {
                if (Array.isArray(options.childPseudo)){
                    $.each(options.childPseudo, function (childPseudoKey, childPseudoValue) {
                        $this.setStyle(targetDom, options.childItem, pseudoValue, childPseudoValue, styleName, value, parentItem);
                    });
                }
                else {
                    $this.setStyle(targetDom, options.childItem, pseudoValue, options.childPseudo, styleName, value, parentItem);
                }
            }
        }
        else {
            $this.setStyle(targetDom, false, pseudoValue, false, styleName, value, parentItem);
        }
    },
    saveStyle : function(targetDom,value,hasUnit,unitValue,subStyleName,options){
        if(options.beforeChange){
            options.beforeChange( targetDom );
        }
        let validator = this.getValidator(options, subStyleName);
        let styleName =  options.styleName.toString();
        if(subStyleName){
            if(styleName.indexOf('*') >=0){
                styleName = styleName.replace('*',subStyleName);
            }
            else{
                styleName = styleName + '-'+ subStyleName;
            }
        }

        if(hasUnit==='yes'){
            if(value.length > 0){
                value = parseFloat(value);
                if(!$.isNumeric(value) || !cmbStyleUnits[unitValue]){
                    return false;
                }
                else{
                    value=value + unitValue;
                }
            }
        }

        if(validator.length > 0 && validator.indexOf(value) < 0 && value !== ''){
            return false;
        }

        if (Array.isArray(options.pseudo)){
            let $this = this;
            $.each(options.pseudo, function (pseudoKey, pseudoValue) {
                $this.pseudoLoop(targetDom, options, pseudoValue, value, styleName);
            });
        }
        else {
            this.pseudoLoop(targetDom, options, options.pseudo, value, styleName);
        }
        cmbStyleData = cmbStyleToText();
        $('.cmb-dynamic-css-library').html(cmbStyleData);
        if(options.afterChange){
            options.afterChange(targetDom);
        }
    },

    saveClasses : function (targetDom,value,options) {
        if(options.beforeChange){
            options.beforeChange( targetDom );
        }
        let validator = this.getValidator(options);

        if(validator.length > 0 && validator.indexOf(value) < 0 && value !== ''){
            return false;
        }
        let previousClasses = targetDom.attr('data-cmb-classes') ? targetDom.attr('data-cmb-classes') : '';
        previousClasses = previousClasses.split('|');
        $.each(previousClasses, function (key, val) {
            if(val!=='' && targetDom.hasClass(val)){
                targetDom.removeClass(val);
            }
        });
        if(options.blackList){
            $.each(options.blackList,function (key, val) {
                if(val!=='' && targetDom.hasClass(val)){
                    targetDom.removeClass(val);
                }
            });
        }
        let classVal = value.split(' ');
        $.each(classVal,function (key, val) {
            if(val==='' || Array.isArray(options.blackList) && options.blackList.indexOf(val)>0){
                delete classVal[key];
            }
            else if(!targetDom.hasClass(val)){
                targetDom.addClass(val);
            }
        })
        targetDom.attr('data-cmb-classes', classVal.join(' '));
        if(options.afterChange){
            options.afterChange(targetDom);
        }
    },

    saveId : function (targetDom,value,options) {
        if(options.beforeChange){
            options.beforeChange( targetDom );
        }
        let validator = this.getValidator(options);
        if(validator.length > 0 && validator.indexOf(value) < 0 && value !== ''){
            return false;
        }
        if(Array.isArray(options.blackList) && options.blackList.indexOf(value)>0){
            return false;
        }
        targetDom.attr('id', value);
        if(options.afterChange){
            options.afterChange(targetDom);
        }
    },

    saveCustomClass : function (targetDom,value,isChecked,options) {
        if(options.beforeChange){
            options.beforeChange( targetDom );
        }
        let finalValue = options.inputType ==='toggle' ? options.defaultValue : value;
        value = options.inputType ==='toggle' ? (isChecked ? value : '') : '';

        let validator = this.getValidator(options);
        if(validator.length > 0 && validator.indexOf(finalValue) < 0 && value !== ''){
            return false;
        }
        if(validator.length > 0){
            $.each(validator,function (key,val) {
                if(finalValue !== val && targetDom.hasClass(val)){
                    targetDom.removeClass(val);
                }
                else if(finalValue === val && !targetDom.hasClass(val)){
                    targetDom.addClass(val);
                }
            })
        }
        else{
            if(value){
                if(!targetDom.hasClass(finalValue)){
                    targetDom.addClass(finalValue);
                }
            }
            else {
                if(targetDom.hasClass(finalValue)){
                    targetDom.removeClass(finalValue);
                }
            }
        }
        if(options.afterChange){
            options.afterChange(targetDom);
        }
    },

    saveProp : function (targetDom,value,isChecked,options) {
        if(options.beforeChange){
            options.beforeChange(targetDom);
        }
        let validator = this.getValidator(options);
        if(validator.length > 0 && validator.indexOf(value) < 0 && value !== ''){
            return false;
        }

        if(validator.length > 0){
            if(value || $.isNumeric(value)){
                targetDom.attr(options.tagProp, value);
            }
            else{
                targetDom.removeAttr(options.tagProp);
            }
        }
        else if(options.defaultValue){
            if(isChecked){
                targetDom.attr(options.tagProp, options.defaultValue);
            }
            else{
                targetDom.removeAttr(options.tagProp);
            }
        }
        else{
            targetDom.attr(options.tagProp, value);
        }

        if(options.afterChange){
            options.afterChange(targetDom);
        }
    }
}

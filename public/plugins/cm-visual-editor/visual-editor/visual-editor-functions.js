function cmbActionValidation(index, actionId) {
    if (cmbAllElements[index]['allowedActionElement'] === false) {
        return false;
    } else if (cmbAllElements[index]['allowedActionElement'] === true) {
        return true;
    } else if (!cmbAllElements[index]['allowedActionElement']) {
        return true;
    } else if (Array.isArray(cmbAllElements[index]['allowedActionElement']) && cmbAllElements[index]['allowedActionElement'].indexOf(actionId) >= 0) {
        return true;
    } else {
        return false;
    }
}

function cmbAddSection(wrapperLocation, htmlDom, identifier, type, parentIdentifier) {
    let lastAddedElement = '';
    if(cmbAllElements[identifier]['beforeAdd']){
        cmbAllElements[identifier]['beforeAdd']($(wrapperLocation),htmlDom);
    }
    if(typeof htmlDom ==='string'){
        let id = cmbCountingRearrange();
        id = id ? id : cmbCountedExistingElements;
        lastAddedElement = $(htmlDom).attr('data-cmb-wrapper', identifier).attr('data-cmb-id', id).attr('data-cmb-element-type',type).appendTo((cmbAllElements[parentIdentifier] && cmbAllElements[parentIdentifier]['subWrapper'] ? $(wrapperLocation).find(cmbAllElements[parentIdentifier]['subWrapper']) : $(wrapperLocation)));
        if(id==cmbCountedExistingElements){
            cmbCountedExistingElements++;
        }
        cmbRefactorIdentifier(lastAddedElement);
    }
    else{
        let id = cmbCountingRearrange();
        id = id ? id : cmbCountedExistingElements;
        lastAddedElement = $(htmlDom[1]).attr('data-cmb-wrapper', identifier).attr('data-cmb-id', id).attr('data-cmb-element-type',type).appendTo($(wrapperLocation).children(htmlDom[0]));
        if(id==cmbCountedExistingElements){
            cmbCountedExistingElements++;
        }
        cmbRefactorIdentifier(lastAddedElement);
    }
    if(cmbAllElements[identifier]['afterAdd']){
        cmbAllElements[identifier]['afterAdd']($(lastAddedElement));
    }

    cmbSystemMessageBox('Element has been added successfully');
}

function cmbCloseModal() {
    $('#cmb-tinymce-popup').addClass('d-none');
    $('#cmb-save-form').addClass('d-none');
    $('#cmb-admin-modal').removeAttr('data-cmb-wrapper').removeAttr('data-cmb-id').hide().children('div').hide();
    $('#cmb-element-box').find('.cmb-tab-body').find('a').hide();
    $('#cmb-setting-box').html('');
}

function cmbColorPicker() {
    $('.cmb-input-type-color-picker').minicolors({
        format: 'rgb',
        inline: false,
        opacity: true,
        swatches: ['#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', 'rgba(0,0,255,0.5)'],
        change: function(value, opacity) {
            $(this).val(value);
        },
    });
}

function cmbCountingRearrange(){
    let id = false;
    if(cmbNonExistingIdArray.length>0){
        id = cmbNonExistingIdArray[0];
        delete cmbNonExistingIdArray[0];
        if(cmbNonExistingIdArray.length>0) {
            cmbNonExistingIdArray = cmbNumericSort(cmbNonExistingIdArray);
        }
    }
    return id;
}

function cmbDelayedAlert(item) {
    item.addClass('cmb-animated')//.show();
    window.setTimeout(function () {
        item.removeClass('cmb-animated');
        cmbWorkOnProcess = false;
    }, 700);
}

function cmbDynamicLayoutCaller(data, isLoading, isUpdate, parentWrapper, parentId, sectionName, elementType) {
    $.ajax({
        url: dynamicContentUrl,
        data: data,
        success: function(result){
            let html = result.html;
            let startingData = '';
            let startingJoiner = '';
            $.each(data, function (key, val) {
                startingData = startingData + startingJoiner + key + ':' + val;
                startingJoiner = '|';
            })
            if (!isUpdate) {
                let id = cmbCountingRearrange();
                id = id ? id : cmbCountedExistingElements;
                html = '<div data-cmb-wrapper="'+ sectionName +'" data-cmb-id="'+ id +'"  data-cmb-element-type="'+ elementType +'" class="' + sectionName + '" data-cmb-dynamic-values="' + startingData + '">'+result.html+'</div>';
                if(id==cmbCountedExistingElements){
                    cmbCountedExistingElements++;
                }
                $(html).appendTo($('.' + parentWrapper + '[data-cmb-id="'+ parentId +'"]'));
            }
            else{
                $('.' + parentWrapper + '[data-cmb-id="'+ parentId +'"]').attr('data-cmb-dynamic-values', startingData).html(html);
            }
            if(isLoading){
                $('#cmb-loading-queue').addClass('d-none');
            }
            cmbSystemMessageBox('Dynamic layout loaded successfully');
            cmbWorkOnProcess = false;
        },
        error: function (error) {
            if(isLoading){
                $('#cmb-loading-queue').addClass('d-none');
            }
            cmbSystemMessageBox('Failed to load Dynamic Layout');
            cmbWorkOnProcess = false;
        }
    });
}

function cmbElementBoxResize(){
    let allTabs = $('#cmb-element-box').find('.cmb-tab-body').children('div');
    let CountActiveTabs = allTabs.length;
    let currentActivatedTab = false;
    allTabs.each(function () {
        let childAnchor = $(this).children('a');
        let hasActiveAnchor = false;
        for(var x=0; x < childAnchor.length; x++) {
            if(childAnchor.eq(x).css('display') != 'none'){
                hasActiveAnchor = true;
                break;
            }
        }
        if(!hasActiveAnchor){
            CountActiveTabs = CountActiveTabs - 1;
            if(!$(this).hasClass('d-none')){
                $(this).addClass('d-none');
            }
            $(this).removeClass('cmb-active').parent().siblings('.cmb-tab-nav').find('li').eq($(this).index()).addClass('d-none').removeClass('cmb-active');
        }
        else{
            if(currentActivatedTab==false){
                $(this).removeClass('d-none').removeClass('cmb-active').addClass('cmb-active').parent().siblings('.cmb-tab-nav').find('li').eq($(this).index()).removeClass('d-none').removeClass('cmb-active').addClass('cmb-active');
                currentActivatedTab = true;
            }
            else{
                $(this).removeClass('d-none').removeClass('cmb-active').parent().siblings('.cmb-tab-nav').find('li').eq($(this).index()).removeClass('d-none').removeClass('cmb-active');
            }
        }
    });
    return CountActiveTabs;
}

function cmbGetOptions(tabs,option,elementName){
    tabs = tabs.split('|');
    let optionTab = {};
    let firstTab = true;
    $.each(tabs,function (key, val) {
        if(firstTab){
            if(cmbGeneralSettings.options[val]){
                optionTab = cmbGeneralSettings.options[val];
            }
            else{
                optionTab = cmbAllElements[elementName]['settings'][val];
            }
            firstTab = false;
        }
        else{
            optionTab = optionTab[val];
        }
    });
    optionTab = eval(optionTab);
    return optionTab.options[0][option];
}

function cmbGetStyleValue(optionValue,targetDom,section,childItem, pseudo, childPseudo){
    let passingValue = '';
    let parentItem = optionValue.parentItem ? optionValue.parentItem + ' ' : '';
    if(!optionValue.param || Object.keys(optionValue.param).length === 1){
        let cssPropName = parentItem + '.' + section + '[data-cmb-id="'+targetDom.attr('data-cmb-id')+'"]' + (pseudo ? pseudo : '') + (childItem ? ' '+ childItem + (childPseudo ? childPseudo : '') : '');
        if(cmbStyleObject[cssPropName] && cmbStyleObject[cssPropName][optionValue.styleName]){
            passingValue =cmbStyleObject[cssPropName][optionValue.styleName];
            if(optionValue.styleName==='background-image'){
                passingValue = passingValue.replace('url("','').replace('")','');
            }
            else if(optionValue.styleName==='content'){
                passingValue = passingValue.replace('"').replace('"','');
            }
        }
    }
    else if(Object.keys(optionValue.param).length>1){
        passingValue = {};
        $.each(optionValue.param,function(paramKey, paramVal){
            paramKey = Array.isArray(optionValue.param) ? paramVal : paramKey;
            let currentStyleName = optionValue.styleName.indexOf('*') >=0 ? optionValue.styleName.replace('*',paramKey) : (optionValue.styleName+'-'+paramKey);
            let cssPropName = parentItem + '.' + section + '[data-cmb-id="'+targetDom.attr('data-cmb-id')+'"]' + (pseudo ? pseudo : '') + (childItem ? ' '+ childItem + (childPseudo ? childPseudo : '') : '');
            if(cmbStyleObject[cssPropName]){
                if(cmbStyleObject[cssPropName][currentStyleName]){
                    let subPassingValue = cmbStyleObject[cssPropName][currentStyleName];
                    if(optionValue.styleName==='background-image'){
                        subPassingValue = subPassingValue.replace('url("','').replace('")','');
                    }
                    passingValue[paramKey] = subPassingValue;
                }
            }
        });
    }
    return passingValue;
}

function cmbStylePseudoLoop(options,targetDom,section,pseudoValue){
    let passingValue = '';
    let next = true;
    if (options.childItem){
        if (Array.isArray(options.childItem)){
            $.each(options.childItem, function (childItemKey, childItemValue) {
                if (Array.isArray(options.childPseudo)){
                    $.each(options.childPseudo, function (childPseudoKey, childPseudoValue) {
                        if(next){
                            let temPassingValue = cmbGetStyleValue(options,targetDom,section,childItemValue, pseudoValue, childPseudoValue);
                            if(temPassingValue==='' || (passingValue!=='' && passingValue!==temPassingValue)){
                                next = false;
                                passingValue= '';
                            }
                            else{
                                passingValue = temPassingValue;
                            }
                        }
                    });
                }
                else {
                    if(next){
                        let temPassingValue = cmbGetStyleValue(options,targetDom,section,childItemValue, pseudoValue, options.childPseudo);
                        if(temPassingValue==='' || (passingValue!=='' && passingValue!==temPassingValue)){
                            next = false;
                            passingValue= '';
                        }
                        else{
                            passingValue = temPassingValue;
                        }
                        console.log(temPassingValue, next);
                    }
                }
            })
        }
        else {
            if (Array.isArray(options.childPseudo)){
                $.each(options.childPseudo, function (childPseudoKey, childPseudoValue) {
                    if(next){
                        let temPassingValue = cmbGetStyleValue(options,targetDom,section,options.childItem, pseudoValue, childPseudoValue);
                        if(temPassingValue==='' || (passingValue!=='' && passingValue!==temPassingValue)){
                            next = false;
                            passingValue= '';
                        }
                        else{
                            passingValue = temPassingValue;
                        }
                    }
                });
            }
            else {
                if(next){
                    let temPassingValue = cmbGetStyleValue(options,targetDom,section,options.childItem, pseudoValue, options.childPseudo);
                    if(temPassingValue==='' || (passingValue!=='' && passingValue!==temPassingValue)){
                        next = false;
                        passingValue= '';
                    }
                    else{
                        passingValue = temPassingValue;
                    }
                }
            }
        }
    }
    else {
        if(next){
            let temPassingValue = cmbGetStyleValue(options,targetDom,section,false, pseudoValue, false);
            if(temPassingValue==='' || (passingValue!=='' && passingValue!==temPassingValue)){
                next = false;
                passingValue= '';
            }
            else{
                passingValue = temPassingValue;
            }
        }
    }
    return passingValue;
}

function cmbGeneralSettingBuilder(settings, item, tabBodyClass, currentTab, sectionTitle) {
    let titleText = '';
    let section = $('#cmb-admin-modal').attr('data-cmb-wrapper');
    let sectionId = $('#cmb-admin-modal').attr('data-cmb-id');
    if (sectionTitle) {
        titleText = '<h3>' + sectionTitle + (settings.title ? ' - ' + settings.title : '') +  '<button class="cmb-close-modal btn-sm btn-info"><strong>x</strong></button>' + '</h3>'
    } else {
        titleText = '<h4>' + (settings.title ? settings.title : '') + '</h4>'
    }
    item.append(titleText);

    if (Array.isArray(settings.options) && settings.options[0]) {
        if (settings.resolutionMessage) {
            let hintText = '<div class="alert alert-success text-center" role="alert">' + cmbDisplay.map(function (value, index) {
                return value[0] + ': ' + value[1];
            }).join(' , ') + '</div>'
            item.append(hintText);
        }
        let inputHtml = '<div class="row align-item-center">';
        let targetDom = $('.' + section + '[data-cmb-id="' + sectionId + '"]');
        let availableOptions = cmbTargetSettingsSelected(currentTab,section,settings.options[0]);
        let hasDynamicInput = false;
        $.each(settings.options[0], function (optionName, optionValue) {
            if(optionValue.type === 'responsive-class'){
                if(availableOptions===true || availableOptions.indexOf(optionName) >= 0){
                    inputHtml = inputHtml + '<div class="col-md-12 mb-3"><div class="cmb-grid-box"><div class="cmb-grid-title">' + optionValue.title + '</div>';
                    let responsiveOptions = cmbClassInputs[optionValue.optionName];
                    let resolutionKeys = Object.keys(responsiveOptions);
                    resolutionKeys = resolutionKeys.filter(x => cmbDisplaySizes.includes(x));
                    let availableOptions = cmbTargetOptionsSelected(currentTab,section,optionName);
                    $.each(resolutionKeys, function (validResolutionKey, validResolutionValue) {
                        if(responsiveOptions[validResolutionValue] && (availableOptions===true || (Array.isArray(availableOptions[validResolutionValue]) && availableOptions[validResolutionValue].length > 0)))
                            inputHtml = inputHtml + '<div class="cmb-grid-inner"><div class="cmb-resolution-title">' + validResolutionValue + '</div><div class="cmb-combined-input-wrapper" data-cmb-type="'+ optionValue.type +'" data-cmb-class="' + tabBodyClass + '" data-cmb-option="' + optionValue.optionName + '" data-cmb-resolution="' + validResolutionValue + '"><select class="cmb-select cmb-option-box-input">';
                        inputHtml = inputHtml + '<option value="">Select</option>';
                        $.each(responsiveOptions[validResolutionValue], function (styleKey, styleName) {
                            if(availableOptions===true || availableOptions[validResolutionValue].indexOf(styleKey) >= 0){
                                let isSelected = targetDom.hasClass(styleKey) ? ' selected' : '';
                                inputHtml = inputHtml + '<option value="' + styleKey + '"' + isSelected +'>' + styleName + '</option>';
                            }
                        })
                        inputHtml = inputHtml + '</select></div></div>';
                    })
                    inputHtml = inputHtml + '</div></div>';
                }
            }
            else if(optionValue.type === 'input'){
                inputHtml = inputHtml + '<div class="col-12"><div class="row cmb-option-box-group">';
                let tabArray = currentTab ? currentTab.join('|') : '';

                let dataType = {
                    'data-cmb-class' : tabBodyClass,
                    'data-cmb-option-name': optionName,
                    'data-cmb-tabs': tabArray,
                    'data-cmb-child-item': optionValue.childItem ? optionValue.childItem : ''
                }
                inputHtml = inputHtml + '<div class="col-md-7 col-sm-5">' + (optionValue.title ? '<h5>'+ optionValue.title +'</h5>' : '' ) + (optionValue.subTitle ? '<span class="cmb-option-subtitle">'+optionValue.subTitle+'</span>' : '') +'</div>';
                inputHtml = inputHtml + '<div class="col-md-5 col-sm-7">'
                if(optionValue.attribute==='style'){
                    // dataType['data-cmb-style'] =  optionValue.styleName;
                    let passingValue = '';
                    let next = true;
                    if (Array.isArray(optionValue.pseudo)){
                        $.each(optionValue.pseudo, function (pseudoKey, pseudoValue) {
                            if(next){
                                let temPassingValue = cmbStylePseudoLoop(optionValue,targetDom,section,pseudoValue);
                                if(temPassingValue==='' || (passingValue!=='' && passingValue!==temPassingValue)){
                                    next = false;
                                    passingValue= '';
                                }
                                else{
                                    passingValue = temPassingValue;
                                }
                            }
                        });
                    }
                    else {
                        let temPassingValue = cmbStylePseudoLoop(optionValue,targetDom,section,optionValue.pseudo);
                        if(temPassingValue==='' || (passingValue!=='' && passingValue!==temPassingValue)){
                            next = false;
                            passingValue= '';
                        }
                        else{
                            passingValue = temPassingValue;
                        }
                    }
                    inputHtml = inputHtml + cmbAllInputType[optionValue.inputType].output(optionValue, dataType, passingValue);
                }
                else if(optionValue.attribute==='class'){
                    let finalTargetDom = !optionValue.childItem ? targetDom : targetDom.find(optionValue.childItem);
                    inputHtml = inputHtml + cmbAllInputType['text'].output(optionValue, dataType, (finalTargetDom.attr('data-cmb-classes') ? finalTargetDom.attr('data-cmb-classes') : ''))
                }
                else if(optionValue.attribute==='id'){
                    let finalTargetDom = !optionValue.childItem ? targetDom : targetDom.find(optionValue.childItem);
                    inputHtml = inputHtml + cmbAllInputType['text'].output(optionValue, dataType, (finalTargetDom.attr('id') ? finalTargetDom.attr('id') : ''))
                }
                else if(optionValue.attribute==='custom-class'){
                    let finalTargetDom = !optionValue.childItem ? targetDom : targetDom.find(optionValue.childItem);
                    let isChecked = false;
                    let finalValue = '';
                    if(optionValue.defaultValue){
                        finalValue = finalTargetDom.hasClass(optionValue.defaultValue);
                    }
                    else if(optionValue.fieldParam){
                        let fieldParamData = typeof optionValue.fieldParam === 'function' ? optionValue.fieldParam() : optionValue.fieldParam
                        $.each(fieldParamData, function (fieldParamKey, fieldParamVal) {
                            if(finalTargetDom.hasClass(fieldParamKey)){
                                finalValue = fieldParamKey;
                            }
                        })
                    }
                    inputHtml = inputHtml + cmbAllInputType[optionValue.inputType].output(optionValue, dataType, finalValue);
                }
                else if(optionValue.attribute==='prop'){
                    let finalTargetDom = !optionValue.childItem ? targetDom : targetDom.find(optionValue.childItem);
                    inputHtml = inputHtml + cmbAllInputType[optionValue.inputType].output(optionValue, dataType, finalTargetDom.attr(optionValue.tagProp));
                }
                else if(optionValue.attribute==='dynamic-layout'){
                    dataType['data-cmb-dynamic-field-name'] = optionValue.relatedDynamicField;
                    let preDynamicData = targetDom.attr('data-cmb-dynamic-values').split('|');
                    let dynamicData = {}
                    if(preDynamicData.length > 0){
                        for(var x = 0; x < preDynamicData.length; x++)
                            if(preDynamicData[x]){
                                preDynamicData[x] = preDynamicData[x].split(':');
                                if(preDynamicData[x].length===2){
                                    dynamicData[preDynamicData[x][0]] = preDynamicData[x][1];
                                }
                            }
                    }
                    let passingValue = dynamicData[optionValue.relatedDynamicField] ? dynamicData[optionValue.relatedDynamicField] : cmbAllElements[section]['dynamicOptions'][optionValue.relatedDynamicField];
                    inputHtml = inputHtml + cmbAllInputType[optionValue.inputType].output(optionValue, dataType, passingValue)
                    hasDynamicInput = true;
                }
                inputHtml = inputHtml + '</div></div></div>';
            }
        });

        inputHtml = inputHtml + '</div>';

        inputHtml = inputHtml + '<div class="row">' +
            '<div class="col text-right mt-3">' + (hasDynamicInput ? '<a href="javascript:;" class="cmb-option-update-dynamic-setting cmb-admin-button btn-info mr-2" data-cmb-dynamic-section-name="'+cmbAllElements[section]['dynamicOptions']['name']+'">Save dynamic Data</a>' : '' ) + '<a href="javascript:;" class="cmb-option-setting-close cmb-admin-button">Close</a></div> ' +
            '</div>';
        item.append(inputHtml);
    }
    else if(typeof settings.options === 'object') {
        let cmbTabList = Object.keys(settings.options);
        let tabStart = true;

        item.append('<div class="cmb-tab-wrapper">' +
            '<ul class="cmb-tab-nav"></ul>' +
            '<div class="cmb-tab-body"></div>' +
            '</div>');

        $.each(cmbTabList, function (index, value) {
            let loopTab = !currentTab ? [value] : currentTab.concat([value]);
            if (section && cmbNoTargetTabDetected(loopTab, section)) {
                let currentItem = settings.options[value];
                let currentTabBodyClass = tabBodyClass + '-' + value.replace(' ', '-');
                let tabNavItem = '<li class="cmb-tab-nav-item' + (tabStart ? ' cmb-active' : '') + '"><a href="javascript:;">' + value + '</a></li>';
                let tabBodyItem = '<div class="' + currentTabBodyClass + (tabStart ? ' cmb-active' : '') + '"></div>';

                item.children('.cmb-tab-wrapper').children('.cmb-tab-nav').append(tabNavItem);
                item.children('.cmb-tab-wrapper').children('.cmb-tab-body').append(tabBodyItem);
                tabStart = false;

                if (currentItem.options) {
                    cmbGeneralSettingBuilder(currentItem, $('.' + currentTabBodyClass), currentTabBodyClass, loopTab);
                }
            }
        });

        if (item.children('.cmb-tab-wrapper').children('ul').children('li').length <= 0) {
            item.children('.cmb-tab-wrapper').remove();
        }
    }
}

function cmbGetStyle(cssCode) {
    let output = {};
    if (!cssCode) {
        return output;
    }
    cssCode = cssCode.split('}');
    if (cssCode.length > 0) {
        $.each(cssCode, function (index, value) {
            value = value.split('{');
            if (value.length == 2) {
                value[1] = value[1].split(';');
                if (value[1].length > 0) {
                    $.each(value[1], function (subIndex, subValue) {
                        subValue = subValue.split(':');
                        if (subValue.length == 2) {
                            if (!output[value[0]]) {
                                output[value[0]] = {};
                            }
                            output[value[0]][subValue[0]] = subValue[1];
                        }
                    });
                }
            }
        })
    }
    return output;
}

function cmbGetStyleWithClass(className, properties) {
    if (cmbStyleObject[className]) {
        if (properties) {
            if (cmbStyleObject[className][properties]) {
                return cmbStyleObject[className][properties];
            }
            return '';
        } else {
            return cmbStyleObject[className];
        }
    }
    return '';
}

function cmbMultiformValueCreate(parentDom){
    let finalValue = '';
    let separator = '';
    parentDom.find('.cmb-visible-single-input').each(function () {
        if($(this).val() || $.isNumeric($(this).val())){
            finalValue = finalValue + separator + $(this).val();
            separator = '|';
        }
    });
    parentDom.children('.cmb-hidden-main-input').val(finalValue);
    parentDom.children('.cmb-option-box-input').trigger('change');
}

function cmbNonExistingIds(){
    let existingIdArray = [];
    $('[class*="cmb_"]').each(function () {
        let dataCmbId = +$(this).attr('data-cmb-id');
        if(dataCmbId){
            existingIdArray.push(dataCmbId);
        }
    });
    existingIdArray = cmbNumericSort(existingIdArray);
    let current = 1;
    for(var i=0; i < existingIdArray.length; i++){
        if(current < existingIdArray[i]-1){
            let insertingArray = cmbRangeArray(current, existingIdArray[i]-1);
            $.each(insertingArray,function (insArrKey, insArrVal) {
                cmbNonExistingIdArray.push(insArrVal);
            });
        }
        else if(current === existingIdArray[i]-1){
            cmbNonExistingIdArray.push(current);
        }
        current = existingIdArray[i]+1;
    }
    if(existingIdArray.length>0){
        cmbCountedExistingElements = existingIdArray[existingIdArray.length-1]+1;
    }
    else{
        cmbCountedExistingElements = 1;
    }
}

function cmbNoTargetTabDetected(item, section) { // Working perfectly
    let result = true;
    if (!cmbAllElements[section]['avoidableTabs']) {
        return true;
    }
    section = cmbAllElements[section]['avoidableTabs'];
    if (item.length === 1) {
        return section.indexOf(item[0]) < 0;
    }

    for (let y = 0; y < section.length; y++) {
        let currentSection = section[y];
        if (typeof (currentSection) === 'object') {
            for (let x = 0; x < item.length; x++) {
                if (typeof (currentSection) === 'string') {
                    result = item[x] !== currentSection;
                    break;
                } else if (Array.isArray(currentSection)) {
                    let currentArrayItem = currentSection.indexOf(item[x]);
                    if (currentArrayItem >= 0) {
                        result = false;
                        break;
                    } else {
                        currentArrayItem = -1;
                        for (let z = 0; z < currentSection.length; z++) {
                            if (currentSection[z][item[x]]) {
                                currentArrayItem = z;
                                break;
                            }
                        }
                        if (currentArrayItem >= 0) {
                            currentSection = currentSection[currentArrayItem][item[x]];
                        } else {
                            break;
                        }
                    }
                } else if (currentSection[item[x]]) {
                    currentSection = currentSection[item[x]];
                } else {
                    break;
                }
            }
        }

        if (!result) {
            break;
        }
    }
    return result;
}

function cmbNumericSort(arrayItem) {
    return arrayItem.slice().sort((a,b)=>a-b);
}

function cmbPrettierFormat(html) {
    if (prettier == null || prettierPlugins == null) {
        return html;
    }
    return prettier.format(html, {
        parser: "html",
        plugins: prettierPlugins
    });
}

function cmbRangeArray(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
}

function cmbRefactorIdentifier(lastAddedElement,copyStyle) {
    lastAddedElement.find("[class*='cmb_']").each(function () {
        let cmbName = ($(this).attr('class').match(/(^|\s)(cmb\_[^\s]*)/) || [, , ''])[2];
        if (cmbAllElements[cmbName]) {
            $(this).attr('data-cmb-wrapper', cmbName).attr('data-cmb-element-type', cmbAllElements[cmbName]['elementType']);
            let id = cmbCountingRearrange();
            id = id ? id : cmbCountedExistingElements;

            if(copyStyle){
                let thisSpecific = $(this);
                $.each(cmbStyleObject,function (key,val) {
                    if (key.startsWith('.' + cmbName + '[data-cmb-id="'+ thisSpecific.attr('data-cmb-id')+'"]')){
                        cmbStyleObject[key.replace(('.' + cmbName + '[data-cmb-id="'+ thisSpecific.attr('data-cmb-id')+'"]'), ('.' + cmbName + '[data-cmb-id="'+ id +'"]'))]=val;
                    }
                })
            }

            $(this).attr('data-cmb-id', id);
            if(id==cmbCountedExistingElements){
                cmbCountedExistingElements++;
            }
        }
    })
}

function cmbResetCmbOption() {
    $('#cmb-option-box').find('.cmb-custom-action').remove();
    $('#cmb-option-box').prependTo($('#cmb-admin-wrapper')).addClass('d-none').find('a').hide();
}

function cmbSaveStyle(style,htmlText) {
    $.ajax({
        url: savePageUrl,
        type: 'put',
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'),
            style: style,
            body: htmlText
        },
        success: function (response) {
            $('#cmb-loading-queue').addClass('d-none');
            cmbSystemMessageBox(response.message);
            $.each(cmbAllElements, function (key, val) {
                if(val['afterSave']){
                    val['afterSave']();
                }
            });
            cmbSavingOnProcess = false;
        },
        error: function (error) {
            $('#cmb-loading-queue').addClass('d-none');
            cmbSystemMessageBox(error.responseJSON.message);
            $.each(cmbAllElements, function (key, val) {
                if(val['afterSave']){
                    val['afterSave']();
                }
            });
            cmbSavingOnProcess = false;
        }
    });
}

function cmbStyleToText() {
    let output = '';
    $.each(cmbStyleObject, function (name, styles) {
        output = output + name + '{';
        $.each(styles, function (properties, value) {
            output = output + properties + ':' + value + ';';
        });
        output = output + '}';
    });

    return output;
}

function cmbSystemMessageBox(msg){
    $('#cmb-status-popup').removeClass('cmb-status-appearance');
    if(!msg){
        msg ='System is under process';
    }
    $('#cmb-status-popup').removeClass('cmb-status-appearance');
    window.setTimeout(function () {
        $('#cmb-status-popup').text(msg).addClass('cmb-status-appearance');
        window.setTimeout(function () {
            $('#cmb-status-popup').removeClass('cmb-status-appearance');
        }, 4000);
    }, 30);
}

function cmbTargetOptionsSelected(tabArray, section, settingName){
    let validation = true;
    let onlyItem = true;
    let tabSettingOptions = cmbAllElements[section]['tabSettingOptionOnly'];
    if(!tabSettingOptions){
        tabSettingOptions = cmbAllElements[section]['avoidableTabSettingOptions'];
        onlyItem = false;
    }
    $.each(tabArray, function (key, value) {
        if(validation){
            if(tabSettingOptions && tabSettingOptions[value]){
                tabSettingOptions = tabSettingOptions[value];
            }
            else{
                validation = false;
            }
        }
    });
    if(!validation || !tabSettingOptions[settingName]){
        return true;
    }
    tabSettingOptions = tabSettingOptions[settingName];
    let AvailableOptions = {};
    AvailableOptions = {};

    $.each(cmbDisplaySizes, function(key, value){
        AvailableOptions[value] = [];
        let currentClasses = [];
        let availableClasses = Object.keys(cmbClassInputs[settingName][value]);
        $.each(tabSettingOptions, function(optionKey, optionName){
            if(cmbClassInputs[settingName][value]){
                currentClasses.push(optionName.replace(cmbDisplaySeparator, cmbDisplay[key][2]));
            }
        });
        if(onlyItem){
            AvailableOptions[value] = availableClasses.filter(x => currentClasses.includes(x));
        }
        else{
            AvailableOptions[value] = availableClasses.filter(x => !currentClasses.includes(x));
        }
    });
    return AvailableOptions;
}

function cmbTargetSettingsSelected(tabArray, section, settings){
    let validation = true;
    let avoidableTabSettings = cmbAllElements[section]['avoidableTabSettings'];
    let availableSettings = Object.keys(settings);
    if(!avoidableTabSettings){
        return true;
    }
    $.each(tabArray, function (key,value) {
        if(validation){
            if(avoidableTabSettings[value]){
                avoidableTabSettings = avoidableTabSettings[value];
            }
            else{
                validation = false;
            }
        }
    });
    if(!validation){
        return true;
    }
    return availableSettings.filter(x => !avoidableTabSettings.includes(x));
}

function cmbWrapperLocation(dataWrapper,dataId) {
    return '.' + dataWrapper + '[data-cmb-id="' + dataId + '"]';
}

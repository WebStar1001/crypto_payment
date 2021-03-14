function cmbInitialization(){
    $('.cmb-dynamic-css-library').html(cmbStyleData);

    /*ARRAY BUILDING OF NON EXISTING IDs :: STARTS*/
    cmbNonExistingIds();


    /*BUILDING RESOLUTION CLASSES :: STARTS*/
    $.each(cmbClassTypes, function (index, value) {
        cmbClassInputs[index] = {};
        cmbClassInputs[index][cmbDisplay[0][0]] = {};
        cmbClassInputs[index][cmbDisplay[1][0]] = {};
        cmbClassInputs[index][cmbDisplay[2][0]] = {};
        cmbClassInputs[index][cmbDisplay[3][0]] = {};
        cmbClassInputs[index][cmbDisplay[4][0]] = {};

        $.each(value, function (key, name) {
            cmbClassInputs[index][cmbDisplay[0][0]][key.replace(cmbDisplaySeparator, cmbDisplay[0][2])] = name;
            cmbClassInputs[index][cmbDisplay[1][0]][key.replace(cmbDisplaySeparator, cmbDisplay[1][2])] = name;
            cmbClassInputs[index][cmbDisplay[2][0]][key.replace(cmbDisplaySeparator, cmbDisplay[2][2])] = name;
            cmbClassInputs[index][cmbDisplay[3][0]][key.replace(cmbDisplaySeparator, cmbDisplay[3][2])] = name;
            cmbClassInputs[index][cmbDisplay[4][0]][key.replace(cmbDisplaySeparator, cmbDisplay[4][2])] = name;
        });
    });


    /*HOVERABLE OPTION BOX :: STARTS*/
    $.each(cmbOptionBox, function (key, value) {
        cmbOptionBoxElements = cmbOptionBoxElements + '<a href="javascript:;" id="' + key + '" title="' + value.title + '" data-toggle="tooltip" data-placement="top" style="display:none" class="cmb-setting-icon">' + value.text + '</a>';
    })
    $('#cmb-admin-wrapper').prepend('<div class="d-none" style="position: fixed;" id="cmb-option-box">' + cmbOptionBoxElements + '<span id="cmb-element-title-icon"></span><span id="cmb-element-title"></span></div>');


    /*ELEMENT MODAL BUILDING :: STARTS*/
    $.each(cmbElementTabs, function (index, value) {
        let tabNavItem = '<li class="cmb-tab-nav-item' + (cmbElementTabStart ? ' cmb-active' : '') + '"><a href="javascript:;">' + value + '</a></li>';
        let tabBodyItem = '<div class="cmb-element-tab-item-' + index + (cmbElementTabStart ? ' cmb-active' : '') + '"></div>';

        $('#cmb-element-box > .cmb-tab-wrapper').children('.cmb-tab-nav').append(tabNavItem);
        $('#cmb-element-box > .cmb-tab-wrapper').children('.cmb-tab-body').append(tabBodyItem);
        cmbElementTabStart = false;
    });


    /*ELEMENT LOOP :: STARTS*/
    $.each(cmbAllElements, function (index, value) {


        /*CHILD ELEMENT BUILDING :: STARTS*/
        cmbAllElements[index]['allowedChildren'] = [];
        $.each(cmbAllElements, function (subIndex, subValue) {
            if (index != subIndex && subValue.allowedParent.indexOf(index) >= 0) {
                cmbAllElements[index]['allowedChildren'].push(subIndex);
            }
        });



        // cmbAllElements[index]['allParents'] = cmbBuildAllParents(value.allowedParent, [], index);


        /*AVOIDABLE OPTION BUILDING :: STARTS*/
        if (
            !Array.isArray(cmbAllElements[index]['allowedActionElement']) ||
            cmbAllElements[index]['allowedActionElement'].length <= 0
        ) {
            if (cmbAllElements[index]['allowedActionElement'] !== false) {
                cmbAllElements[index]['allowedActionElement'] = true;
            }

        } else {
            let cmbOptionBoxKeys = Object.keys(cmbOptionBox);
            cmbAllElements[index]['allowedActionElement'] = cmbAllElements[index]['allowedActionElement'].filter(x => cmbOptionBoxKeys.includes(x));
            if (cmbAllElements[index]['allowedActionElement'].length <= 0) {
                cmbAllElements[index]['allowedActionElement'] = false;
            } else if (cmbAllElements[index]['allowedActionElement'].length == cmbOptionBoxKeys.length) {
                cmbAllElements[index]['allowedActionElement'] = true;
            }
        }


        /*FIXED PARENT BUILDING :: STARTS*/
        if (value.allowedParent && value.allowedParent.length == 1) {
            cmbAllElements[index]['specificParent'] = value['allowedParent'][0]
        }


        /*DATA ID BUILDING :: STARTS*/
        $('.' + index).each(function () {
            $(this).attr('data-cmb-wrapper', index);
            let id = 0;
            if(!$(this).attr('data-cmb-id')){
                id = cmbCountingRearrange();
                id = id ? id : cmbCountedExistingElements;
                $(this).attr('data-cmb-id', id);
                if(id==cmbCountedExistingElements){
                    cmbCountedExistingElements++;
                }
            }
        })


        if (value.html || value.elementType === 'dynamic-layout' || value.htmlVariation) {


            /*INSERTABLE BUTTON CREATION :: STARTS*/
            if (!cmbAllElements[index]['avoidElementListing']) {
                let tabIdentifier = '.cmb-element-tab-item-' + value.elementTabName;
                /*if (value.elementTabName) {
                    tabIdentifier = tabIdentifier + value.elementTabName;
                } else {
                    tabIdentifier = tabIdentifier + 'section';
                }*/
                if(!value.htmlVariation){
                    $('#cmb-element-box').find(tabIdentifier).append('<a href="javascript:;" title="' + value.addButtonText + '" data-element-item-id="' + index + '" class="cmb-element-item" style="display: none" data-cmb-element-type="' + value.elementType + '">' + value.icon + '<span>' + value.addButtonText + '</span></a>');
                }
                else{
                    $.each(value.htmlVariation, function (variationKey, variationValue) {
                        $('#cmb-element-box').find(tabIdentifier).append('<a href="javascript:;" title="' + value.addButtonText + '" data-element-item-id="' + index + '" data-element-item-variation="' + variationKey + '" class="cmb-element-item" style="display: none" data-cmb-element-type="' + value.elementType + '">' + variationValue.icon + '<span>' + value.addButtonText + ' ' + variationValue.subtitle + '</span></a>');
                    })
                }
            }


            /*INSERTABLE BUTTON ACTION :: STARTS*/
            $(document).on('click', ('#cmb-element-box' + ' [data-element-item-id="'+ index +'"]') , function () {
                if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
                    cmbWorkOnProcess = true;
                    if (value.elementType !== 'dynamic-layout') {
                        let dataId = $('#cmb-admin-modal').attr('data-cmb-id');
                        let item = !dataId && cmbAllElements[index]['specificParent'] ? '.' + cmbAllElements[index]['specificParent'] : cmbWrapperLocation($('#cmb-admin-modal').attr('data-cmb-wrapper'), dataId);
                        let htmlData = value.htmlVariation ? value.htmlVariation[$(this).attr('data-element-item-variation')]['html'] : value.html;
                        cmbAddSection(item, htmlData, index, value.elementType,$('#cmb-admin-modal').attr('data-cmb-wrapper'));
                        cmbCloseModal();
                        cmbWorkOnProcess = false;
                    }
                    else {
                        cmbDynamicLayoutCaller(value.dynamicOptions,true, false, $('#cmb-admin-modal').attr('data-cmb-wrapper'), $('#cmb-admin-modal').attr('data-cmb-id'), index, value.elementType);
                        cmbCloseModal();
                        $('#cmb-loading-queue').removeClass('d-none');
                    }
                }
            });
        }


        /*ON HOVER OPTION BOX :: STARTS*/
        $(document).on('mouseover', ('.' + index), function () {
            if (!cmbWorkOnProcess && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
                let paddingLength = $(this).css('padding-top').replace('px','');
                if(Math.floor(paddingLength) < 22){
                    $(this).addClass('cmb-temporary-min-padding');
                }

                if (!$(this).find('#cmb-option-box').length) {
                    if (cmbMoveActivity || cmbGlobalActivity) {
                        $('#cmb-option-box').find('a').hide();
                    } else if (cmbAllElements[index]['allowedActionElement'] === true) {
                        $('#cmb-option-box').find('a').show();
                    } else if (Array.isArray(cmbAllElements[index]['allowedActionElement'])) {
                        $('#cmb-option-box').find('a').hide();
                        $.each(cmbAllElements[index]['allowedActionElement'], function (key, val) {
                            $('#' + val).show();
                        })
                    } else {
                        $('#cmb-option-box').find('a').hide();
                    }
                    if(cmbAllElements[index]['allowedParent'].indexOf('cmb-content-wrapper') >= 0){
                        $('#cmb-option-move').hide();
                    }
                    if(cmbAllElements[index]['elementType']==='dynamic-layout'){
                        $('#cmb-option-add').hide();
                    }
                    if(cmbAllElements[index]['hideActionSymbol']){
                        $('#cmb-element-title-icon').hide();
                        $('#cmb-element-title').hide();
                    }
                    else{
                        $('#cmb-element-title-icon').html(cmbAllElements[index]['icon']).attr('title', cmbAllElements[index]['title']).show();
                        $('#cmb-element-title').html(cmbAllElements[index]['title']).attr('title', cmbAllElements[index]['title']).show();
                    }

                    if($('#cmb-option-box').find('.cmb-custom-action'.length > 0)){
                        $('#cmb-option-box').find('.cmb-custom-action').remove();
                    }
                    if(cmbAllElements[index]['customAction']){
                        $.each(cmbAllElements[index]['customAction'], function (customKey, customVal) {
                            $('#cmb-element-title-icon').before('<a href="javascript:;" data-action="' + customKey + '" title="' + customVal.title + '" data-toggle="tooltip" data-placement="top" class="cmb-setting-icon cmb-custom-action">' + customVal.text + '</a>')
                        })
                    }

                    let cssValue = {};
                    let topOffset = value.outsideOptionBox ? -22 : 0 ;
                    cssValue['top']= $(this).offset().top - $(document).scrollTop() < 0 ? 0 : $(this).offset().top - $(document).scrollTop() + topOffset;
                    $('#cmb-option-box').prependTo($(this)).removeClass('d-none');
                    if ($(this).offset().left + $(this).outerWidth() - $('#cmb-option-box').outerWidth() < 0) {
                        cssValue['right'] = ($('html').outerWidth() - $(this).offset().left - $('#cmb-option-box').outerWidth());
                    }
                    else {
                        cssValue['right'] = ($('html').outerWidth() - $(this).offset().left - $(this).outerWidth());
                    }
                    $('#cmb-option-box').css(cssValue);
                }
            }
        });

        /*HOVER OUT OPTION BOX :: STARTS*/
        $(document).on('mouseleave', ('.' + index), function () {
            $(this).removeClass('cmb-temporary-min-padding');
            if(!cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated){
                cmbResetCmbOption();
            }
        });



        //onLoad function called
        if(value['onLoad']){
            value['onLoad']();
        }
    });


    cmbStyleObject = cmbGetStyle(cmbStyleData);


    /* MAKE BUILDER LIVE :: STARTS*/
    cmbWorkOnProcess = false;
}


/* READING CSS FILE AND INITIALIZING TO STYLE TAG:: STARTS*/
$.ajax({
    url: pageCssPath,
    dataType: 'text',
    type: 'get',
    success: function(result){
        cmbStyleData = result;
        cmbInitialization();
    },
    error: function (error){
        cmbInitialization();
    }
});

/*RIGHT MENU AND KEY DISABLE EVENT*/
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(e.code === '123') {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.code === 'I'.charCodeAt(0).toString()) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.code === 'C'.charCodeAt(0).toString()) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.code === 'J'.charCodeAt(0).toString()) {
        return false;
    }
    if(e.ctrlKey && e.code === 'U'.charCodeAt(0).toString()) {
        return false;
    }
}



/*DOCUMENT EVENT*/


/*click event*/
$(document).on('click', '#cmb-content-wrapper a', function(e){
    e.preventDefault();
});

$(document).on('click', ('#cmb-option-prev'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let thisItem = $('#cmb-option-box').parent();
        if (cmbActionValidation(thisItem.attr('data-cmb-wrapper'), 'cmb-option-prev')) {
            let prevItem = thisItem.prev();
            if(cmbAllElements[thisItem.attr('data-cmb-wrapper')]['beforePrev']){
                cmbAllElements[thisItem.attr('data-cmb-wrapper')]['beforePrev'](thisItem, (thisItem.index()-1));
            }
            if (prevItem.length == 1) {
                // thisItem.hide();
                prevItem.before(thisItem);
                cmbDelayedAlert(thisItem);
                cmbResetCmbOption();

                if(cmbAllElements[thisItem.attr('data-cmb-wrapper')]['afterPrev']){
                    cmbAllElements[thisItem.attr('data-cmb-wrapper')]['afterPrev'](thisItem, (thisItem.index()+1));
                }

                cmbSystemMessageBox('Item moved 1 step back');
            }
        }
        cmbWorkOnProcess = false;
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', ('#cmb-option-next'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let thisItem = $('#cmb-option-box').parent();
        if (cmbActionValidation(thisItem.attr('data-cmb-wrapper'), 'cmb-option-next')) {
            let nextItem = thisItem.next();
            if(cmbAllElements[thisItem.attr('data-cmb-wrapper')]['beforeNext']){
                cmbAllElements[thisItem.attr('data-cmb-wrapper')]['beforeNext'](thisItem,(thisItem.index()+1));
            }
            if (nextItem.length == 1) {
                // thisItem.hide();
                nextItem.after(thisItem);
                cmbDelayedAlert(thisItem);
                cmbResetCmbOption();

                if(cmbAllElements[thisItem.attr('data-cmb-wrapper')]['afterNext']){
                    cmbAllElements[thisItem.attr('data-cmb-wrapper')]['afterNext'](thisItem,(thisItem.index()-1));
                }

                cmbSystemMessageBox('cmb-status-appearance');
            }
        }
        cmbWorkOnProcess = false;
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', '#cmb-option-settings', function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let thisItem = $('#cmb-option-box').parent();
        if (cmbActionValidation(thisItem.attr('data-cmb-wrapper'), 'cmb-option-settings')) {
            let sectionTitle = cmbAllElements[thisItem.attr('data-cmb-wrapper')].title;
            let cmbTemporarySettingObject = JSON.parse(JSON.stringify(cmbGeneralSettings));
            if(thisItem.attr('data-cmb-element-type')==='dynamic-layout'){
                $.each(cmbTemporarySettingObject.options,function (key,val) {
                    if(key!=='general'){
                        delete cmbTemporarySettingObject.options[key];
                    }
                })
            }
            if(cmbAllElements[thisItem.attr('data-cmb-wrapper')]['settings']){
                $.each(cmbAllElements[thisItem.attr('data-cmb-wrapper')]['settings'], function(key, val){
                    if(!cmbTemporarySettingObject.options[key]){
                        cmbTemporarySettingObject.options[key] = val;
                    }
                })
            }
            $('#cmb-admin-modal').attr('data-cmb-wrapper', thisItem.attr('data-cmb-wrapper')).attr('data-cmb-id', thisItem.attr('data-cmb-id')).attr('data-cmb-element-type', thisItem.attr('data-cmb-element-type'));
            cmbGeneralSettingBuilder(cmbTemporarySettingObject, $('#cmb-setting-box'), 'cmb-settings-tab-item', false, sectionTitle);

            $('#cmb-setting-box').show();
            $('#cmb-admin-modal').show();
        }
        cmbWorkOnProcess = false;
        $('.cmb-input-type-color-picker').destroy;
        cmbColorPicker();
        $('.cmb-option-box-img').attr('src', function () {
            return $(this).siblings('.cmb-input-type-image').val();
        });
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', ('#cmb-option-add'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let thisItem = $('#cmb-option-box').parent();
        if (cmbActionValidation(thisItem.attr('data-cmb-wrapper'), 'cmb-option-add')) {
            let data = thisItem.attr('data-cmb-id');
            if (cmbAllElements[thisItem.attr('data-cmb-wrapper')]['allowedChildren'].length === 1 && !cmbAllElements[cmbAllElements[thisItem.attr('data-cmb-wrapper')]['allowedChildren'][0]]['htmlVariation']) {
                let htmlContent = cmbAllElements[cmbAllElements[thisItem.attr('data-cmb-wrapper')]['allowedChildren'][0]]['html'];
                cmbAddSection(cmbWrapperLocation(thisItem.attr('data-cmb-wrapper'),data), htmlContent, cmbAllElements[thisItem.attr('data-cmb-wrapper')]['allowedChildren'][0], thisItem.attr('data-cmb-element-type'),thisItem.attr('data-cmb-wrapper'));
            } else {
                $('#cmb-admin-modal').attr('data-cmb-wrapper', thisItem.attr('data-cmb-wrapper')).attr('data-cmb-id', thisItem.attr('data-cmb-id'));
                $.each(cmbAllElements[thisItem.attr('data-cmb-wrapper')]['allowedChildren'], function (index, value) {
                    $('#cmb-element-box' + ' [data-element-item-id="'+ value +'"]').show();
                });
                let CountActiveTabs = cmbElementBoxResize();
                if(CountActiveTabs > 0){
                    $('#cmb-element-box').show();
                    $('#cmb-admin-modal').show();
                }
            }
        }

        cmbWorkOnProcess = false;
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', ('#cmb-section-add-button'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        $.each(cmbAllElements, function (index, value) {
            if (value.allowedParent.indexOf('cmb-content-wrapper') >= 0) {
                $('#cmb-element-box' + ' [data-element-item-id="'+ index +'"]').show();
            }
        });
        let CountActiveTabs = cmbElementBoxResize();
        if (CountActiveTabs > 0) {
            $('#cmb-element-box').show();
            $('#cmb-admin-modal').show();
        }
        cmbWorkOnProcess = false;
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', ('#cmb-option-copy'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let coreItem = $('#cmb-option-box').parent();
        if (cmbActionValidation(coreItem.attr('data-cmb-wrapper'), 'cmb-option-copy')) {
            if(cmbAllElements[coreItem.attr('data-cmb-wrapper')]['beforeClone']){
                cmbAllElements[coreItem.attr('data-cmb-wrapper')]['beforeClone'](coreItem);
            }
            let thisItem = coreItem.get(0).outerHTML;
            let id = cmbCountingRearrange();
            id = id ? id : cmbCountedExistingElements;
            $(thisItem).insertAfter(coreItem).attr('data-cmb-id', id).children().eq(0).remove();
            cmbDelayedAlert(coreItem.next());
            if(id==cmbCountedExistingElements){
                cmbCountedExistingElements++;
            }
            cmbRefactorIdentifier(coreItem.next(), true);
            $.each(cmbStyleObject, function (key, val) {
                // if (key.startsWith('.' + coreItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+coreItem.attr('data-cmb-id')+'"]')){
                if (key.includes('.' + coreItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+coreItem.attr('data-cmb-id')+'"]')){
                    cmbStyleObject[key.replace(('.' + coreItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+ coreItem.attr('data-cmb-id')+'"]'), ('.' + coreItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+ coreItem.next().attr('data-cmb-id') +'"]'))]=val;
                }
            })
            cmbStyleData = cmbStyleToText();
            $('.cmb-dynamic-css-library').html(cmbStyleData);

            cmbResetCmbOption();

            if(cmbAllElements[coreItem.attr('data-cmb-wrapper')]['afterClone']){
                cmbAllElements[coreItem.attr('data-cmb-wrapper')]['afterClone'](coreItem.next());
            }

            cmbSystemMessageBox('Item has been duplicated successfully');
        } else {
            cmbWorkOnProcess = false;
        }
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', ('#cmb-option-move'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        cmbGlobalActivity = true;
        let coreItem = $('#cmb-option-box').parent();
        if (cmbActionValidation(coreItem.attr('data-cmb-wrapper'), 'cmb-option-move')) {
            $('#cmb-admin-modal').attr('data-cmb-wrapper', coreItem.attr('data-cmb-wrapper')).attr('data-cmb-id', coreItem.attr('data-cmb-id'));
            coreItem.addClass('cmb-movable-item');
            cmbResetCmbOption();
            $.each(cmbAllElements[coreItem.attr('data-cmb-wrapper')]['allowedParent'],function (key, val) {
                if(cmbAllElements[val]){
                    if(cmbAllElements[val]['subWrapper']){
                        $('.' + val).find(cmbAllElements[val]['subWrapper']).addClass('cmb-element-focus-movable').attr('data-movable-id',function(){
                            return $(this).parent().attr('data-cmb-id')
                        });
                    }
                    else{
                        $('.' + val).addClass('cmb-element-focus-movable').attr('data-movable-id', function () {
                            return $(this).attr('data-cmb-id')
                        });
                    }
                }
            });

            $('[data-cmb-id="' + coreItem.attr('data-cmb-id') + '"]').removeClass('cmb-element-focus-movable').removeAttr('data-movable-id').find('.cmb-element-focus-movable').removeClass('cmb-element-focus-movable').removeAttr('data-movable-id');

            window.setTimeout(function () {
                cmbMoveActivity = true;
                cmbWorkOnProcess = false;
                cmbGlobalActivity = false;
            }, 1000);
        } else {
            cmbGlobalActivity = false;
            cmbWorkOnProcess = false;
        }
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', ('#cmb-option-delete'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let deletableItem = $('#cmb-option-box').parent();
        if (cmbActionValidation(deletableItem.attr('data-cmb-wrapper'), 'cmb-option-delete')) {
            if(cmbAllElements[deletableItem.attr('data-cmb-wrapper')]['beforeDelete']){
                cmbAllElements[deletableItem.attr('data-cmb-wrapper')]['beforeDelete'](deletableItem);
            }

            let deletableItemIds = [deletableItem.attr('data-cmb-id')];
            cmbResetCmbOption();
            $('#cmb-slider-font-size-wrapper').addClass('d-none')
            $('#cmb-slide-option-box').removeAttr('style').prependTo($('#cmb-admin-wrapper')).addClass('d-none');
            deletableItem.find("[class*='cmb_']").each(function(){
                let thisSpecific = $(this);
                let cmbName = (thisSpecific .attr('class').match(/(^|\s)(cmb\_[^\s]*)/) || [, , ''])[2];
                deletableItemIds.push(thisSpecific  .attr('data-cmb-id'));
                for (let key in cmbStyleObject) {
                    // if (key.startsWith('.' + cmbName + '[data-cmb-id="'+ thisSpecific.attr('data-cmb-id')+'"]')){
                    if (key.includes('.' + cmbName + '[data-cmb-id="'+ thisSpecific.attr('data-cmb-id')+'"]')){
                        delete cmbStyleObject[key];
                    }
                }
            });
            for (let key in cmbStyleObject) {
                // if (key.startsWith('.' + deletableItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+deletableItem.attr('data-cmb-id')+'"]')){
                if (key.includes('.' + deletableItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+deletableItem.attr('data-cmb-id')+'"]')){
                    delete cmbStyleObject[key];
                }
            }
            cmbNonExistingIdArray = cmbNumericSort(cmbNonExistingIdArray.concat(deletableItemIds));



            let parentItem = deletableItem.parents('[class*="cmb_"]').length > 0 ? $(deletableItem.parents('[class*="cmb_"]')[0]) : $('.cmb-content-wrapper');

            deletableItem.remove();

            if(cmbAllElements[deletableItem.attr('data-cmb-wrapper')]['afterDelete']){
                cmbAllElements[deletableItem.attr('data-cmb-wrapper')]['afterDelete'](parentItem);
            }
            cmbStyleData = cmbStyleToText();
            $('.cmb-dynamic-css-library').html(cmbStyleData);

            cmbSystemMessageBox('Item has been deleted');
        }
        cmbWorkOnProcess = false;
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click','.cmb-option-update-dynamic-setting',function(){
    let data = {name: $(this).attr('data-cmb-dynamic-section-name')}
    $('.cmb-dynamic-input-type').each(function(){
        data[$(this).closest('.cmb-combined-input-wrapper').attr('data-cmb-option-name')] = $(this).val();
    })
    cmbDynamicLayoutCaller(data,true, true, $('#cmb-admin-modal').attr('data-cmb-wrapper'), $('#cmb-admin-modal').attr('data-cmb-id'));
    cmbCloseModal();
    $('#cmb-loading-queue').removeClass('d-none');
})

$(document).on('click', ('#cmb-text-option-edit'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        let targetDom = $(this).parent().siblings('.cmb-editable-text-container');
        let targetDomHeight = targetDom.innerHeight;
        targetDomHeight = targetDomHeight > cmbWysiwygEditorDefaultHeight ? cmbWysiwygEditorDefaultHeight : targetDomHeight;
        cmbWysiwygRunning = true;
        $(this).hide();
        targetDom.attr('data-cmb-editable-text-container', '1');
        $('#cmb-tinymce-popup').removeClass('d-none');
        cmbResetCmbOption();
        tinymce.get('cmb-tinymce').setContent(targetDom.html());
    }
    else{
        cmbSystemMessageBox();
    }
});
$(document).on('click','.cmb-editor-close-modal',function(){
    $('.cmb-editable-text-container[data-cmb-editable-text-container="1"]').removeAttr('data-cmb-editable-text-container');
    cmbWysiwygRunning = false;
    $('#cmb-text-option-edit').hide();
    $('#cmb-tinymce-popup').addClass('d-none');
    cmbSystemMessageBox('Text edit is canceled');
})
$(document).on('click', ('#cmb-text-option-save'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {

        $('#cmb-text-option-edit').hide();
        $('#cmb-tinymce-popup').addClass('d-none');
        $('#cmb-text-edit-option-box').prependTo($('#cmb-admin-wrapper')).removeAttr('style').hide();


        let el = $('.cmb-editable-text-container[data-cmb-editable-text-container="1"]');
        el.html(tinymce.get('cmb-tinymce').getContent());
        el.removeAttr('data-cmb-editable-text-container');
        cmbWysiwygRunning = false;

        cmbSystemMessageBox('Text has been saved successfully');
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', '#cmb-admin-controller-edit', function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && cmbPreviewActivated && !cmbGlobalActivity) {
        $('body').addClass('cmb-editing-activated');
        $('#cmb-default-style').removeAttr('href');
        cmbPreviewActivated = false;
        $.each(cmbAllElements, function (key, val) {
            if(val['onEdit']){
                val['onEdit']();
            }
        });
        $(this).addClass('d-none');
        $('#cmb-section-add-button').removeClass('d-none');
        $('#cmb-admin-controller-preview').removeClass('d-none');

        cmbSystemMessageBox('Builder Mode Activated');
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', '#cmb-admin-controller-save', function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbGlobalActivity) {
        cmbSavingOnProcess = true;
        let $this = $(this);
        setTimeout(function () {
                $.each(cmbAllElements, function (key, val) {
                    if(val['beforeSave']){
                        val['beforeSave']();
                    }
                });
                $('#cmb-loading-queue').removeClass('d-none');
                $('#cmb-temporary-html-wrapper').html($('#cmb-content-wrapper').html());
                $('#cmb-temporary-html-wrapper').find('[data-cmb-element-type="dynamic-layout"]').html('');
                let temporaryHtml = $('#cmb-temporary-html-wrapper').html();
                $('#cmb-temporary-html-wrapper').html('');

                cmbSaveStyle(cmbStyleData, temporaryHtml);

        },30)
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', '#cmb-save-html-css', function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbGlobalActivity) {

    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', '#cmb-admin-controller-preview', function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated && !cmbGlobalActivity) {
        $('body').removeClass('cmb-editing-activated');
        // $('#cmb-default-style').attr('href', $('#cmb-default-style').attr('data-link'));
        cmbPreviewActivated = true;
        $.each(cmbAllElements, function (key, val) {
            if(val['onPreview']){
                val['onPreview']();
            }
        });
        $(this).addClass('d-none');
        $('#cmb-section-add-button').addClass('d-none');
        $('#cmb-admin-controller-edit').removeClass('d-none');

        cmbSystemMessageBox('Preview mode activated');
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('click', '.cmb-single-line-editable-text', function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated && !cmbGlobalActivity) {
        if (!$(this).attr('contenteditable')) {
            cmbGlobalActivity = true;
            $(this).attr('contenteditable', 'true').focus();
            cmbSystemMessageBox('Text editing mode activated');
        }
    }
});

$(document).on('click', '.cmb-close-modal, .cmb-option-setting-close', function () {
    cmbCloseModal();
});



/*FOCUS EVENT*/
$(document).on('focusout', '.cmb-single-line-editable-text', function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated && cmbGlobalActivity) {
        if ($(this).attr('contenteditable')) {
            $(this).removeAttr('contenteditable');
            cmbGlobalActivity = false;
            cmbSystemMessageBox('Text has been saved successfully');
        }
    }
});



/*INPUT EVENT*/
$(document).on('input', '.cmb-input-type-image', function () {
    $(this).siblings('.cmb-option-box-img').attr('src', $(this).val());
});

$(document).on('change', '.cmb-input-type-range', function () {
    $(this).siblings('.cmb-input-info-box').text($(this).val());
});

$(document).on('change', '.cmb-option-box-input', function (e) {
    let targetDom = $('.' + $('#cmb-admin-modal').attr('data-cmb-wrapper') + '[data-cmb-id="' + $('#cmb-admin-modal').attr('data-cmb-id') + '"]');
    let $this = $(this);
    let parentWrapper = $(this).closest('.cmb-combined-input-wrapper');

    if(parentWrapper.attr('data-cmb-type') === 'responsive-class'){
        let targetClass = cmbClassInputs[parentWrapper.attr('data-cmb-option')][parentWrapper.attr('data-cmb-resolution')];
        let validClassName = false;
        $.each(targetClass, function (key, value) {
            targetDom.removeClass(key);
            if($this.val()==key){
                validClassName=key;
            }
        });
        if(validClassName){
            targetDom.addClass(validClassName);
        }
    }
    else {
        let options = cmbGetOptions(parentWrapper.attr('data-cmb-tabs'),parentWrapper.attr('data-cmb-option-name'),$('#cmb-admin-modal').attr('data-cmb-wrapper'));
        let unitValue = '';
        let hasUnit = 'no';
        if($(this).attr('data-cmb-unit-available')){
            hasUnit = 'yes'
            unitValue= $(this).siblings('.cmb-helper-unit').val();
        }
        // if((e.type==='keyup' && options.inputType!=='image') || e.type==='change'){
            if(options.attribute === 'style'){
                cmbInputBuildingFuncs['saveStyle'](targetDom, $(this).val(), hasUnit, unitValue, $(this).attr('data-cmb-sub-style'),options);
            }
            else if(options.attribute === 'class'){
                let finalTargetDom = !parentWrapper.attr('data-cmb-child-item') ? targetDom : targetDom.find(parentWrapper.attr('data-cmb-child-item'));
                cmbInputBuildingFuncs['saveClasses'](finalTargetDom, $(this).val(),options);
            }
            else if(options.attribute  === 'id'){
                let finalTargetDom = !parentWrapper.attr('data-cmb-child-item') ? targetDom : targetDom.find(parentWrapper.attr('data-cmb-child-item'));
                cmbInputBuildingFuncs['saveId'](finalTargetDom, $(this).val(),options);
            }
            else if(options.attribute ==='custom-class') {
                let finalTargetDom = !parentWrapper.attr('data-cmb-child-item') ? targetDom : targetDom.find(parentWrapper.attr('data-cmb-child-item'));
                cmbInputBuildingFuncs['saveCustomClass'](finalTargetDom, $(this).val(), $(this).is(':checked'),options);
            }
            else if(options.attribute ==='prop'){
                let finalTargetDom = !parentWrapper.attr('data-cmb-child-item') ? targetDom : targetDom.find(parentWrapper.attr('data-cmb-child-item'));
                cmbInputBuildingFuncs['saveProp'](finalTargetDom,$(this).val(), $(this).is(':checked'), options);
            }
        // }
    }
});

$(document).on('change', '.cmb-option-box-input', function () {
    if($(this).closest('.cmb-combined-input-wrapper').attr('data-cmb-attribute') !== 'dynamic-layout'){
        cmbSystemMessageBox('Setting has been changed successfully');
    }
});

$(document).on('change','.cmb-helper-unit',function () {
    $(this).siblings('.cmb-option-box-input').trigger( "change" );
});



/*MOUSE EVENT*/
$(document).on('mouseenter', ('.cmb-editable-text'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        $('#cmb-text-option-edit').show();
        $('#cmb-tinymce-popup').addClass('d-none');

        $('#cmb-text-edit-option-box').prependTo($(this)).show();
    }
});

$(document).on('mouseover', ('.cmb-element-focus-movable'), function (event) {
    if (cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        $('.cmb-element-focused').removeClass('cmb-element-focused');
        let currentDom = document.elementFromPoint(event.pageX-$(document).scrollLeft(), event.pageY-$(document).scrollTop()).attributes;
        let className = currentDom.class;
        if (className) {
            className = (className.nodeValue.match(/(^|\s)(cmb-element-focus-movable[^\s]*)/) || [, , ''])[2];
            if(className && currentDom['data-movable-id'] && currentDom['data-movable-id'].nodeValue){
                $('.' + className + '[data-movable-id="' + currentDom['data-movable-id'].nodeValue + '"]').addClass('cmb-element-focused')
            }
        }
    }
});

$(document).on('mouseleave', ('.cmb-element-focus-movable'), function () {
    if (cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        $('.cmb-element-focused').removeClass('cmb-element-focused')
        $('#cmb-text-option-edit').hide();
        $('#cmb-text-edit-option-box').prependTo($('#cmb-admin-wrapper')).removeAttr('style').hide();
    }
});

$(document).on('mouseleave', ('.cmb-editable-text'), function () {
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        $('#cmb-text-option-edit').hide();
        $('#cmb-text-edit-option-box').prependTo($('#cmb-admin-wrapper')).removeAttr('style').hide();
    }
});



/*TAB EVENT*/
$(document).on('click', '.cmb-tab-nav-item', function () {
    $(this).addClass('cmb-active').siblings('.cmb-tab-nav-item').removeClass('cmb-active').closest('.cmb-tab-nav').siblings('.cmb-tab-body').children('div').eq($(this).index()).addClass('cmb-active').siblings('div').removeClass('cmb-active');
});



/*WINDOW EVENT*/
$(window).on('mousemove scroll', function (event) {
    if (cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        $('.cmb-movable-item').css({
            left: event.pageX-$(document).scrollLeft(),
            top: event.pageY + 5 - $(document).scrollTop()
        });
    }
});

$(window).on('click', function (event) {
    if (cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        let currentDom = document.elementFromPoint(event.pageX-$(document).scrollLeft(), event.pageY-$(document).scrollTop()).attributes;
        let className = currentDom.class;
        if (className) {
            let focusClassName = (className.nodeValue.match(/(^|\s)(cmb-element-focused[^\s]*)/) || [, , ''])[2];
            let holdingClassName = (className.nodeValue.match(/(^|\s)(cmb-element-focus-movable[^\s]*)/) || [, , ''])[2];
            // let index = cmbAllElements[$('#cmb-admin-modal').attr('data-cmb-wrapper')]['allowedParent'].indexOf(className);
            if (focusClassName && holdingClassName && currentDom['data-movable-id'] && currentDom['data-movable-id'].nodeValue) {
                cmbMoveActivity = false;
                let cmbMovableItem = $('.cmb-movable-item');
                let previousParent = cmbMovableItem.parents('[class*="cmb_"]').length > 0 ? $(cmbMovableItem.parents('[class*="cmb_"]')[0]) : $('.cmb-content-wrapper');
                if(cmbAllElements[cmbMovableItem.attr('data-cmb-wrapper')]['beforeMove']){
                    cmbAllElements[cmbMovableItem.attr('data-cmb-wrapper')]['beforeMove'](cmbMovableItem);
                }
                cmbMovableItem.appendTo($('.' + focusClassName + '.' + holdingClassName + '[data-movable-id="' + currentDom['data-movable-id'].nodeValue + '"]'));
                cmbMovableItem.removeClass('cmb-movable-item').removeAttr('style');
                $('.cmb-element-focus-movable').removeClass('cmb-element-focus-movable').removeClass('cmb-element-focused').removeAttr('data-movable-id');
                if(cmbAllElements[cmbMovableItem.attr('data-cmb-wrapper')]['afterMove']){
                    cmbAllElements[cmbMovableItem.attr('data-cmb-wrapper')]['afterMove'](cmbMovableItem, previousParent);
                }
                cmbSystemMessageBox('Item has been moved to a new location');
            }
        }
    }
})

$(window).on('contextmenu', function (event) {
    if (cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        event.preventDefault();
        $('.cmb-movable-item').removeClass('cmb-movable-item').removeAttr('style');
        $('.cmb-element-focus-movable').removeClass('cmb-element-focus-movable').removeClass('cmb-element-focused').removeAttr('data-movable-id');
        cmbMoveActivity = false;

        cmbSystemMessageBox('Move action has been canceled');
    }
})


// Dropdown click
$(document).on('click', '.cmb-dropdown-item-holder',function(){
    if($(this).siblings('.cmb-switch.cmb-dropdown').hasClass('d-block')){
        $('.cmb-switch.cmb-dropdown').removeClass('d-block');
        $(this).siblings('.cmb-switch.cmb-dropdown').removeClass('d-block')
    }
    else{
        $('.cmb-switch.cmb-dropdown').removeClass('d-block');
        $(this).siblings('.cmb-switch.cmb-dropdown').addClass('d-block');
    }
})
$(window).on('click', function (event) {
    if ($('.cmb-switch.cmb-dropdown.d-block').length>0) {
        let currentDom = document.elementFromPoint(event.pageX-$(document).scrollLeft(), event.pageY-$(document).scrollTop()).attributes;
        let className = currentDom.class;
        if (className && !className.nodeValue.includes('cmb-dropdown') && !className.nodeValue.includes('cmb-dropdown-item-holder')) {
            $('.cmb-switch.cmb-dropdown').removeClass('d-block');
        }
    }
});



// Multiform


$(document).on('click','.cmb-multi-input-remove', function () {
    let parentDom = $(this).closest('.cmb-multi-input');
    if(parentDom.find('.cmb-multi-input-remove').length>1){
        $(this).parent().remove();
        cmbMultiformValueCreate(parentDom);
    }
});
/*$(document).on('click','.cmb-multi-input-previous', function () {
    let parentDom = $(this).closest('.cmb-multi-input');
    if(parentDom.prev().length >=1){
        parentDom.before(parentDom.prev());
    }
});
$(document).on('click','.cmb-multi-input-next', function () {
    let parentDom = $(this).closest('.cmb-multi-input');
    if(parentDom.next().length >=1){
        parentDom.before(parentDom.next());
    }
});*/
$(document).on('change','.cmb-visible-single-input', function () {
    let parentDom = $(this).closest('.cmb-multi-input');
    if($(this).val() || $.isNumeric($(this).val())){
        cmbMultiformValueCreate(parentDom);
    }
});
$(document).on('click','.cmb-multi-input-insert', function () {
    $(this).before('<div><input type="text" class="cmb-visible-single-input"><a href="javascript:;" class="cmb-multi-input-remove">-</a></div>');
});

$(document).on('click', '.cmb-icon-changer', function () {
    $(this).closest('.icon-dropdown').find('.cmb-dropdown-item-holder').html($(this).html());
});










// MY CODE
$(document).on('click','.cmb-custom-action[data-action="add-row"]',function(){
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let thisItem = $('#cmb-option-box').parent();
        let htmlContent = cmbAllElements['cmb_table_row']['html'];
        cmbAddSection(thisItem.children('table').children('tbody'), htmlContent, 'cmb_table_row', cmbAllElements['cmb_table_body']['elementType'], 'cmb_table_body');
        cmbWorkOnProcess = false;
    }
    else{
        cmbSystemMessageBox();
    }
});
$(document).on('click','.cmb-custom-action[data-action="add-col"]',function(){
    if (!cmbWorkOnProcess && !cmbMoveActivity && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        cmbWorkOnProcess = true;
        let thisItem = $('#cmb-option-box').parent().children('table');
        let tableCell = '<th class="cmb-table-cell"><span class="cmb-single-line-editable-text">New column title</span></th>';
        thisItem.children('thead').children('tr').append(tableCell);
        thisItem.children('tfoot').children('tr').append(tableCell);
        thisItem.children('tbody').children('tr').append('<td class="cmb-table-cell"><span class="cmb-single-line-editable-text">New column value</span></td>');
        cmbWorkOnProcess = false;
    }
    else{
        cmbSystemMessageBox();
    }
});

$(document).on('mousemove','.cmb-table-cell', function(event){
    if (!cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        let itemIndex = $(this).parent().find('.cmb-table-cell').index(this);

        $(this).closest('table').children('thead').children('tr').children('th').eq(itemIndex).addClass('highlighted-cell').siblings('th').removeClass('highlighted-cell');
        $(this).closest('table').children('tfoot').children('tr').children('th').eq(itemIndex).addClass('highlighted-cell').siblings('th').removeClass('highlighted-cell');
        $(this).closest('table').children('tbody').children('tr').each(function () {
            $(this).children('td').removeClass('highlighted-cell').eq(itemIndex).addClass('highlighted-cell');
        });
        $('#cmb-table-movable-action').css({
            top:    $(this).closest('.cmb_table_box').offset().top - $(document).scrollTop(),
            left:   $(this).offset().left -  $(document).scrollLeft()
        }).attr('data-wrapper',$(this).closest('.cmb_table_box').attr('data-cmb-wrapper'))
            .attr('data-id',$(this).closest('.cmb_table_box').attr('data-cmb-id'))
            .attr('data-index', itemIndex);
    }
});
$(document).on('mouseleave','.cmb-table-cell', function(event){
    if (!cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        let currentDom = document.elementFromPoint(event.pageX-$(document).scrollLeft(), event.pageY-$(document).scrollTop());
        if(currentDom){
            currentDom = currentDom.attributes;
            let className = currentDom.class;
            if (className) {
                className = (className.nodeValue.match(/(^|\s)(cmb-table-movable-action[^\s]*)/) || [, , ''])[2];
                if(!className){
                    $('#cmb-table-movable-action').removeAttr('style');
                    $('.highlighted-cell').removeClass('highlighted-cell');
                }
            }
        }
        else{
            $('#cmb-table-movable-action').removeAttr('style');
            $('.highlighted-cell').removeClass('highlighted-cell');
        }

    }
});
$(document).on('mouseleave','#cmb-table-movable-action', function(event){
    if (!cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        $('#cmb-table-movable-action').removeAttr('style');
        $('.highlighted-cell').removeClass('highlighted-cell');

    }
});
$(document).on('click','#cmb-table-col-prev', function(event){
    if (!cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        let parentDom = $('.'+ $('#cmb-table-movable-action').attr('data-wrapper')+ '[data-cmb-id="'+ $('#cmb-table-movable-action').attr('data-id') +'"]');
        let itemIndex = $('#cmb-table-movable-action').attr('data-index');
        let headItem = parentDom.children('table').children('thead').children('tr').children('th').eq(itemIndex);
        headItem.insertBefore(headItem.prev());
        let footItem = parentDom.children('table').children('tfoot').children('tr').children('th').eq(itemIndex);
        footItem.insertBefore(footItem.prev());
        parentDom.children('table').children('tbody').children('tr').each(function () {
            let rowItem = $(this).children('td').eq(itemIndex);
            rowItem.insertBefore(rowItem.prev());
        });
        $('#cmb-table-movable-action').removeAttr('style');
    }
});
$(document).on('click','#cmb-table-col-next', function(event){
    if (!cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        let parentDom = $('.'+ $('#cmb-table-movable-action').attr('data-wrapper')+ '[data-cmb-id="'+ $('#cmb-table-movable-action').attr('data-id') +'"]');
        let itemIndex = $('#cmb-table-movable-action').attr('data-index');
        let headItem = parentDom.children('table').children('thead').children('tr').children('th').eq(itemIndex);
        headItem.insertAfter(headItem.next());
        let footItem = parentDom.children('table').children('tfoot').children('tr').children('th').eq(itemIndex);
        footItem.insertAfter(footItem.next());
        parentDom.children('table').children('tbody').children('tr').each(function () {
            let rowItem = $(this).children('td').eq(itemIndex);
            rowItem.insertAfter(rowItem.next());
        });
        $('#cmb-table-movable-action').removeAttr('style');
    }
});
$(document).on('click','#cmb-table-col-remove', function(event){
    if (!cmbMoveActivity && !cmbWorkOnProcess && !cmbGlobalActivity && !cmbWysiwygRunning && !cmbSavingOnProcess && !cmbPreviewActivated) {
        let parentDom = $('.'+ $('#cmb-table-movable-action').attr('data-wrapper')+ '[data-cmb-id="'+ $('#cmb-table-movable-action').attr('data-id') +'"]');
        let itemIndex = $('#cmb-table-movable-action').attr('data-index');
        let headItem = parentDom.children('table').children('thead').children('tr').children('th').eq(itemIndex);
        headItem.remove();
        let footItem = parentDom.children('table').children('tfoot').children('tr').children('th').eq(itemIndex);
        footItem.remove();
        parentDom.children('table').children('tbody').children('tr').each(function () {
            let rowItem = $(this).children('td').eq(itemIndex);
            rowItem.remove();
        });
        $('#cmb-table-movable-action').removeAttr('style');
    }
});
// MY CODE


$(document).on('click', '.cmb-accordion-handler',function () {
    if($(this).closest('.cmb-accordion-item').hasClass('active')){
        $(this).html('&#10011;').closest('.cmb-accordion-item').removeClass('active');
    }
    else{
        $(this).html('&#10005;').closest('.cmb-accordion-item').addClass('active');
    }
    if(!$(this).closest('.cmb-accordion').attr('data-individual')){
        $(this).closest('.cmb-accordion-item').siblings('.cmb-accordion-item').removeClass('active').find('.cmb-accordion-handler').html('&#10011;');
    }
})

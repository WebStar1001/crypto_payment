let cmSlideCurrentItem = false;
let cmSlideDragStart = false;
//Control
// -------------
$(document).on('click', '#cmb-slider-item-drag', function () {
    if(!cmSliderDrag && !$(this).closest('.cm-slider').attr('data-process') && $('body').hasClass('cmb-editing-activated')){
        cmbWorkOnProcess = true;
        cmSlideCurrentItem = $(this).parent().parent();
        $(this).parent().parent().addClass('cmb-temp-transparent');
        cmSliderDrag = true;
        $('#cmb-option-box').addClass('d-none');
    }
    else{
        cmbWorkOnProcess = false;
        $(this).parent().parent().removeClass('cmb-temp-transparent');
        cmSlideDragStart = false;
        cmSliderDrag = false;
        cmSlideCurrentItem = false;
        $('#cmb-option-box').removeClass('d-none');
    }
});
$(document).on('click','.cm-slide-inner',function (event) {
    if(cmSlideCurrentItem && cmSliderDrag && !$(this).closest('.cm-slider').attr('data-process') && $('body').hasClass('cmb-editing-activated')){
        if(!cmSlideDragStart){
            cmSlideDragStart = true;
        }
        else{
            cmbWorkOnProcess = false;
            $(this).find('*').removeClass('cmb-temp-transparent');
            cmSlideDragStart = false;
            cmSliderDrag = false;
            cmSlideCurrentItem = false;
        }
    }
});
$(document).on('mousemove','.cm-slide-inner',function (event) {
    if(cmSlideCurrentItem && cmSliderDrag && cmSlideDragStart && !$(this).closest('.cm-slider').attr('data-process') && $('body').hasClass('cmb-editing-activated')){
        let leftCalc = parseFloat((event.pageX - $(this).offset().left - 11)*100/$(this).outerWidth()).toFixed(2);
        let topCalc = parseFloat((event.pageY - $(this).offset().top - 11)*100/$(this).outerHeight()).toFixed(2)
        cmSlideCurrentItem.css({
            left: (leftCalc > 99 ? 99 : leftCalc) +'%',
            top: (topCalc > 99 ? 99 : (topCalc < 0 ? 0 : topCalc)) +'%'
        }).attr('data-x', (leftCalc > 99 ? 99 : (leftCalc < 0 ? 0 : leftCalc))).attr('data-y', (topCalc > 99 ? 99 : topCalc))
    }
    else{
        cmSlideDragStart = false;
        cmSliderDrag = false;
        cmSlideCurrentItem = false;
    }
});


$(document).on('change','#cmb-slider-font-size',function (event) {
    $(this).parent().parent().parent().find('.cmb-single-line-editable-text').attr('data-slide-element-font-size',$(this).val())
        .css({
            'font-size': parseFloat(($(this).closest('.cm-slider').outerWidth()/$('body').outerWidth())*$(this).val()).toFixed(2) + 'vw'
        })
});
$(document).on('mouseenter','.cm-slide-inner > *',function (event) {
    if(!cmSliderDrag && !$(this).closest('.cm-slider').attr('data-process') && $('body').hasClass('cmb-editing-activated')){

        $('#cmb-slide-option-box').css({
            left: 0,
            top: 0
        }).prependTo($(this)).removeClass('d-none');
        if($(this).find('.cmb-single-line-editable-text').length>0){
            let currentSize = $(this).find('.cmb-single-line-editable-text').attr('data-slide-element-font-size');
            currentSize = currentSize ? currentSize: 2;
            $('#cmb-slider-font-size').val(currentSize);
            $('#cmb-slider-font-size-wrapper')/*.css({
                left: 22,
                top: 0
            }).prependTo($(this))*/.removeClass('d-none');
        }
    }
});

$(document).on('mouseleave','.cm-slide-inner > *',function () {
    if(!cmSlideDragStart && !cmSliderDrag && !cmSlideCurrentItem && !$(this).closest('.cm-slider').attr('data-process') && $('body').hasClass('cmb-editing-activated')){
        $('#cmb-slide-option-box').removeAttr('style').addClass('d-none').prependTo($('#cmb-admin-wrapper'));
        if($(this).find('.cmb-single-line-editable-text').length>0) {
            $('#cmb-slider-font-size-wrapper')/*.removeAttr('style')*/.addClass('d-none')/*.prependTo($('#cmb-admin-wrapper'))*/;
        }
    }
});


$(document).on('mouseenter','#cmb-slider-css3-effect',function (event) {
    if(!cmSliderDrag && !$(this).closest('.cm-slider').attr('data-process') && $('body').hasClass('cmb-editing-activated')){
        let styleItem = $(this).closest('#cmb-slide-option-box').parent();
        let className = '.'+styleItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+styleItem.attr('data-cmb-id')+'"] .cm-slide-element-core';
        $('.cmb-slide-element-transform').val(0);
        if(cmbStyleObject[className] && cmbStyleObject[className]['transform']){
            let styleArray = cmbStyleObject[className]['transform'].split(' ');
            $.each(styleArray, function (key,val) {
                let individual=val.replace('deg)','').split('(');
                let targetItem = '.cmb-slide-element-transform[data-style="'+individual[0]+'"]';
                if($(targetItem)){
                    $(targetItem).val(individual[1]);
                }
            })
        }
    }
});
$(document).on('change','.cmb-slide-element-transform',function (event) {
    if(!cmSliderDrag && !$(this).closest('.cm-slider').attr('data-process') && $('body').hasClass('cmb-editing-activated')){
        let styleItem = $(this).closest('#cmb-slide-option-box').parent();
        let className = '.'+styleItem.attr('data-cmb-wrapper') + '[data-cmb-id="'+styleItem.attr('data-cmb-id')+'"] .cm-slide-element-core';
        let finalValue = '';
        let separator = '';
        $(this).closest('#cmb-slider-css3-effect').find('.cmb-slide-element-transform').each(function () {
            if($(this).val()!=0){ // (do not use !==)
                finalValue = finalValue + separator + $(this).attr('data-style') + '(' + $(this).val() + 'deg)';
                separator = ' ';
            }
        });
        if(finalValue){
            if(!cmbStyleObject[className]){
                cmbStyleObject[className] = {};
            }
            cmbStyleObject[className]['-webkit-transform'] = finalValue;
            cmbStyleObject[className]['transform'] = finalValue;
            cmbStyleData = cmbStyleToText();
            $('.cmb-dynamic-css-library').html(cmbStyleData);
        }
        else if(cmbStyleObject[className]){
            if(cmbStyleObject[className]['transform']){
                delete cmbStyleObject[className]['transform'];
            }
            if(cmbStyleObject[className]['-webkit-transform']){
                delete cmbStyleObject[className]['-webkit-transform'];
            }
            if(Object.keys(cmbStyleObject[className])<=0){
                delete cmbStyleObject[className];
            }

            cmbStyleData = cmbStyleToText();
            $('.cmb-dynamic-css-library').html(cmbStyleData);
        }
    }
});
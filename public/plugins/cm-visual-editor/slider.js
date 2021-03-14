let cmSliderDrag = false;
/*EDITOR CODE*/
let cmSliderMethods = {
    changeSlide: function (slider, prev, firstRun, targetSlideNo) {
        if(cmSliderDrag){
            return false;
        }
        slider.removeAttr('data-pause')
            .attr('data-process','1')
            .attr('data-elapsed',0)
            .attr('data-destroy',1);
        slider.find('.cm-timeline-inner').css({
            width: 0,
        });
        let allSlides = slider.children('.cm-slide-container').children('.cm-slide');
        if(allSlides.length>0){
            if(!allSlides.eq(+slider.attr('data-current-slide')-1) || !slider.attr('data-current-slide')){
                slider.attr('data-current-slide', 1);
            }
            if(allSlides.length===1){
                firstRun = true;
            }
            setTimeout(function () {
                slider.removeAttr('data-destroy');

                let processDone = 0;
                if(firstRun){
                    processDone=1;
                }
                let currentSlideNo = -1;
                if(!firstRun){
                    currentSlideNo = slider.attr('data-current-slide') > 0 ? +slider.attr('data-current-slide')-1 : 0;
                }
                if(!targetSlideNo){
                    targetSlideNo = currentSlideNo === allSlides.length -1 ? 0 : currentSlideNo + 1;
                    if(prev){
                        targetSlideNo = currentSlideNo === 0 ? allSlides.length -1 : (currentSlideNo <0 ? 0 : currentSlideNo - 1);
                    }
                }
                if(currentSlideNo !== targetSlideNo){
                    slider.attr('data-current-slide',targetSlideNo+1);
                    let currentSlide = allSlides.eq(currentSlideNo);
                    if(currentSlide){
                        currentSlide.children('.cm-slide-inner').children().each(function () {
                            if($(this).attr('data-animation')){
                                $(this).removeClass($(this).attr('data-animation')).removeClass('cm-slide-animated').css({
                                    '-webkit-animation-duration': '',
                                    'animation-duration': '',
                                    '-webkit-animation-delay': '',
                                    'animation-delay': '',
                                })
                            }
                        });
                    }
                    let targetSlide =  slider.children('.cm-slide-container').children('.cm-slide').eq(targetSlideNo);
                    targetSlide.children('.cm-slide-inner').children().each(function () {
                        if($(this).attr('data-animation') && $(this).attr('data-exists-from-start')!=='y'){
                            $(this).addClass('d-none');
                        }
                        else{
                            $(this).removeClass('d-none');
                        }
                        if($(this).attr('data-animation')){
                            $(this).removeClass($(this).attr('data-animation')).removeClass('cm-slide-animated').css({
                                '-webkit-animation-duration': '',
                                'animation-duration': '',
                                '-webkit-animation-delay': '',
                                'animation-delay': '',
                            })
                        }
                    });
                    let currentSlideOutTransition = null;
                    if(!firstRun){
                        currentSlideOutTransition = currentSlide.attr('data-out-transition') ?currentSlide.attr('data-out-transition') : (slider.attr('data-out-transition') ? slider.attr('data-out-transition') : 'flipOutX');
                        currentSlide.removeClass('cm-slide-current').addClass('cm-slide-disappearing').siblings('.cm-slide-current').removeClass('cm-slide-current');
                    }

                    let targetSlideInInterval = targetSlide.attr('data-transition-interval')>0 ?targetSlide.attr('data-transition-interval') : (slider.attr('data-transition-interval')>0 ? slider.attr('data-transition-interval') : 1000);
                    let targetSlideDisplayInterval = targetSlide.attr('data-display-interval')>0 ?targetSlide.attr('data-display-interval') : (slider.attr('data-display-interval')>0 ? slider.attr('data-display-interval') : 5000);
                    slider.attr('data-current-interval',targetSlideDisplayInterval);

                    let targetSlideInTransition = targetSlide.attr('data-in-transition') ?targetSlide.attr('data-in-transition') : (slider.attr('data-in-transition') ? slider.attr('data-in-transition') : 'zoomIn');
                    targetSlide.removeClass('cm-slide-disappearing').addClass('cm-slide-current');
                    if(!firstRun) {
                        currentSlide.css({
                            '-webkit-animation-duration': targetSlideInInterval + 'ms',
                            'animation-duration': targetSlideInInterval + 'ms',
                        }).addClass(currentSlideOutTransition + ' cm-slide-animated');
                    }

                    targetSlide.css({
                        '-webkit-animation-duration': targetSlideInInterval + 'ms',
                        'animation-duration': targetSlideInInterval + 'ms',
                    }).addClass(targetSlideInTransition + ' cm-slide-animated');
                    setTimeout(function () {
                        if(!firstRun) {
                            currentSlide.css({
                                '-webkit-animation-duration': '',
                                'animation-duration': '',
                                'transition-duration': ''
                            }).removeClass(currentSlideOutTransition).removeClass('cm-slide-animated')
                                .removeClass('cm-slide-disappearing');
                            processDone++;
                            if (processDone >= 2) {
                                slider.removeAttr('data-process');
                                cmSliderMethods.interValProcess(slider, targetSlideNo+1);
                            }
                        }
                        targetSlide.css({
                            '-webkit-animation-duration': '',
                            'animation-duration': '',
                            'transition-duration':''
                        }).removeClass(targetSlideInTransition).removeClass('cm-slide-animated');
                        processDone++;
                        if(processDone>=2){
                            slider.removeAttr('data-process');
                            cmSliderMethods.interValProcess(slider,targetSlideNo+1);
                        }
                        targetSlide.children('.cm-slide-inner').children().each(function () {
                            $(this).removeClass('d-none');
                            if($(this).attr('data-animation')){
                                let durationTime = +($(this).attr('data-animation-duration') ? $(this).attr('data-animation-duration') : 500);
                                let delayTime = +($(this).attr('data-animation-delay') ? $(this).attr('data-animation-delay') : 0);
                                let $this = $(this);
                                $(this).css({
                                    '-webkit-animation-duration': durationTime + 'ms',
                                    'animation-duration': durationTime + 'ms',
                                    '-webkit-animation-delay': delayTime + 'ms',
                                    'animation-delay': delayTime + 'ms',
                                }).addClass('cm-slide-animated').addClass($(this).attr('data-animation'));
                                setTimeout(function () {
                                    $this.removeClass($this.attr('data-animation')).removeClass('cm-slide-animated').css({
                                        '-webkit-animation-duration': '',
                                        'animation-duration': '',
                                        '-webkit-animation-delay': '',
                                        'animation-delay': '',
                                    })
                                },(durationTime+delayTime));
                            }
                        });
                    },targetSlideInInterval);
                }
                else{
                    slider.removeAttr('data-destroy')
                    slider.removeAttr('data-process')
                }
            },20)
        }
    },
    interValProcess: function(slider,targetSlideNo){
        setTimeout(function () {
            if(
                !slider.attr('data-destroy')
                && slider.attr('data-current-slide') == targetSlideNo
                && slider.attr('data-pause') !== 'pause'
                && !$('body').hasClass('cmb-editing-activated')
            ){
                let currentTime = +slider.attr('data-elapsed') + 10;
                let displayInterval = +slider.attr('data-current-interval');
                slider.attr('data-elapsed', currentTime);
                if(currentTime >= displayInterval){
                    cmSliderMethods.changeSlide(slider);
                }
                else{
                    slider.find('.cm-timeline-inner').css({
                        width: parseFloat(currentTime*100/displayInterval).toFixed(2) + '%'
                    });
                    cmSliderMethods.interValProcess(slider,targetSlideNo);
                }
            }
            else{
                slider.removeAttr('data-destroy')
                slider.removeAttr('data-process')
            }
        }, 10);
    },
    sliderRun: function(slider,firstRun) {
        cmSliderMethods.rearrangeElement(slider);
        if(slider.length>1){
            slider.each(function () {
                cmSliderMethods.changeSlide($(this),false,firstRun);
            })
        }
        else{
            cmSliderMethods.changeSlide(slider,false,firstRun);
        }
    },
    rearrangeElement: function(item){
        if(item){
            if(item.length>1){
                item.each(function () {
                    cmSliderMethods.rearrangeIndividual($(this))
                })
            }
            else{
                cmSliderMethods.rearrangeIndividual(item)
            }
        }
        else{
            $('.cm-slider').each(function () {
                cmSliderMethods.rearrangeIndividual($(this))
            })
        }

    },
    rearrangeIndividual: function (item) {
        item.find('.cm-slide-inner > *').each(function () {
            if($(this).find('.cmb-single-line-editable-text').length>0){
                if($(this).find('.cmb-single-line-editable-text').attr('data-slide-element-font-size')){
                    $(this).find('.cmb-single-line-editable-text').css({
                        'font-size': parseFloat(($(this).closest('.cm-slider').outerWidth()/$('body').outerWidth())*(+$(this).find('.cmb-single-line-editable-text').attr('data-slide-element-font-size'))).toFixed(2) + 'vw'
                    })
                }
                else{
                    $(this).find('.cmb-single-line-editable-text').css({
                        'font-size': '2vw'
                    })
                }
            }
            $(this).css({
                left:$(this).attr('data-x') ? $(this).attr('data-x') + '%' : '50%',
                top: $(this).attr('data-y') ? $(this).attr('data-y') + '%' : '50%'
            })
        })
    }
};
/*SLIDER MAIN CODE*/
$(document).on('click','.cm-slider-direction-left',function () {
    if(!$(this).closest('.cm-slider').attr('data-process')){
        cmSliderMethods.changeSlide($(this).closest('.cm-slider'), true);
        $(this).removeAttr('data-pause');
    }
});
$(document).on('click','.cm-slider-direction-right',function () {
    if(!$(this).closest('.cm-slider').attr('data-process')){
        cmSliderMethods.changeSlide($(this).closest('.cm-slider'));
        $(this).removeAttr('data-pause');
    }
});
$(document).on('mouseover','.cm-slider',function () {
    if($(this).attr('data-pause-active')==='y'
        && !$('body').hasClass('cmb-editing-activated')
        && !$(this).attr('data-process')
    ){
        $(this).attr('data-pause','pause');
    }
});
$(document).on('mouseleave','.cm-slider',function () {
    if($(this).attr('data-pause-active')==='y'
        && $(this).attr('data-pause')==='pause'
        && !$('body').hasClass('cmb-editing-activated')
        && !$(this).attr('data-process')
    ){
        $(this).removeAttr('data-pause');
        let $this = $(this);
        setTimeout(function () {
            cmSliderMethods.interValProcess($this, $this.attr('data-current-slide'));
        }, 20);
    }
});
$(window).on('resize',function () {
    cmSliderMethods.rearrangeElement();
});

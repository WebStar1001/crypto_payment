var cmbRequiredJsForRealPage = {
    cmbNavTab: function(){
        $(document).on('click', '.cmb_tab_item', function () {
            $(this).addClass('tab-active').siblings('.cmb_tab_item').removeClass('tab-active').closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq($(this).index()).addClass('tab-active').siblings('.tab-inner').removeClass('tab-active');
        });
    },
    cmbCustomNavTab: function(){
        $(document).on('click', '.cmb_custom_tab_item', function () {
            $(this).addClass('tab-active').siblings('.cmb_custom_tab_item').removeClass('tab-active').closest('.tab-nav').siblings('.tab-body').children('.tab-inner').eq($(this).index()).addClass('tab-active').siblings('.tab-inner').removeClass('tab-active');
        });
    },
    cmbPfolio: function () {
        if($('.cm-pfbox').length>0){
            $('.cm-pfbox').cmPfolio();
        }
    },
    cmSlider: function () {
        if($('.cm-slider').length>0){
            cmSliderMethods.sliderRun($('.cm-slider'),true)
        }
    },
    cmAccordion: function () {
        if($('.cmb-accordion').length>0){
            $(document).on('click', '.cmb-accordion-handler', function () {
                if($(this).closest('.cmb-accordion-item').hasClass('active')){
                    $(this).html('&#10011;').closest('.cmb-accordion-item').removeClass('active');
                }
                else{
                    $(this).html('&#10005;').closest('.cmb-accordion-item').addClass('active');
                }
                if(!$(this).closest('.cmb-accordion').attr('data-individual')){
                    $(this).closest('.cmb-accordion-item').siblings('.cmb-accordion-item').removeClass('active').find('.cmb-accordion-handler').html('&#10011;');
                }
            });
        }
    },
    testimonial: function (){
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
}

function cmbRealPageJs(){
    Object.values(cmbRequiredJsForRealPage).map(value => {
        if(typeof value === 'function') {
            value.call();
        }
    });
}

cmbRealPageJs();

(function($){
    $(document).on('click','.cm-lb-img-link',function(){
        $('body').append('<div class="cm-lbimg-frm"><div style="padding:30px"><div></div></div><ul class="cm-lbcont"><li class="lb_prev"><i class="fa fa-angle-left"></i></li><li class="lb_next"><i class="fa fa-angle-right"></i></li><li class="lb_close"><i class="fa fa-close"></i></li></ul></div>');
        $(this).closest('.cm-lb-img-group').attr('data-activity','yes');
        $(this).closest('.cm-lb-img-group').attr('data-activity','yes');
        $(this).attr('data-activity','yes');
        $('.cm-lbimg-frm').children('div').children('div').css('background-image', 'url("' + ($(this).attr('data-cm-lb-img') ? $(this).attr('data-cm-lb-img') : $(this).attr('src')) + '")');
        if($(this).closest('.cm-lb-img-group').length!==1){
            $('.cm-lbimg-frm').find('.lb_prev').remove();
            $('.cm-lbimg-frm').find('.lb_next').remove();
        }
        else{
            if($(this).closest('.cm-lb-img-group').hasClass('cm-pfbox')){
                let current = $(this).closest('.cm-lb-img-group').siblings('.cm-pfbtn-grp').find('button:disabled').attr('data-cm-pfctg');
                if(current!=='all'){
                    allImg = $(this).closest('.cm-lb-img-group').find('[data-cm-ctg*="|'+current+'|"]').find('.cm-lb-img-link').length;
                    if(allImg <= 1){
                        $('.cm-lbimg-frm').find('.lb_prev').remove();
                        $('.cm-lbimg-frm').find('.lb_next').remove();
                    }
                }
            }
        }
    })
    $(document).on('click','.lb_prev',function(){
        let allImg = $('.cm-lb-img-group[data-activity="yes"]').find('.cm-lb-img-link');
        if($('.cm-lb-img-group[data-activity="yes"]').hasClass('cm-pfbox')){
            let current = $('.cm-lb-img-group[data-activity="yes"]').siblings('.cm-pfbtn-grp').find('button:disabled').attr('data-cm-pfctg');
            if(current!=='all') {
                allImg = $('.cm-lb-img-group[data-activity="yes"]').find('[data-cm-ctg*="|' + current + '|"]').find('.cm-lb-img-link');
            }
        }
        for(let i=0; i < allImg.length; i++){
            if($(allImg[i]).attr('data-activity')=='yes'){
                $('.cm-lbimg-frm').children('div').children('div').css('background-image', '');
                if(i==0){
                    $(allImg[allImg.length-1]).attr('data-activity','yes');
                    $(allImg[i]).removeAttr('data-activity');
                    $('.cm-lbimg-frm').children('div').children('div').css('background-image', 'url("' + ($(allImg[allImg.length-1]).attr('data-cm-lb-img') ? $(allImg[allImg.length-1]).attr('data-cm-lb-img') : $(allImg[allImg.length-1]).attr('src'))) + '")';
                }
                else{
                    $(allImg[i-1]).attr('data-activity','yes');
                    $(allImg[i]).removeAttr('data-activity');
                    $('.cm-lbimg-frm').children('div').children('div').css('background-image', 'url("' + ($(allImg[i-1]).attr('data-cm-lb-img') ? $(allImg[i-1]).attr('data-cm-lb-img') : $(allImg[i-1]).attr('src'))) + '")';
                }
                break
            }
        }

    });
    $(document).on('click','.lb_next',function(){
        let allImg = $('.cm-lb-img-group[data-activity="yes"]').find('.cm-lb-img-link');
        if($('.cm-lb-img-group[data-activity="yes"]').hasClass('cm-pfbox')){
            let current = $('.cm-lb-img-group[data-activity="yes"]').siblings('.cm-pfbtn-grp').find('button:disabled').attr('data-cm-pfctg');
            if(current!=='all'){
                allImg = $('.cm-lb-img-group[data-activity="yes"]').find('[data-cm-ctg*="|'+current+'|"]').find('.cm-lb-img-link');
            }
        }
        for(let i=0; i < allImg.length; i++){
            if($(allImg[i]).attr('data-activity')=='yes'){
                $('.cm-lbimg-frm').children('div').children('div').css('background-image', '');
                if(i===allImg.length-1){
                    $(allImg[0]).attr('data-activity','yes');
                    $(allImg[i]).removeAttr('data-activity');
                    $('.cm-lbimg-frm').children('div').children('div').css('background-image', 'url("' + ($(allImg[0]).attr('data-cm-lb-img') ? $(allImg[0]).attr('data-cm-lb-img') : $(allImg[0]).attr('src'))) + '")';
                }
                else{
                    $(allImg[i+1]).attr('data-activity','yes');
                    $(allImg[i]).removeAttr('data-activity');
                    $('.cm-lbimg-frm').children('div').children('div').css('background-image', 'url("' + ($(allImg[i+1]).attr('data-cm-lb-img') ? $(allImg[i+1]).attr('data-cm-lb-img') : $(allImg[i+1]).attr('src'))) + '")';
                }
                break;
            }
        }
    });
    $(document).on('click','.lb_close',function(){
        let allImg = $('.cm-lb-img-group[data-activity="yes"]').removeAttr('data-activity').find('.cm-lb-img-link[data-activity="yes"]').removeAttr('data-activity');
        $(this).closest('.cm-lbimg-frm').remove();
    });
})(jQuery);
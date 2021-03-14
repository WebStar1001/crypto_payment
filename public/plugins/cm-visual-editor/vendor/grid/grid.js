(function($){
    $.fn.cmPfolio = function(){
        let $this = this;

        let processes = {
            createButton: function(targetDom, parentDom){
                let section = [];
                let core = this;
                targetDom.children('.cm-pfitem').each(function(){
                    let current = $(this);
                    let dataSec = current.attr('data-cm-section').toLowerCase().split('|');
                    let dataCmCtg = '';
                    let separator = '|';
                    $.each(dataSec, function(key,val){
                        let dataSecTrim = $.trim(val);
                        dataSecTrim = core.capitalize(dataSecTrim.replace(/\ /g, '-'));
                        dataCmCtg = dataCmCtg + separator +  dataSecTrim + '|'
                        if($.inArray(dataSecTrim, section) === -1){
                            section.push(dataSecTrim);
                        }
                        separator = '';
                    })
                    current.attr('data-cm-ctg', dataCmCtg);
                });
                section.sort();
                if(parentDom.attr('data-cm-button')!=='false'){
                    if(parentDom.children('.cm-pfbtn-grp').length > 0){
                        parentDom.children('.cm-pfbtn-grp').remove();
                    }
                    let pFolioButton = '<div class="cm-pfbtn-grp">';
                    if(parentDom.attr('data-cm-button')!=='false'){
                        pFolioButton = pFolioButton + (parentDom.attr('data-cm-default-group')!=='false' ? '<button class="cm-pfbtn" data-cm-pfctg="all"' + ( !parentDom.attr('data-cm-starting-group') ? ' disabled' : '' ) + '>All</button>' : '');
                    }
                    let allGroups = '';
                    let separator = '';
                    $.each(section, function(key,val){
                        pFolioButton = pFolioButton + '<button class="cm-pfbtn" data-cm-pfctg="'+ val +'"'+ ( parentDom.attr('data-cm-starting-group')===val ? ' disabled' : '' ) +'>'+ val.replace(/\-/g, ' ') +'</button>';
                        allGroups = allGroups + separator + val;
                        separator = '|';
                    });
                    pFolioButton = pFolioButton + '</div>';
                    parentDom.attr('data-pf-groups',allGroups);
                    parentDom.prepend(pFolioButton);
                    if(parentDom.find('.cm-pfbtn-grp').find('.cm-pfbtn:disabled').length <= 0){
                        parentDom.find('.cm-pfbtn-grp').find('.cm-pfbtn').eq(0).attr('disabled','disabled');
                    }
                }
                else{
                    parentDom.children('.cm-pfbtn-grp').remove();
                }
            },
            rearrange: function(targetDom, parentDom, activeButton,totalColumn){
                let items = targetDom.children('.cm-pfitem');
                let heightArray = [];
                for(let i=0; i<totalColumn; i++){
                    heightArray.push(0);
                }
                let count = 0;
                items.each(function(){
                    if(activeButton==='all' || $(this).attr('data-cm-ctg').includes('|' + activeButton + '|')){
                        count = heightArray.indexOf(Math.min.apply(Math, heightArray));
                        $(this).css({
                            opacity: 1,
                            width: (parseFloat(100/totalColumn).toFixed(2))+'%',
                            zIndex:99,
                            top: heightArray[count],
                            left: (count*(parseFloat(100/totalColumn).toFixed(2)))+'%'
                        })
                        heightArray[count] = heightArray[count] + $(this).outerHeight();
                    }
                });
                items.each(function(){
                    let center = Math.max.apply(Math, heightArray)/2 - $(this).outerHeight()/2;
                    if(activeButton!=='all' && !$(this).attr('data-cm-ctg').includes('|' + activeButton + '|')){
                        $(this).css({
                            opacity: 0,
                            width: (parseFloat(100/totalColumn).toFixed(2))+'%',
                            zIndex:-1,
                            top: center +'px',
                            left: (50 - (parseFloat(100/totalColumn).toFixed(2)/2))+'%'
                        })
                    }
                });
                targetDom.height(Math.max.apply(Math, heightArray));
            },
            columnCalculation: function(parentDom){
                let column = [1,2,3,4,5,6];
                if(parentDom.attr('data-cm-column-xl') && parentDom.attr('data-cm-column-xl') > 0){
                    column[5]=parentDom.attr('data-cm-column-xl');
                }
                if(parentDom.attr('data-cm-column-lg') && parentDom.attr('data-cm-column-lg') > 0){
                    column[4]=parentDom.attr('data-cm-column-lg');
                }
                if(parentDom.attr('data-cm-column-md') && parentDom.attr('data-cm-column-md') > 0){
                    column[3]=parentDom.attr('data-cm-column-md');
                }
                if(parentDom.attr('data-cm-column-sm') && parentDom.attr('data-cm-column-sm') > 0){
                    column[2]=parentDom.attr('data-cm-column-sm');
                }
                if(parentDom.attr('data-cm-column-xs') && parentDom.attr('data-cm-column-xs') > 0){
                    column[1]=parentDom.attr('data-cm-column-xs');
                }
                if(parentDom.attr('data-cm-column-tn') && parentDom.attr('data-cm-column-tn') > 0){
                    column[0]=parentDom.attr('data-cm-column-tn');
                }
                return column;
            },
            resolutionCalculation: function(targetDom, parentDom){
                let column = this.columnCalculation(parentDom)
                if(targetDom.outerWidth() >= 1200){
                    return column[5];
                }
                else if(targetDom.outerWidth() < 1200 && targetDom.outerWidth() >=992){
                    return column[4];
                }
                else if(targetDom.outerWidth() < 992 && targetDom.outerWidth() >=768){
                    return column[3];
                }
                else if(targetDom.outerWidth() < 768 && targetDom.outerWidth() >=576){
                    return column[2];
                }
                else if(targetDom.outerWidth() < 576 && targetDom.outerWidth() >=400){
                    return column[1];
                }
                else if(targetDom.outerWidth() < 400){
                    return column[0];
                }
            },
            capitalize: function (textItem) {
                return textItem.charAt(0).toUpperCase() + textItem.slice(1);
            },
            pFolioExecution: function(item, parentItem, category, column){
                if($('#cmb-loading-queue')){
                    $('#cmb-loading-queue').removeClass('d-none');
                }
                var loaded = 0;
                var numImages = item.find('.cm-pf-img img').length;
                item.find('img').each(function(){
                    let $this = $(this);
                    var img = new Image();
                    img.src = $(this).attr('src');
                    img.onload = function() {
                        ++loaded;
                        if (loaded === numImages) {
                            processes.rearrange(item, parentItem,category,column);
                            if($('#cmb-loading-queue')) {
                                $('#cmb-loading-queue').addClass('d-none');
                            }
                        }
                    }
                    img.onerror = function() {
                        ++loaded;
                        $this.attr('src',   'images/demo.jpg');
                        if (loaded === numImages) {
                            processes.rearrange(item, parentItem,category,column);
                            if($('#cmb-loading-queue')) {
                                $('#cmb-loading-queue').addClass('d-none');
                            }
                        }
                    };
                });
            }
        }
        $(window).on('load',function(){
            $this.each(function(){
                processes.createButton($(this), $(this).closest('.cm-pfolio'));
                let column = processes.resolutionCalculation($(this), $(this).closest('.cm-pfolio'));
                let defaultActive = $(this).closest('.cm-pfolio').find('.cm-pfbtn-grp').find('.cm-pfbtn:disabled').attr('data-cm-pfctg');
                defaultActive = defaultActive ? defaultActive : 'all';
                processes.pFolioExecution($(this), $(this).closest('.cm-pfolio'),defaultActive,column);
                // processes.rearrange($(this), $(this).closest('.cm-pfolio'),'all',column);

                $(window).on('resize', function(){
                    let column = processes.resolutionCalculation($(this), $(this).closest('.cm-pfolio'));
                    processes.rearrange($this, $this.closest('.cm-pfolio'),'all',column);
                });
            })
        })

        $(document).on('click','.cm-pfbtn', function(){
            $(this).attr('disabled', 'disabled').siblings('button').removeAttr('disabled');
            let column = processes.resolutionCalculation($(this).closest('.cm-pfbtn-grp').siblings('.cm-pfbox'),$(this).closest('.cm-pfolio'));
            processes.rearrange($(this).closest('.cm-pfbtn-grp').siblings('.cm-pfbox'),$(this).closest('.cm-pfolio'),$(this).attr('data-cm-pfctg'),column);
        })



        return {
            reCall: function(item){
                if(item){
                    processes.createButton(item, item.closest('.cm-pfolio'));
                    let column = processes.resolutionCalculation(item, item.closest('.cm-pfolio'));
                    let defaultActive = item.closest('.cm-pfolio').find('.cm-pfbtn-grp').find('.cm-pfbtn:disabled').attr('data-cm-pfctg');
                    defaultActive = defaultActive ? defaultActive : 'all';
                    processes.pFolioExecution(item, item.closest('.cm-pfolio'),defaultActive,column);
                }
                else{
                    $('.cm-pfbox').each(function(){
                        processes.createButton($(this), $(this).closest('.cm-pfolio'));
                        let column = processes.resolutionCalculation($(this), $(this).closest('.cm-pfolio'));
                        let defaultActive = $(this).closest('.cm-pfolio').find('.cm-pfbtn-grp').find('.cm-pfbtn:disabled').attr('data-cm-pfctg');
                        defaultActive = defaultActive ? defaultActive : 'all';
                        processes.pFolioExecution($(this), $(this).closest('.cm-pfolio'),defaultActive,column);
                    })
                }

            }
        }
    }
})(jQuery);
$(document).ready(function(){
    //Load default actions first
    let navSerial = 99999;
    firstload();
    myAutoOrder();

    let allMenuItem = $('.mymenu').find('li');
    if(!allMenuItem){
        navSerial=1
    }
    else{
        navSerial =allMenuItem.length+1;
    }
    filteringItems($('#search-route'), $('#all-routes'));
    //Add route Action
    $('#search-route').on('keyup', function(){
        filteringItems($(this), $('#all-routes'));
    });
    function filteringItems(actionDom,item){
        if(actionDom.val() != ''){
            item.find('label').each(function (){
                if($(this).text().toLowerCase().includes(actionDom.val().toLowerCase())){
                    $(this).closest('.checkbox').show();
                }else {
                    $(this).closest('.checkbox').hide();
                }
            });
        }
        else{
            item.find('label').closest('.checkbox').show();
        }
    }
    //Add route Action
    $('#add-route').on('click', function(){
        $('#all-routes').find('.route-check-box:checked').each(function(){
            let $this = $(this);
            let itemName = $(this).siblings('label').text();
            let itemValue = $(this).val();
            let requiredParams = $(this).attr('data-required-parameters') ? $(this).attr('data-required-parameters').split('|') : [];
            let optionalParams = $(this).attr('data-optional-parameters') ? $(this).attr('data-required-parameters').split('|') : [];
            let appendedData = newItem(navSerial, itemName, 'route', itemValue, requiredParams, optionalParams);
            $('.mymenu').append(appendedData);
            $this.prop('checked',false)
            navSerial++;
        })
        myAutoOrder();
    });



    //Add Page Action
    filteringItems($('#search-page'), $('#all-pages'));
    //Add route Action
    $('#search-page').on('keyup', function(){
        filteringItems($(this), $('#all-pages'));
    });

    $('#add-page').on('click', function(){
        $('#all-pages').find('.page-check-box:checked').each(function(){
            let $this = $(this);
            let itemName = $(this).siblings('label').text();
            let itemValue = $(this).val();
            let appendedData = newItem(navSerial, itemName, 'page', itemValue);
            $('.mymenu').append(appendedData);
            $this.prop('checked',false)
            navSerial++;
        })
        myAutoOrder();
    });

    //Add Custom Link Action
    $('#add-link').on('click', function(){
        let itemValue = $('#link-data').val();
        if(!itemValue || itemValue==''){
            itemValue = 'javascript:;';
        }
        else{
            itemValue = stripTag(itemValue);
        }
        let itemName = $('#link-name').val();
        if(!itemName || itemName==''){
            itemName = 'Unnamed';
        }
        else{
            itemName = stripTag(itemName);
        }

        let appendedData = newItem(navSerial, itemName, 'link', itemValue);
        $('.mymenu').append(appendedData);
        $('#link-data').val('');
        $('#link-name').val('');
        navSerial++;
        myAutoOrder();
    })

    //Delete Action
    $(document).on('click', '.deletebutton', function(e) {
        e.preventDefault();
        let innerOl = $(this).closest('.individual-menu-item').children('ol').children('li');
        if(innerOl.length!=0){
            $(this).closest('.individual-menu-item').after(innerOl);
        }
        $(this).closest('li').remove();
        myAutoOrder();
    }) ;

    $(document).on('keypress', '.prevent-default', function(e) {
        if (e.keyCode === 10 || e.keyCode === 13) {
            e.preventDefault();
        }
        // e.preventDefault();
    })
    $(document).on('keyup keypress', '.name', function(e) {
        if (e.keyCode === 10 || e.keyCode === 13) {
            e.preventDefault();
        }
        let nameValue = $(this).val();
        $(this).closest('.individual-menu-item').children('.innermenu').children('.innermenuhead').find('.title').text(nameValue);
    })

    //Toggle Action
    $(document).on('click', '.innermenuhead .arrow-icon', function() {
        $(this).closest('.innermenuhead').siblings('.innermenubody').slideToggle(300);
        if($(this).find('i').hasClass('fa-caret-right')){
            $(this).find('i').removeClass('fa-caret-right').addClass('fa-caret-down');
        }
        else{
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-right');
        }
    }) ;

    //Megamenu action
    $(document).on('click', '.megamenu', function() {
        let hiddenMegamenuField = 0;
        if($(this).prop('checked')==true){
            hiddenMegamenuField = 1;
        }
        $(this).closest('.innermenubody').find('.hidden-megamenu-field').val(hiddenMegamenuField);
    })

    //NewTab action
    $(document).on('click', '.newwindow', function() {
        let hiddenNewtabField = 0;
        if($(this).prop('checked')==true){
            hiddenNewtabField = 1;
        }
        $(this).closest('.innermenubody').find('.hidden-newtab-field').val(hiddenNewtabField);
    })

    //Sortable Nesting
    $('.mymenu').nestedSortable({
        handle: '.title',
        items: 'li',
        toleranceElement: '> div',
        revert: function(){
            // myAutoOrder('y')
            // return true;
        },
        change: function(){
            // myAutoOrder('y')
        },
        relocate: function(){
            myAutoOrder()
            // return true;
        }
    });

    //Auto arrange Hidden field
    function myAutoOrder(){
        let mymenu = $('.mymenu').find('li');
        let serialInside = 1;
        let mymenulength = mymenu.length;
        for(let i=0; i<mymenulength; i++){
            $(mymenu[i]).children('.innermenu').children('.innermenubody').find('.hidden-order-field').val(serialInside);
            if(!$(mymenu[i]).parent().hasClass('mymenu')){
                $(mymenu[i]).children('.innermenu').children('.innermenubody').find('.hidden-parent-field').val($(mymenu[i]).parent().parent().children('.innermenu').children('.innermenubody').find('.hidden-order-field').val());
                $(mymenu[i]).children('.innermenu').children('.innermenubody').find('.megamenu').prop('checked', false);
                $(mymenu[i]).children('.innermenu').children('.innermenubody').find('.hidden-megamenu-field').val('0');
            }else{
                $(mymenu[i]).children('.innermenu').children('.innermenubody').find('.hidden-parent-field').val('0');
            }
            serialInside++;
        }
        return true
    }

    //Action when window gets loaded first
    function firstload(){
        $('.route-check-box').prop('checked', false);
        $('#link-data').val('');
        $('#link-name').val('');
    }

    function newItem(serial, itemName, type, itemValue, requiredParams, optionalParams){
        let output = '<li class="individual-menu-item"><div class="innermenu"><div class="innermenuhead"><div class="title">';
        output = !itemName ? output + 'Unnamed' : output + itemName;
        output = output + '</div><div class="type"><span class="arrow-icon">';
        output = output + type;
        output = output + '<i class="fa fa-caret-right"></i></span></div></div><div class="innermenubody"><p><label>Navigation Label<br></label>';
        output = output + '<input type="text" class="name" value="'+itemName+'" name="menu_item['+serial+'][name]"></p>';
        if(type ==='link'){
            output = output + '<p><label>Link<br></label><input type="text" class="custom-link-field prevent-default" value="'+ itemValue +'" name="menu_item['+serial+'][value][name]"></p>';
        } else if (type === 'page'){
            output = output + '<p style="padding-top:10px"><label>Page: '+ itemValue +'</label><input type="hidden" class="page-field prevent-default" value="'+ itemValue +'" name="menu_item['+serial+'][value][name]"></p>';
        }else {
            output = output + '<p style="padding-top:10px"><label>Route: '+ itemValue +'</label><input type="hidden" class="route-field prevent-default" value="'+ itemValue +'" name="menu_item['+serial+'][value][name]"></p>';


            let  fieldSet = ''
            if(requiredParams.length > 0 ) {
                fieldSet = '<fieldset class="border p-2 mb-2"><legend class="w-auto font-size-14">Parameters</legend>';
                output = output + fieldSet;
                $.each(requiredParams, function (key, param) {
                    output = output + '<p style="padding-top:10px"><label>' + _.startCase(param) + '</label><input type="text" class="route-param-field prevent-default parameter-required" value="" name="menu_item[' + serial + '][value][parameters][' + param + ']"></p>';
                });
            }

            if(optionalParams.length > 0 ) {
                if(!fieldSet){
                    fieldSet = '<fieldset class="border p-2 mb-2"><legend class="w-auto">Parameters</legend>';
                    output = output + fieldSet;
                }
                $.each(optionalParams, function (key, param) {
                    output = output + '<p style="padding-top:10px"><label>' + _.startCase(param) + ' (optional)</label><input type="text" class="route-param-field prevent-default" value="" name="menu_item[' + serial + '][value][parameters][' + param + ']"></p>';
                });
            }

            if(fieldSet){
                output = output + '</fieldset>';
            }
        }
        output = output + '<div class="row"><div class="col-sm-6"><p><label>Extra Class<br></label><input type="text" name="menu_item['+serial+'][class]" value="" class="prevent-default"></p></div><div class="col-sm-6"><p><label>Menu Icon<br></label><input type="text" name="menu_item['+serial+'][icon]" value="" class="prevent-default"></p></div></div><p><label>Beginning Text<br></label><input type="text" name="menu_item['+serial+'][beginning_text]" value="" class="prevent-default"></p><p><label>Ending Text<br></label><input type="text" name="menu_item['+serial+'][ending_text]" value="" class="prevent-default"></p><p class="mt-2"><label></label><input type="checkbox" class="newwindow"><em>Open link in a new window/tab</em></p><p class="mymgmenu"><label></label><input type="checkbox" class="megamenu"><em>Use As Mega Menu</em></p><hr class="myhrborder"><button class="deletebutton">Remove</button>';
        output = output + '<input type="hidden" value="' + type + '" name="menu_item['+serial+'][type]" class="hidden-type-field"><input type="hidden" name="menu_item['+serial+'][parent_id]" value="0" class="hidden-parent-field"><input type="hidden" name="menu_item['+serial+'][new_tab]" value="0" class="hidden-newtab-field"><input type="hidden" name="menu_item['+serial+'][mega_menu]" value="0" class="hidden-megamenu-field"><input type="hidden" name="menu_item['+serial+'][order]" value="0" class="hidden-order-field"></div></div></li>';
        return output;
    }

    function formatMenuData(){
        let serializedData= $('#menu-form').serializeArray();
        let jsonData ={};
        let regex = /\[([^\]]+)\]/g;
        serializedData.forEach(function(value, key){
            let match = value.name.match(regex);

            if(match.length > 1){
                let trim0=trimString(match[0]);
                let trim1= trimString(match[1]);
                if(!jsonData[trim0]){
                    jsonData[trim0] = {};
                }

                if(!jsonData[trim0][trim1]){
                    jsonData[trim0][trim1] = {};
                }
                if(match.length === 3){
                    let trim2 = trimString(match[2]);
                    if(!jsonData[trim0][trim1][trim2]){
                        jsonData[trim0][trim1][trim2] = {};
                    }
                    jsonData[trim0][trim1][trim2]=value.value;
                }else if(match.length === 4){
                    let trim2 = trimString(match[2]);
                    let trim3 = trimString(match[3]);

                    if(!jsonData[trim0][trim1][trim2]){
                        jsonData[trim0][trim1][trim2] = {};
                    }
                    if(!jsonData[trim0][trim1][trim2][trim3]){
                        jsonData[trim0][trim1][trim2][trim3] = {};
                    }
                    jsonData[trim0][trim1][trim2][trim3]=value.value;
                }else{
                    jsonData[trim0][trim1]=value.value;
                }
            }
        });

        return JSON.stringify(jsonData);
    }

    function trimString(str){
        return str.replace(/\[|\]/g,'');
    }

    $('.menu-submit').on('click',function(){
        let error = false;
        $('.parameter-required').each(function (){
            if(!$(this).val()){
                $(this).focus().addClass('is-invalid');
                $(this).closest('.innermenubody').show()
                    .siblings('.innermenuhead')
                    .find('.fa-caret-right')
                    .removeClass('fa-caret-right')
                    .addClass('fa-caret-down');
                error = true;
            }
        });

        if(error){
            flashBox('error', 'All required');
            return;
        }

        let a = myAutoOrder();
        if(a==true){
            $('.menu-submit').attr('disabled','disabled');

            $('#menu-submit-form').find('input[name="formData"]').val(formatMenuData());
            $('#menu-submit-form').submit();

            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            /*request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status === 200) {
                    var jsonData = JSON.parse(request.response);
                    console.log(jsonData);
                }
            };*/
            /*$.ajax({
                type: 'post',
                url: $('#menu-form').attr('action'),
                data: {
                    formData:formatMenuData(),
                    '_token':$('meta[name="csrf-token"]').attr('content')
                },
                dataType: 'JSON',
                success: function (returnData) {
                    if(returnData.error){
                        flashBox('error', returnData.error);
                    }
                    else if(returnData.success) {
                        flashBox('success', returnData.success);
                    }
                    $('.menu-submit').removeAttr('disabled');
                },
                error: function (ajaxStatus) {
                    flashBox('error', 'Invalid data in field(s)');
                    $('.menu-submit').removeAttr('disabled')
                }
            });*/
        }
    })
});

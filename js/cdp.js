$(function() {
    var index;
    var shopdata;
    var areadata;
    getone();

    function getone() {
        $.ajax({
            url: 'http://139.199.157.195:9090/api/getgsshop',
            // url: 'http://mmb.ittun.com/api/getgsshop',
            success: function(data) {
                var html = template('list1', data);
                $('.popboxone').html(html);
                ClickO();
                gettwo();
            }
        });
    }



    function gettwo() {
        $.ajax({
            url: 'http://139.199.157.195:9090/api/getgsshoparea',
            // url: 'http://mmb.ittun.com/api/getgsshoparea',
            success: function(data) {
                var html = template('list2', data);
                // console.log(data);
                $('.popboxtwo').html(html);


                areadata = $('.popboxone').data('shopid');
                shopdata = $('.on:first(0)').data('id');
                // console.log(shopdata)
                three(shopdata, areadata);
                ClickT();
                // Click3()

            }

        });
    }


    function three(sip, aip) {
        $.ajax({
            url: 'http://139.199.157.195:9090/api/getgsproduct',
            // url: 'http://mmb.ittun.com/api/getgsproduct',
            data: {
                shopid: sip,
                areaid: aip
            },
            success: function(data) {
                var html = template('list3', data);
                $('.main_bds').html(html);
            }
        })
    }

    function ClickO() {

        $('.on').click(function() {
            index = $(this).index();
            $('.popbox').eq(index).toggle().siblings('.popbox').hide();
        });

    }

    function ClickT() {
        $('.popbox').on('click', 'li', function() {
            if ($.isNumeric($(this).data('shopid'))) {
                shopdata = $(this).data('shopid');
                var lihtml = $(this).text();
            } else
            if ($.isNumeric($(this).data('areaid'))) {
                areadata = $(this).data('areaid');
                var lihtml = $(this).text().slice(0, 2);
            } else {
                return;
            }
            lihtml = lihtml + '<i></i>';
            $('.on').eq(index).find('a').html(lihtml);
            $(this).parent().parent().hide();
            $(this).children('i').show().parent().siblings().children('i').hide();
            console.log(areadata)
            three(shopdata, areadata);

        })

    }



    // function ClickT() {
    //     $('.popboxone .liname').click(function() {
    //         var lihtml = $(this).text();
    //         lihtml = lihtml + '<i></i>';
    //         console.log(lihtml)
    //         $('.on').eq(index).find('a').html(lihtml);
    //         $(this).parent().parent().hide();
    //         $(this).children('i').show().parent().siblings().children('i').hide();
    //         shopdata = $(this).data('shopid');
    //         three(shopdata, areadata);

    //     })

    // }

    //     function Click3() {
    //         $('.popboxtwo .liname').click(function() {
    //             var lihtml = $(this).text().slice(0, 2);
    //             lihtml = lihtml + '<i></i>';
    //             $('.on').eq(index).find('a').html(lihtml);
    //             $(this).parent().parent().hide();
    //             $(this).children('i').show().parent().siblings().children('i').hide();
    //             areadata = $(this).data('areaid');
    //             three(shopdata, areadata);

    //         })

    //     }

})


// parent.on('click','a',function(){
//     $(this)
// })

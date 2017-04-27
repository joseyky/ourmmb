$(function () {
    //用懒加载技术实现页面加载
    init();
    //初始化方法
    function init() {
        //获取url
        var url = location.href;
        var index = url.lastIndexOf('=');
        var couponid = parseInt(url.slice(index + 1));
        //判断是那种优惠券，并填到相应标题
        if (couponid === 0) {
            $('title').html('优惠券--肯德基慢慢买');
            $('#navlast').html('肯德基优惠券');
        } else if (couponid === 1) {
            $('title').html('优惠券--必胜客慢慢买');
            $('#navlast').html('必胜客优惠券');
        }
        else if (couponid === 2) {
            $('title').html('优惠券--券老大慢慢买');
            $('#navlast').html('券老大优惠券');
        }
        else if (couponid === 3) {
            $('title').html('优惠券--哈根达斯慢慢买');
            $('#navlast').html('哈根达斯优惠券');
        }
        getCouponProduct(couponid);
    }

    var Data = {};
    //获取优惠券数据
    function getCouponProduct(couponid) {
        $.ajax({
            type: 'get',
            url: 'http://139.199.157.195:9090/api/getcouponproduct',
            dataType: 'json',
            data: {couponid: couponid},
            success: function (data) {
                Data = data;
                render();
            }
        })
    }

    function render() {
        //缓存数据的对象
        var newData = {result: []};
        //每次加载10条数据
        var len = 10;
        //如果还剩下的数据不够10条，那么全部放到缓存中
        if (Data.result.length <= 10) {
            len = Data.result.length;
        }
        //放数据
        for (var i = 0; i < len; i++) {
            newData.result.push(Data.result.shift());
        }
        //渲染
        var html = template('coupontmp', newData);
        $('.layout .content').append(html);
        //设置轮播图的宽度并用模板渲染
        var width = $('.lunbokou ul').width()+len*200;
        $('.lunbokou ul').width(width);
        $('.lunbokou ul').append(template('lunbotmp', newData));
//            console.log($(".pic"));
        lubo();
//            console.log(newData);
    }

    console.log($('.layout>.content').height());
    //绑定滚动事件，距离底部还不到100px时加载数据
    $(window).scroll(function () {
        if (Data.result.length == 0) {
            return;
        }
        var height = $('.layout>.content').height() - $(document.body).height() - $(document.body).scrollTop() + $('footer').height() + $('header').height();
        console.log(height);
        if (height < 100) {
            render();

        }
    });

    //优惠券轮播图
    function lubo(){
        var $ul = $('.lunbokou ul');
        var index = 0;
//        console.log($ul);
        console.log($('.content').find('li'));
        var length =  $('.content').find('li').length;
        console.log(length);
//            var length =  47;
        var imgWidth = $ul.find('img').eq(0).width();
//            var imgWidth = 200;

//            console.log($(".pic"));
        //轮播图向右点击事件
        $('.right').click(function () {
            right();
            return false;
            //event.stopPropagation();
        });
        //向左点击事件
        $('.left').click(function () {
            left();
            return false;
        });
        //绑定点击图片出现轮播图事件
        for(var i = 0; i < length; i++){
            (function(j){
                $('.pic').eq(j).click(function () {
                    $('.mask').css('display','block');
                    $('.lunbo').css('display','block');
                    index=j;
                    removeTransition();
                    setTranslateX(-index*imgWidth)
                });
            })(i)
        }
        //遮罩点击事件
        $('.mask').click(function () {
            $('.mask').css('display','none');
            $('.lunbo').css('display','none');
        });
        //轮播图点击事件
        $('.lunbo').click(function () {
            $('.mask').css('display','none');
            $('.lunbo').css('display','none');
        });

        //向右轮播的方法
        function right() {
            index++;
            if(index>length-1){
                index = length-1;
            }
            addTransition();
            setTranslateX(-index*imgWidth);
        }

        //向左轮播的方法
        function left() {
            index--;
            if(index<0){
                index = 0;
            }
            addTransition();
            setTranslateX(-index*imgWidth);
        }
        //封装添加过渡的方法
        function addTransition() {
            $ul.css('transition', 'all .2s');
            $ul.css('-webkit-transition', 'all .2s');
        }
        //封装移除过渡的方法
        function removeTransition() {
            $ul.css('transition', 'none')
            $ul.css('-webkit-transition', 'none')
        }
        //封装位移的方法
        function setTranslateX(x) {
            $ul.css('transform', 'translateX(' + x + 'px)');
        }
    }

});
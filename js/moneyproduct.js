$(function () {
    //获取网址
    var url = location.href;
    var index = url.lastIndexOf('=');
    var productid = parseInt(url.slice(index+1));
    //请求数据
    $.ajax({
        type: 'get',
        url:'http://139.199.157.195:9090/api/getmoneyctrlproduct',
        data: {productid: productid},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            //产品名字
            var productName = data.result[0].productName;
            //在面包屑导航栏如果名字太长直接取得前面8个字符串+...
            $('title').html(productName);
            $(".thistit").html(productName.slice(0,13)+'...');
            $(".content .title").html(productName);
            //将数据填进去
            $(".content h4").html(data.result[0].productPinkage);
            $(".content .info .from").html(data.result[0].productFrom);
            $(".content .info .time").html(data.result[0].productTime);
            $(".content .info .auther").html(data.result[0].productTips);
            $(".content .text").html(data.result[0].productInfo);
            $(".content .text1").html(data.result[0].productInfo1);
            $(".content .text2").html(data.result[0].productInfo2);
            $(".content .sm").html(data.result[0].productImgSm);
            $(".content .big").html(data.result[0].productImg2);
            $(".pl").html(data.result[0].productComment);
            $(".productCity").html(data.result[0].productCity);
        }
    })
})
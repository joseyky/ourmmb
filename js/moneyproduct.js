$(function () {
    //��ȡ��ַ
    var url = location.href;
    var index = url.lastIndexOf('=');
    var productid = parseInt(url.slice(index+1));
    //��������
    $.ajax({
        type: 'get',
        url:'http://139.199.157.195:9090/api/getmoneyctrlproduct',
        data: {productid: productid},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            //��Ʒ����
            var productName = data.result[0].productName;
            //�����м�������������̫��ֱ��ȡ��ǰ��8���ַ���+...
            $('title').html(productName);
            $(".thistit").html(productName.slice(0,13)+'...');
            $(".content .title").html(productName);
            //���������ȥ
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
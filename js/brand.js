$(function () {
    //获取地址
    var url = location.href;
    //获取=号在url中的索引
    var index = url.lastIndexOf('=');

    if (index != -1) {
        //获取brandTitleId参数
        var brandTitleId = parseInt(url.substring(index + 1));
        //ajax请求数据
        $.ajax({
            type: "get",
            url: "http://139.199.157.195:9090/api/getbrand",
            data: {brandtitleid: brandTitleId},
            dataType: "json",
            success: function (data) {
                //获取具体产品的字符串
                var str = data.result[0].brandName.slice(-4);
//                    console.log(str);
                //把产品字符串填进去
                $('title').html(str+'什么牌子好，'+str+'十大品牌排行榜');
                $("nav").append("<span>" + str + "哪个牌子好</span>");
                $("#good").prepend("<p id='hp'>" + str + "哪个牌子</p>");
                $("#soldrank").prepend("<p>" + str + "产品销量排行</p>");
                $("#comment").prepend("<p>" + str + "最新评论</p>");
                //生成模板
                var goodTmp = template("goodtmp", data);
                //用模板渲染页面
                $("#tmp1").append(goodTmp);
                //给排名前三的产品序号设置不同背景色
                $("#tmp1 li").eq(0).find('span').css({'backgroundColor': 'red'});
                $("#tmp1 li").eq(1).find('span').css({'backgroundColor': 'orange'});
                $("#tmp1 li").eq(2).find('span').css({'backgroundColor': 'yellowgreen'});
            }
        });

        //第二次请求ajax去获取产品排名数据
        $.ajax({
            type: "get",
            url: "http://139.199.157.195:9090/api/getbrandproductlist",
            data: {brandtitleid: brandTitleId, pagesize: 4},
            dataType: "json",
            success: function (data) {
                //渲染页面
                var ranktmp = template("ranktmp", data);
                $("#tmp2").append(ranktmp);
                var productId = data.result[0].productId;
                var img = data.result[0].productImg;
                console.log(img);
                var productName = data.result[0].productName;
                //把产品名字填到标题中去
                $(".ping .title").html(productName);
                console.log(productId);
                //第三次请求ajax去获取评论数据
                $.ajax({
                    type: "get",
                    url: "http://139.199.157.195:9090/api/getproductcom",
                    data: {productid: productId},
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        var commenttmp = template("commenttmp", data);
                        $("#tmp3").append(commenttmp);
                        //把图片标签和标题填进相应位置
                        $(".pic2").html(img);
                        $(".ping .title").html(productName);
                    }
                });
            }
        });
    }
})
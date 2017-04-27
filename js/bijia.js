/**
 * Created by meng on 2017/3/30.
 */
'use strict';
$(function () {

    $.ajax({
        url: "http://139.199.157.195:9090/api/getproduct",
        data:{
            productid:getQueryString("productId")
        },
        success: function (data) {
            //得到data数据的里的productName属性，并取出空格前的第一项，赋值给当前的导航栏
            var title = data.result[0].productName.split(" ")[0];
            $("#listTitle3").html(title).attr("href",window.location);
            //读取本地中的sessionStorage储存的标题和路径数据，生成面包屑导航栏
            $("#listTitle2").html(getStorage("listName")).attr("href",getStorage("listHref"));
            var html = template("detailsTmp",data);
            $("#productMainbody").html(html);
        }
    });
    $.ajax({
        url: "http://139.199.157.195:9090/api/getproductcom",
        data:{
            productid:getQueryString("productId")
        },
        success: function (data) {
            var html = template("commentTmp",data);
            $("#comment").html(html);
        }
    });

})
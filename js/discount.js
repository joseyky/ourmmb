'use strict';
$(function() {

    // 获取 参数
    var data = getUrlParam(window.location.search);

    // 渲染数据

    setProductList($('.discount-product'), data);

    function setProductList(dom, data, callback) {
        $.ajax({
            url: "http://139.199.157.195:9090/api/getdiscountproduct",
            data: data,
            success: function(data) {
                var html = template('discountProduct', data);
                dom.html(html);
                console.log(html);
            }
        });
    }

    // 截取 url 字符串参数
    function getUrlParam(url) {
        if ((/\?/g).test(url)) {
            var arrURL = url.slice(1).split('=');
            var obj = {};
            obj[arrURL[0]] = arrURL[1];
            return obj;
        }
    }
});
/**
 * Created by meng on 2017/3/30.
 */
'use strict';
$(function () {
    (function () {
        $.ajax({
            url: "http://139.199.157.195:9090/api/getinlanddiscount",
            success: function (data) {
                var html = template("productTmp", data);
                $("#product_recommend").html(html);
            }
        })
    })();
})
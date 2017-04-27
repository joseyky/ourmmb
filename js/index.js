/**
 * Created by meng on 2017/3/30.
 */
'use strict';
$(function () {
    $.ajax({
        url: "http://139.199.157.195:9090/api/getindexmenu",
        success: function (data) {
            var html = template("menuTmp", data);
            $("#menu").html(html);
            //给更多按钮添加切换功能
            $(".menu-item:nth-child(8)").click(function () {
                //$().toggle实现功能：如果元素是显示的就将其隐藏，如果元素是隐藏的就将其显示
                //参数200表示延迟200ms执行
                $(".menu-item:nth-last-child(-n+4)").toggle(200);
            })
        }
    });

    $.ajax({
        url: "http://139.199.157.195:9090/api/getmoneyctrl",
        success: function (data) {
            var html = template("recommendTmp", data);
            $("#recommend").html(html);
        }
    })
})



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
            //�����ఴť����л�����
            $(".menu-item:nth-child(8)").click(function () {
                //$().toggleʵ�ֹ��ܣ����Ԫ������ʾ�ľͽ������أ����Ԫ�������صľͽ�����ʾ
                //����200��ʾ�ӳ�200msִ��
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



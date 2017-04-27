$(function () {
    //调用封装函数取得字符串
    var categoryid = getQueryString('categoryid');
    var pageid = getQueryString('pageid');

    $.ajax({
        url: 'http://139.199.157.195:9090/api/getcategorybyid',
        data: {categoryid: categoryid},
        success: function (data) {
            var html = template('directoryTmp', data);
            $('.product-list-title').html(html);
        }
    })


    $.ajax({
        url: 'http://139.199.157.195:9090/api/getproductlist',
        data: {
            "categoryid": categoryid,
            "pageid": pageid
        },
        success: function (data) {
            var html = template('listTmp', data);
            $('.product-list>ul').html(html);
            var html = template('pageTmp', data);
            $('.page').html(html);
            //向上取整获得总页数
           // console.log(data);
            var c = Math.ceil(data.totalCount / data.pagesize);


            //添加点击事件
            //点击上一页
            $('#prev').click(function () {
                // console.log(pageid);
                //如果当前的的页面是第一页，不做任何操作
                if (pageid <= 1) return;
                //否则跳转
                //获取当前页面地址
                var location = window.location.href;
                //更换当前页面的pageid参数的值，并跳转页面
                window.location.href = location.substr(0, location.length - 1) + (parseInt(pageid) - 1);
            });
            //点击下一页
            $('#next').click(function () {
                 //如果当前的的页面是最后一页，不做任何操作
                if (pageid >= c) return;
                //获取当前页面地址
                var location = window.location.href;
                 //更换当前页面的pageid参数的值，并跳转页面
                window.location.href = location.substr(0, location.length - 1) + (parseInt(pageid) + 1);
            });
            // 底部页码

            //定义一个空的字符串
            var str = '';
            //循环遍历总的页数
            for (var i = 1; i <= c; i++) {
                //当pageid等于当前的页数时
                if (pageid == i) {
                    //输出拼接的字符串
                    str += "<option value=" + i + " selected>" + i + "/" + c + "</option>";
                } else {
                    //其余的都是拼接这个
                    str += "<option value=" + i + ">" + i + "/" + c + "</option>";
                }
            }
            //替换页码
            $('#selectPage').html(str);


            //页码与pageid绑定
            $('#selectPage').change(function () {
                //获取到当前选中的页数
                var pageVal = $(this).val();
                //转换成字符串赋值给pageid
                pageid = pageVal-'';
                //获取当前页面地址
                var location = window.location.href;
                //根据当前pageid参数跳转页面
                window.location.href = location.substr(0, location.length - 1) + pageVal;
            })
        }
    })

})


$(function () {
    $.ajax({
        url: 'http://139.199.157.195:9090/api/getcategorytitle',
        success: function (data) {
            var html = template('kind', data);
            $('#category').html(html);
            $('.panel').click(function () {
                var titleId = $(this).attr('data-titleId');
                var that = this;

                $.ajax({
                    url: 'http://139.199.157.195:9090/api/getcategory',
                    data: {
                        titleid: titleId
                    },
                    success: function (data) {
                        var html = template('kindxia', data);
                        $(that).find(".panel-collapse").html(html);

                        $('.panel-body a').click(function () {
                            //绑定单击事件
                            //获取当前a标签的html内容并存入本地储存
                            setStorage("listName", $(this).html());
                            //获取当前a标签的href内容并存入本地储存
                            setStorage("listHref", $(this).attr("href"))
                        })
                    }
                })
            })
        }
    })

})
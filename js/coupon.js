
        // 通过$.ajax进行jsonp请求
    $(function(){
        $.ajax({
            url:'http://139.199.157.195:9090/api/getcoupon',
            dataType:'jsonp',
            success:function(data){
                console.log(data);
                //通过模板生成节点
                var html=template('cou',data);
                //将节点加入到页面中
                $('.coupon').html(html);

            }
        })
    })

        /*/*获取url传递过来的参数*/
        // function  GetQueryString(name){
        //     //构造一个含有目标参数的正则表达式对象
        //     var reg=new RegExp("(^|&)"+name+"=([^&])(&|$)","i");
        //     //匹配目标参数
        //     var r=window.location.search.substr(1).match(reg);
        //     //返回参数值
        //     if(r!=null) return (r[2]);
        // }

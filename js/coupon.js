
        // ͨ��$.ajax����jsonp����
    $(function(){
        $.ajax({
            url:'http://139.199.157.195:9090/api/getcoupon',
            dataType:'jsonp',
            success:function(data){
                console.log(data);
                //ͨ��ģ�����ɽڵ�
                var html=template('cou',data);
                //���ڵ���뵽ҳ����
                $('.coupon').html(html);

            }
        })
    })

        /*/*��ȡurl���ݹ����Ĳ���*/
        // function  GetQueryString(name){
        //     //����һ������Ŀ�������������ʽ����
        //     var reg=new RegExp("(^|&)"+name+"=([^&])(&|$)","i");
        //     //ƥ��Ŀ�����
        //     var r=window.location.search.substr(1).match(reg);
        //     //���ز���ֵ
        //     if(r!=null) return (r[2]);
        // }

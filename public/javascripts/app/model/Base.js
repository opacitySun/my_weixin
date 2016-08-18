
define(['require','jquery'],function(require,$){
    function modelBase(id){
        this.id = id;
    }

    modelBase.prototype = {
        getAjax:function(url,data,fn){
            $.ajax({
                cache : false,
                data : data,
                url : url,
                timeout:1000,
                dataType : "json",
                async : true,
                type : "get",
                //contentType: "application/json; charset=utf-8",
                success : function(data) {
                    console.log(data);
                    fn(data);//执行自定义的回调方法 fn
                },
                error:function(err){
                    console.log(err);
                }
            });
        },
        postAjax:function(url,data,fn){
            $.ajax({
                cache : false,
                data : data,
                url : url,
                timeout:1000,
                dataType : "json",
                async : true,
                type : "post",
                //contentType: "application/json; charset=utf-8",
                success : function(data) {
                    console.log(data);
                    fn(data);//执行自定义的回调方法 fn
                },
                error:function(err){
                    console.log(err);
                }
            });
        }
    };

    return modelBase;
});
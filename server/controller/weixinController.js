var http = require("http");
var url = require("url");
var crypto = require("crypto");

/**  
 * 提供操作表的公共路由，以供ajax访问  
 * @returns {Function}  
 */ 
exports.outerConnectAction = function(app){
    //
    app.all("/outerUserFindAction",function(req,res){
        
    });
}

/**  
 * 验证token 
 * @returns {Function}  
 */  
exports.validateToken = function(app) {   
    app.use(function(req,res,next){
        function sha1(str){
          var md5sum = crypto.createHash("sha1");
          md5sum.update(str);
          str = md5sum.digest("hex");
          return str;
        }

        var query = url.parse(req.url,true).query;
        var signature = query.signature;
        var timestamp = query["timestamp"];
        var nonce = query.nonce;  
        var echostr = query.echostr;  
                    
        var token = "sunxxjjs8ceow90xc92";
        var tmpArr = [token, timestamp, nonce];
        tmpArr.sort();
        var tmpStr = tmpArr.join('');
        tmpStr = sha1( tmpStr );
        
        if( tmpStr == signature ){
            res.end(echostr);
            console.log("Confirm and send echo back");
        }else{
            res.end("false");
            console.log("Failed!");
        }
    });
}  
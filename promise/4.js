//通过回调方式进行多个异步调用
function  getURLCallback(URL,callback){
    var req=new XMLHttpRequest();
    req.open('GET',URL,true);
    req.onload=function(){
         if(req.status===200){
             callback(null,req.responseText);
         }else{
             callback(new Error(req.statusText),req.response);
         }
    };
    req.onerror=function(){
        callback(new Error(req.statusText));
    };
    req.send();
}
//对json数据进行安全解析，直接使用json.parse函数可能会报错，
function jsonParse(callback,error,value){
    if(error){
        callback(error,value);
    }else{
        try{
            var result=JSON.parse(value);
            callback(null,result);
        }catch(e){
            callback(e,value);
        }
    }
}
//发送xhr请求
var request={
      comment:function getComment(callback){
          return getURLCallback('http://azu.github.io/promises-book/json/comment.json',jsonParse.bind(null,callback))
      },
    people:function getPeople(callback){
          return getURLCallback('http://azu.github.io/promises-book/json/people.json',jsonParse.bind(null,callback));//使用 jsonParse 函数的时候我们使用了 bind 进行绑定，通过使用这种偏函数（Partial Function）的方式就可以减少匿名函数的使用。（如果在函数回调风格的代码能很好的做到函数分离的话，也能减少匿名函数的数量）

        //jsonParse.bind(null,callback) 等价于下面的写法
        // function bindJSONParse(error,value{
        //    jsonParse(callback,error,value);
        //    }

    }
};
//启动多个xhr请求，当所有请求返回时调用callback，防止多个xhr处理进行嵌套调用层次过深
function allRequest(requests,callback,results) {
    if (requests.length === 0) {
        return callback(null, results);
    }
    var req = requests.shift();
    req(function (error, value) {
        if (error) {
            //错误优先处理
            callback(error, value);
        } else {
            results.push(value);
            allRequest(requests, callback, results);
        }
    })
}
function main(callback){
    allRequest([request.comment,request.people],callback,[]);
}
//运行例子
main(function(error,results){
    if(error) {
        return console.error(error);
    }
});
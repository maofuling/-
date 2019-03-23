
var  express=require('express');
var app=express();
//创建requestTime中间件函数，并为其添加requestTime对请求对象调用的属性
var  requestTime=function(req,res,next){
    req.requestTime=Date.now();
    next();
};
app.use(requestTime);//使用中间件

app.get('/',function (req,res){
    var  responseText='Hello world';
    responseText+='<small>Requestd at: '+req.requestTime+'</small>';
    res.send(responseText);
});
app.listen(3001);

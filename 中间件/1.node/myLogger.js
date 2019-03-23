var  express=require('express');
var app=express();
var  myLogger=function(req,res,next){
    console.log('LOGGED');
    next();
};
//调用next(),会调用应用程序中的下一个中间件函数，next()函数是传递给中间件函数的第三个参数，可以命名为任何东西，但命名为‘next()'为约定。

app.use(myLogger);//加载中间件，同时指定中间件。，
app.get('/',function(req,res){  //
    res.send('Hello World!');
});

app.listen(3000);



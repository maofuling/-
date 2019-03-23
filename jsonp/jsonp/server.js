let  express=require('express');//引入
let app=express();//执行
app.get('/say',function(req,res){
    let {wd,cb}=req.query;//字符串
    console.log(wd);
    res.end("${cb}('me')");
});
app.listen(3000);
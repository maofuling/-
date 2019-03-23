let express=require('express');
let app=express();
let whiteList=['http://localhost:3000'];

app.use(function(req,res,next){
    let origin=req.headers.origin;
    if(whiteList.includes(origin)){
        //设置那个源可以访问
        res.setHeader('Access-Control-Allow-Origin',origin);
        res.setHeader('Access-Control-Allow-Headers','name');

       res.setHeader('Access-Control-Allow-Methods','PUT');
       //允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true);
        //存活时间
        res.setHeader('Access-Control-Allow-Max-age',6);
        //允许返回的头，
        res.setHeader('Access-Control-Allow-Expose-Headers','name');

        if(req.method==='OPTIONS'){
            res.end();//options请求不做处理
        }
    }
    next();//往下执行
})
app.put('/getData',function(req,res){
    console.log(req.headers);
    res.end("我不在家");
app.get('/getData',function(req,res){
    console.log(req.headers);
    res.end("我不在家")
});
app.use(express.static(__dirname));
app.listen(4000);
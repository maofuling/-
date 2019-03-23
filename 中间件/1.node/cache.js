"use  strict"
let  express=require('express');
let    app=express();
let   mcache=require('memory-cache');
var  cache=(duration)=>{
     return(req,res,next)=>{
         let  key ='_express_'+req.originUrl||req.url;
         let  cacheBody=mcache.get(key);
         if(cacheBody) {
             res.send(cacheBody);
     }else{
         res.sendResponse=res.send;
          res.send=(body)=>{
               mcache.put(key,body,duration*1000);
               res.sendResponse(body)
          }
          next()
         }
    }
};
app.use('/',cache(10),(req,res)=>{
    setTimeout(()=>{
        res.render('index',{title:'key',message:'hello ',data:new Date()},5000)
    })
})
app.listen(4001);

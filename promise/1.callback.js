import {setTimeout} from 'timers';
//异步的发展流程
// 异步：先干一件事 中间去干其他的事，最终在回来干这件事
// 同步：同步连续执行
// node支持异步
// callback ->  promise -> generator + co -> async+await(语法糖)
// 读文件读到后再去写文件
let  fs=require('fs');//readFile
//1.异步不支持try/catch/.try/catch只针对同步代码
fs.readFile('./2.promise/1.txt','utf8',function(err,data){
    //错误优先处理
    fs.readFile(data,'utf8',function(err,data){
        //错误优先处理
        console.log(data);
    })
});
//并行 无法在同一时刻合并两节异步的结果，异步方案不支持return
fs.readFile('./2.promise/2.txt','utf8',function(err,data){
     //错误优先处理
    console.log(data);
});


//高阶函数
//函数可以作为参数或者返回值

//判断数据类型isType
function isType(type,content){
     return Object.prototype.toString.call(content)==='[object ${type}]';
}
//1)批量生成函数
function isType(type){
    //偏函数
    return  function(content){
          return  Object.prototype.toString.call(content)==='[object ${type}]';
    }
}
let  isString=isType('String');
let isArray=isType('Array');

console.log(isArray('hello'));
//2)预置函数作为参数loadsh_.after
function after(times,callback){
    return function(){
         if(_times===0){
             callback();
         }
    }
}
let eat=after(3,function(){
    console.log('饱了');
});
eat();
eat();
eat();

let   fs=require('fs');
function a(times,callback){
    //可以缓存函数，当达到条件时执行
    let  time=times;
    let arr=[];
    return function(data){
        arr.push(data);
        if(_time===0){callback(arr);
        }
    }
}
let out=a(4,function(arr){
    console.log(arr);
});
fs.readFile('./2.promise/1.txt','utf8',function(err,data){
    out(data)
});
fs.readFile('./2.promise/2.txt','utf8',function(err,data){
    out(data)
})
fs.readFile('./2.promise/1.txt','utf8',function(err,data){
    out(data)
})
fs.readFile('./2.promise/2.txt','utf8',function(err,data){
    out(data)
})

//promise解决了回调函数地狱，不会导致难以维护then
//解决同步异步返回结果，按照顺序
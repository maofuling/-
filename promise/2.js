function asyncFunction(){
    //new promis构造器之后，返回一个promise对象
    return new Promise(function (resolve,reject){
        setTimeout(function(){
             resolve('Async  Hello world');
        },16)
        //该promise对象会在setTimeout之后的16ms时被resolve, 这时 then 的回调函数会被调用，并输出 'Async Hello world' 。
    });
}
asyncFunction().then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
});
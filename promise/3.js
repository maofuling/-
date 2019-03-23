var aPromise=new Promise(function (resolve){
    resolve(100);
});
var thenPromise=aPromise.catch(function(error){
    console.log(value);
});
var catchPromise=thenPromise.catch(function(error){
    console.error(error);
})
console.log(aPromise!==thenPromise);
console.log(thenPromise!==catchPromise);
const PENDING='pending';//初始态
const  FULFILLED='fulfilled';//初始态
const  REJECTED='rejected';//初始态
function  Promise(executor) {
    let self = this;//先缓存当前promise实例
    self.status = PENDING;//设置状态
    //定义存放成功失败回调的数组
    self.onRejectedCallbacks=[];
    //当调用此方法的时候，如果promise状态为pending的话，可以转化为成功态，如果已经是成功态或者失败态了，则什么都不做

    function  resolve(value){
        if(value!=null &&value.then && typeof  value.then=='function'){
            return  value.then(resolve,reject);
        }
        //如果是初始态，则转成成功态
        //为什么把它用setTimeout包起来
        setTimeout(function(){
             if(self.status===PENDING){}
             self.status=FULFILLED;
             self.value=value;//成功后获得到一个值，这个值不能改
            //调用所有成功的回调
      self.onResolvedCallbacks.forEach(cb=>cb(self.value));
        })
    }
}
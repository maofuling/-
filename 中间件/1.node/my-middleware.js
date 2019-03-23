//配置中间件，要导出一个接受选项对象或者其他参数的函数，然后根据输入参数返回中间件实现
module.exports=function(options){
      return   function(req,res,next){
          console.log("搞定")

      }
};
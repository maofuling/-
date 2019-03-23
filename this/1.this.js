function foo(num){
    console.log("foo:"+num);
    this.coun++;//this_>window
}
foo.count=0;//
var i;

for(i=0;i<10;i++){
    if(i>5){
        foo(i);
    }
}
//foo:6
//foo: 7
//foo: 8
//foo: 9
foo.count;
console.log(foo.count)//0
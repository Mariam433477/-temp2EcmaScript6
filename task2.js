var fruits=["apple" , "strawberry" ,"banana" ,"orange" ,"mango"];
//every
var result=fruits.every(value => typeof(value)== "string");
 console.log(result);

//some
var result2=fruits.some(value =>value.startsWith("a"));
console.log(result2);
//filter
var result3=fruits.filter(value=>{
    if(value.startsWith("b")||value.startsWith("s")){
        console.log(value);
    }
});
////
var test = fruits.map((fruit,index)=>{
    return fruit;
})
console.log(test);

//for each 
fruits.forEach((fruit,index)=>{
    console.log(` ${fruit} index ${index}`);
})

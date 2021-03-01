function FizzBuzz(n){
    for (var i=1;i<=n;i++){
        var str = '';
        if(i%3===0)str+='Fizz';
        if(i%5===0)str+='Buzz';
        if(str==='')str=i;
        console.log(str);
    }
}

//shortest answer
function FizzBuzz(n){
for(let i=1;i<=n;i++)
console.log((i%3?'':'fizz')+(i%5?'':'buzz')||i)
}
const sum=(a:string,b:string) => {
    if(a===''){
        return b
    }
    if(b===''){
        return a
    }
    for (;a.length < b.length;) a = '0' + a;
    for (;b.length < a.length;) b = '0' + b;
    
    let result=[]
    let ostatok=0

    for(let i=a.length-1;i>=0;i--){
        let sum=parseInt(a[i])+parseInt(b[i])+ostatok
        ostatok=Math.floor(sum/10)
        result.push(sum%10)
    }
    if (ostatok!==0) result.push(ostatok);
    if(result[result.length-1]===0){
        result.pop()
    }
    return result.reverse().join('')
}
console.log(sum('00103', '08567'));


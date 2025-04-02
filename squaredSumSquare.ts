const listSquared=(m:number,n:number) => {
    const resultArray=[]
    for(let i=m;i<=n;i++){
        let squaredSum=0
        for(let j=1;j<=i;j++){
            if(i%j===0){
                squaredSum+=j**2
            }
        }
        if(Math.sqrt(squaredSum)===Math.floor(Math.sqrt(squaredSum))){
            resultArray.push([i,squaredSum])
        }
    }
    return resultArray
}
console.log(listSquared(1,256));
    
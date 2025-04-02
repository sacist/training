const tribonacci=(signature:number[],n:number) => {
    const signatureCopy=[...signature]
    for(let j=0;j<n-3;j++){
        let tempSum=0
        for(let i=signatureCopy.length-3;i<signatureCopy.length;i++){
            tempSum+=signatureCopy[i]
        }
        signatureCopy.push(tempSum)
    }
    return signatureCopy.slice(0,n)
}

console.log(tribonacci([1,2,3],2));

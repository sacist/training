const findOdd=(arr:number[]) => {
    const digitsMap=new Map()
    for(const num of arr){
        if(digitsMap.has(num)){
            digitsMap.set(num,digitsMap.get(num)+1)
        }else{
            digitsMap.set(num,1)
        }
    }
    const arrayedMap=Array.from(digitsMap)
    for(const pair of arrayedMap){
        if(pair[1]%2!==0){
            return pair[0]
        }
    }
}

console.log(findOdd([1,2,2,2,2,4,9,4,9,1,8]));

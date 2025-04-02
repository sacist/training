const findIndex=(arr:number[]) => {
            for(let i=0;i<arr.length;i++){
                let leftSum=0
                let rightSum=0
                for(let j=i-1;j>=0;j--){
                    if(j!==-1) leftSum+=arr[j]        
                }
                for(let j=i+1;j<arr.length;j++){
                    rightSum+=arr[j]
                }
                
                if(leftSum===rightSum)return i
            }
    return -1    
}
console.log(findIndex([20,10,-80,10,10,15,35]));
console.log(findIndex([1,2,3,4,3,2,1]));
console.log(findIndex([1,100,50,-51,1,1]));

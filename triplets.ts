const findTriplets=(nums: number[]): number => {
    let maxValue=0
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i+1; j < nums.length-1; j++) {
            for (let k = j+1; k < nums.length; k++) {
                const value=(nums[i]-nums[j])*nums[k]
                maxValue=Math.max(value,maxValue)
            }  
        }
    }
    return maxValue

    
}
console.log(findTriplets([8,6,3,13,2,12,19,5,19,6,10,11,9]));



const moveZeros=(arr:any[]) => {
    const nonZeros=arr.filter(val=>val!==0)
    const zeros=arr.filter(val=>val===0)
    return nonZeros.concat(zeros)
}

console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0,0, 0, 0, 0, 0 ]));

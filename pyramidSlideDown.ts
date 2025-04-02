// const longestSlide=(pyramid:number[][]) => {
//     let sum=0
//     let prevValue:number|null=null
//     pyramid.map((val,ind,arr)=>{
//         let higestNum=0
//         if(prevValue===null){
//             sum+=val[0]
//             prevValue=val[0]
//         }else{
//             val.map((num,idx)=>{
//                 if(typeof prevValue==='number'){
//                     const highestNumIdx=arr[ind-1].indexOf(prevValue)
//                     if(idx===highestNumIdx||idx===highestNumIdx-1||idx===highestNumIdx+1){       
//                         higestNum=Math.max(num,higestNum)
//                     }
//                 }
//             })
//             prevValue=higestNum
//             sum+=higestNum
//         }
//     })
//     return sum
// }
// console.log(longestSlide([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3],[2,11,188,199,15]]));


// НЕ РАБОТАЕТ


const longestSlide=(pyramid:number[][]) => {
    const copy = pyramid.map(row => [...row]).reverse();
    for(let row=1;row<copy.length;row++){
        for(let col=0;col<copy[row].length;col++){
            if(col<copy[row-1].length){
                copy[row][col]+=Math.max(copy[row-1][col],copy[row-1][col+1])
            }
        }
    }
    return copy[copy.length-1][0]
}
console.log(longestSlide([[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20,  4, 82, 47, 65],
    [19,  1, 23, 75,  3, 34],
    [88,  2, 77, 73,  7, 63, 67],
    [99, 65,  4, 28,  6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]));

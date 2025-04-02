// const computeHamming=(n:number) => {
//     const result=[]
//     for (let i = 0; i <= n ;i++) {
//         for(let j=0;j<=n;j++){
//             for (let k = 0; k <= n; k++) {
//                 result.push((2**i)*(3**j)*(5**k))
//             }
//         }
//     }
//     return result.sort((a,b)=>a-b)[n-1]
// }
// console.log(computeHamming(500));

// ЭТО РАБОТАЕТ НО ОЧЕНЬ МЕДЛЕННО


const hamming=(n:number) => {
    const heap = new Set()
    const pq = [1]
    
    let hamming = 1;
    
    for (let i = 0; i < n; i++) {
        hamming = pq.shift()!;
        
        [2, 3, 5].forEach(factor => {
            const next = hamming * factor
            if (!heap.has(next)) {
                heap.add(next)
                pq.push(next)
            }
        });

        pq.sort((a, b) => a - b);
    }

    return hamming;
}
console.log(hamming(12691));

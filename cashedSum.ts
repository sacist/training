// const memoize=(fn:Function)=>{
//     const cash=new Map()
//   return (...args:number[])=>{
//     const sortedArgs=JSON.stringify([...args].sort())
//     const memoized=cash.get(sortedArgs)
//     if(memoized){
//         console.log('Из кэша')
//         return memoized
//     }
//     cash.set(sortedArgs,args[0]+args[1])

//     return fn(...args)
//   }
// }

// const sum = (a:number, b:number) => {
//     console.log('Вычисляю...');
//     return a + b;
//   };

//   const memoizedSum = memoize(sum);

//   console.log(memoizedSum(80, 9)); // Вычисляю... → 5
//   console.log(memoizedSum(80, 9)); // 5 (из кэша)
//   console.log(memoizedSum(9,80))

// //21:45->22:10


// //22:21->23:06


// const sumCash=new Map()
// const objectSum=(obj1:Object,obj2:Object) => {
//     const sortedObj1=Object.entries(obj1).sort()
//     const sortedObj2=Object.entries(obj2).sort()

//     const sortedArgs=JSON.stringify([sortedObj1,sortedObj2])

//     const cashedSumResult=sumCash.get(sortedArgs)
//     if(cashedSumResult){
//         console.log('Взято из кэша');
//         return cashedSumResult
//     }


//     console.log('Вычисляем');


//     const flatEntries1=Object.entries(obj1).flat()
//     const flatEntries2=Object.entries(obj2).flat()

//     const sumMap=new Map()
//     const cashMap=new Map()

//     const flatEntiesArr=[flatEntries1,flatEntries2]

//     for(const entries of flatEntiesArr){
//         entries.map((val,ind,arr)=>{
//             if(typeof val==='string'){
//                 const MappedValue=sumMap.get(val)
//                 if(MappedValue){
//                     cashMap.set(val,MappedValue+arr[ind+1])
//                 }else{
//                     sumMap.set(val,arr[ind+1])
//                 }
//             }
//         })
//     }
//     sumCash.set(sortedArgs,Object.fromEntries(Array.from(cashMap)))
//     // console.log(sumCash);

//     return Object.fromEntries(Array.from(cashMap))
// }






// console.log(objectSum({b:45,a:77},{a:88,b:90}));
// console.log(objectSum({a:45,b:77},{b:88,a:90}));
// console.log(objectSum({a:47,b:75},{a:88,b:90}));
// console.log(objectSum({a:45,b:77},{a:88,b:90}));


const objecto: Record<string, any> = { a: { b: { x: { h: 5555, w: 400 } }, sum: 500, gefocre: 'now' }, copy: {foo:1,xxx:777} };
const objecto1: Record<string, any> = { a: { b: { x: { h: 5555, w: 400 } }, sum: 500, gefocre: 'now' }, copy: {foo:12,xxx:777} };

const layerSeparaor = (obj: Record<string, any>, level: number = 0, res: Array<Record<string, any>[]> = []) => {
    if (!res[level]) {
        res[level] = []
    }
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            res[level].push({ [key]: obj[key] })
            layerSeparaor(obj[key], level + 1, res)
        } else {
            res[level].push({ [key]: obj[key] })

        }
    }
    return res
}
console.log(layerSeparaor(objecto));

const cashMap = new Map()
const cash = (obj: Object) => {
    let needToRerender=false
    const layeredObj = layerSeparaor(obj)
    for (let i = 0; i <layeredObj.length; i++) {
        const currentCashedLayer = cashMap.get(`layer${i}`)
        if (!currentCashedLayer) {
            cashMap.set(`layer${i}`, layeredObj[i])
        }
        else {
            if (JSON.stringify(currentCashedLayer) === JSON.stringify(layeredObj[i])&&!needToRerender) {
                needToRerender=true
                console.log('НЕ РЕРЕНДЕР');
            } else {
                console.log('РЕРЕНДЕР');

            }
        }
    }
}

cash(objecto)
cash(objecto1)

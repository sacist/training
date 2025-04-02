export const permuteArray = (array: string[]): string[] => {
    const result: Set<string> = new Set();

    const generate = (arr: string[], current: string = "") => {
        if (arr.length === 0) {
            if (!(current.startsWith("0") && current.length > 1)) {
                result.add(current);
            }
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const newArr = [...arr];
            newArr.splice(i, 1);
            generate(newArr, current + arr[i]);
        }
    };

    generate(array);
    return Array.from(result);
};
/// ЗАПОМНИ РЕКУСРИЮ ДЛЯ ПЕРЕСТАНОВОК

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

// ЗАПОМНИ КАК ТЫ СДЕЛАЛ ВЛОЖЕННЫЙ ЦИКЛ И СЛАЙС В КОНЦЕ

const countBits=(num:number) => {
    const binary:number[]=[]
    const tranferToBinary=(num:number)=> {
        if(num===0){
            return
        }
        binary.push(num%2)
        tranferToBinary(Math.floor(num/2))
    }
    tranferToBinary(num)
    return binary.filter((val)=>val!==0).length
}

// ЗАПОМНИ АЛГОРИТМ ПРИВЕДЕНИЯ В ДВОИЧНУЮ СИСТЕМУ, ТАКЖЕ В КОНЦЕ НУЖЕН REVERSE ЧТОБЫ БЫЛО ТАК КАК НАДО

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

// ТУТ СКОРЕЕ ПРО ПРАВИЛЬНОЕ МЫШЛЕНИЕ, НАДО НАЧАТЬ НЕ С ВЕРХА А С НИЗА, ДА ЕЩЁ И СО ВТОРОЙ СТРОЧКИ

const dblLinear=(n: number) =>{
    const sequence = new Set<number>()
    const heap: number[] = [1]

    for (let i = 0; i < n; i++) {
        const x = heap.shift()!

        const y = 2 * x + 1
        const z = 3 * x + 1

        if (!sequence.has(y)) {
            sequence.add(y)
            heap.push(y)
        }
        if (!sequence.has(z)) {
            sequence.add(z)
            heap.push(z)
        }

        heap.sort((a, b) => a - b)
    }
    return heap[0]
}

// Прикольный алгоритм который использует Set для фильтрации дубликатов и удаляет ненужный для работы элемент в каждой итерации


const generateBC = (url: string, separator: string): string => {
    const ignoredWords = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"]

    let cleanedUrl = url
    if (cleanedUrl.startsWith('http://')) {
        cleanedUrl = cleanedUrl.slice(7)
    } else if (cleanedUrl.startsWith('https://')) {
        cleanedUrl = cleanedUrl.slice(8)
    }
    if (cleanedUrl.startsWith('www.')) {
        cleanedUrl = cleanedUrl.slice(4)
    }

    let parts = cleanedUrl.split('/').filter(val => val !== '' && !val.includes('index.'))

    if (parts.length > 0 && parts[0].includes('.')) {
        parts.shift()
    }

    if (parts.length === 0) {
        return '<span class="active">HOME</span>'
    }

    let breadcrumbs = ['<a href="/">HOME</a>']
    let path = '/'

    for (let i = 0; i < parts.length; i++) {
        let segment = parts[i]

        if (segment.includes('?')) {
            segment = segment.split('?')[0]
        }

        if (segment.includes('#')) {
            segment = segment.split('#')[0]
        }

        if (i === parts.length - 1 && segment.includes('.')) {
            segment = segment.split('.')[0]
        }

        let title = segment.split('-')
            .filter(word => word !== '')
            .join(' ');

        if (title.length > 30) {
            title = title.split(' ')
                .map(word => ignoredWords.includes(word.toLowerCase()) ? '' : word[0])
                .join('')
                .toUpperCase();
        } else {
            title = title.toUpperCase();
        }
        if (i !== parts.length - 1) {
            path += segment + '/';
            breadcrumbs.push(`<a href="${path}">${title}</a>`);
        } else {
            breadcrumbs.push(`<span class="active">${title}</span>`);
        }
    }

    return breadcrumbs.join(separator);
};

// ПОТНАЯ ТЕМКА

const validate=(sudoku:number[][]) => {
    const colMap=new Map()
    let sum=0
    for (let col = 0; col < sudoku.length; col++) {
        const rowSet=new Set()
        for (let row = 0; row < sudoku[col].length; row++) {
            rowSet.add(sudoku[col][row])
            if(!colMap.has(col)){
                colMap.set(col,new Set())
            }
            colMap.get(col).add(sudoku[col][row])
            if(row===sudoku[col].length-1){
                sum+=sudoku[col][row]
            }
        }
        if(rowSet.size!==sudoku[0].length){
            return false
        }
    }
    for (let i = 0; i < sudoku[0].length; i++) {
        let tempSum=0
        const setArray=Array.from(colMap.get(i)) as number[]
        for(const num of setArray){
            tempSum+=num
        }
        if(tempSum!==sum){
            return false
        }
    }
    
    return true
}

// А В MAP ТО МОЖНО И SET ЗАСУНУТЬ И ОБРАЩАТЬСЯ К НЕМУ ПО MAP.GET().ADD(), ЗАПОМНИТЬ!!!! 
// ТАКЖЕ В СТРОКЕ const setArray=Array.from(colMap.get(i)) as number[]
//  Я СНАЧАЛА СДЕЛАЛ 2 ARRAY.FROM ХОТЯ МОЖНО БЫЛО ДОСТАТЬ ИЗ МАПА СЕТ И ЕГО УЖЕ В ARRAY. ЗАПОМНИТЬ!!!!

const getPins=(observed:string) => {
    const variations=[
        [0,8],
        [1,2,4],
        [1,2,3,5],
        [2,3,6],
        [1,4,5,7],
        [2,4,5,6,8],
        [3,5,6,9],
        [4,7,8],
        [0,5,7,8,9],
        [6,8,9]]
    const result=new Set<string>()
    const createCombinations = (left: string, current: string = "") => {
        if (current.length === left.length) {
            result.add(current)
            return
        }
    
        const key = +left[current.length]
        if (!variations[key]) return
    
        for (let variation of variations[key]) {
            createCombinations(left, current + variation.toString())
        }
    };
    createCombinations(observed)
    return Array.from(result)
    
}   

// Правильный путь для перестановок для подобных случаев, главное это функция createCombinations


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
        let sum=parseInt(a[i])*parseInt(b[i])+ostatok
        ostatok=Math.floor(sum/10)
        result.push(sum%10)
    }
    if (ostatok!==0) result.push(ostatok);
    if(result[result.length-1]===0){
        result.pop()
    }
    return result.reverse().join('')
}

// ЗАПОМНИТЬ КАК ЗАПОЛНИТЬ НУЛЯМИ ЧТОБЫ МОЖНО БЫЛО СКЛАДЫВАТЬ В СТОБИК
// for (;a.length < b.length;) a = '0' + a;
// for (;b.length < a.length;) b = '0' + b;
// ТАКЖЕ РЕШЕНИЕ ЕСТЬ return (BigInt(a) + BigInt(b)).toString(); НО ОНО МНЕ НЕ НРАВИТСЯ


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

// ОПТИМИЗАЦИЯ АЛГОРИТМА С ПОМОЩЬЮ КУЧИ - HEAP. ИЗ НЕЁ УДАЛЯЕТСЯ ПЕРВЫЙ ЭЛЕМЕНТ ДЛЯ КАЖДОЙ ИТЕРАЦИИ. SET УБИРАЕТ ДУБЛИКАТЫ, ХОТЬ МЫ С НИМ И НЕ 
// ВЗАИМОДЕЙСТВУЕМ НАПРЯМУЮ, СОРТИРУЕТСЯ ТОЛЬКО ЧАСТЬ МАССИВА ПРИ КАЖДОЙ ИТЕРАЦИИ, ЧТОБЫ НЕ СОРТИРОВАТЬ ВЕСЬ МАССИВ
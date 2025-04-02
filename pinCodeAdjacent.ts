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

getPins('369')
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

console.log(dblLinear(30));
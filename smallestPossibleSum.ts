const computeSum = (numbers: number[]) => {
        const arrayCopy = [...numbers]

        for (;new Set(arrayCopy).size > 1;) {
            const minValue = Math.min(...arrayCopy)
            for (let i = 0; i < arrayCopy.length; i++) {
                if (arrayCopy[i] > minValue) {
                    arrayCopy[i] -= minValue
                }
            }
        }
        let sum=0
        for(const num of arrayCopy){
            sum+=num
        }
        return sum
    };

console.log(computeSum([6, 9, 21]));



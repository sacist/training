const permuteArray = (array: string[]): string[] => {
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
const perfectSquareFinder=(lower:number,amount:number) => {
    let currentAmmount=lower+1
    let highestSquare=0
    let counter=0
    for(currentAmmount;;currentAmmount++){
        if(Math.sqrt(currentAmmount)-Math.floor(Math.sqrt(currentAmmount))===0){
            
            let arrayedAmmount=currentAmmount.toString().split('')
            
            const prePermutedArray=permuteArray(arrayedAmmount)
            const permutedArray=[]
            for(const num of prePermutedArray){      
                permutedArray.push(num)
            }
            
            for(let i=0;i<permutedArray.length;i++){
                if(Math.sqrt(+permutedArray[i])===Math.floor(Math.sqrt(+permutedArray[i]))){
                    if(highestSquare<+permutedArray[i]){
                        highestSquare=+permutedArray[i]
                        
                    }
                    counter+=1
                    console.log(Math.sqrt(+permutedArray[i])===Math.floor(Math.sqrt(+permutedArray[i])),'elem:',+permutedArray[i]);
                    
                    if(counter>=amount){
                        return highestSquare
                    }
                }  
            }
            counter=0
            highestSquare=0
            
        }
    }
}

console.log(perfectSquareFinder(3550000, 5));


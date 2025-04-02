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
console.log(countBits(12334));

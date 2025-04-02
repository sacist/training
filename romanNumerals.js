const decryptRoman=(str) => {
    let output=0
  const values={
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }
  const arr=str.split('')
  arr.map((val,ind,array)=>{
    if(!(values[val]>=values[array[ind+1]])&&ind+1!==array.length){
      output-=values[val]
    }else{
      output+=values[val]
    }
  })
  return output
}

console.log(decryptRoman('MDCLXVI'));

const cryptRoman=(num) => {
    let input=num
    let output=''
      const validSym = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    for(const symbol of validSym){
        const numberOfSym=Math.floor(input/symbol[0])
        for(let i =0;i<numberOfSym;i++){
            output+=symbol[1]
            input-=symbol[0]
        }
    }
    console.log(output);
}
cryptRoman(1666)
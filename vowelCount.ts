const countVowels=(str:string) => {
    return str.split('').filter((val)=>/[aeiou]/i.test(val)).length
}
console.log(countVowels('dddaffsafas123dsac'));


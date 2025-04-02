const orderTheWords=(str:string) => {
    if(str===''){
        return ''
    }
    const splittedStr=str.split(' ')
    const resultStringArray=[]
    for(const word of splittedStr){
        const origWord=word
        const splittedWord=word.split('')
        for(const char of splittedWord){
            if(parseInt(char)){
                resultStringArray[parseInt(char)-1]=origWord
            }
        } 
    }
    return resultStringArray.join(' ')
}
console.log(orderTheWords('succ1um to2 ene4my th3e gggggggg5'));



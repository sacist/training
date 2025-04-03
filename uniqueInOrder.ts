const order=(inp:any) => {
    if(!inp[0]){
        return []
    }
    let data=inp
    if(typeof inp==='string'){
        data=inp.split('')
    }
    const result=[data[0]]
    for(let i=1;i<data.length;i++){
        if(data[i]!==result[result.length-1]){
            result.push(data[i])
        }
    }
    return result
}
console.log(order('AAAABBBCCDAABBB'));

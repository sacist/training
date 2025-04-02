const squarer=(num:number) => {
    const arrayedNum=num.toString().split('')
    return parseInt(arrayedNum.map((val,_)=>{
        return (parseInt(val)*parseInt(val))
    }).join('')) 
}
console.log(squarer(125));

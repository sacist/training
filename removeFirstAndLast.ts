const remove=(str:string) => {
    return str.split('').filter((_,ind,arr)=>ind!==0&&ind!==arr.length-1).join('')
}
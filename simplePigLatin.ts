const pigify=(str:string) => {
   return str.split(' ').map((val)=>{
    if(!/[.,!?]/.test(val)){
       return val.slice(1)+val[0]+'ay'
    }else{
        return val
    }
}).join(' ')
}
console.log(pigify('Hello world !'));

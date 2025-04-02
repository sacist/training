const shrinkWithSuff=(suffixes:string[],base:number) => {
    const func=(...args:string[]) => {
      if(typeof args[0]!=='string'|| args[0].split('').filter((val)=>JSON.stringify(parseInt(val))==='null').join('')!==''||!args[0]){
        return args[0].toString()
      }    
      let returning=+args
      let suffix=suffixes[0]
      for (let i = 1; i < suffixes.length; i++) {
        const floor=Math.floor(returning/base)
        if(floor!==0){
            returning=floor
            suffix=suffixes[i]
        }
      }
      return returning.toString()+suffix
    } 
    return func
}
const filter1=shrinkWithSuff(['','k','m'],1000)
console.log(filter1(''));

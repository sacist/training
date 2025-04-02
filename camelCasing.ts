const camelCasing=(str:string) => {
    const regex = /[-_]/;
    const stringArray=str.split(regex)
    return stringArray.map((val,ind)=>{
        const split=val.split('')
        if(ind!==0){
            split[0]=split[0].toUpperCase()
        }
        return split.join('')
    }).join('')
}

console.log(camelCasing("the-stealth-warrior"));


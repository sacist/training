const topThreeWords=(text:string) => {
    const accuranceMap=new Map()
    const split=text.split(' ')
    const noPunctuation=split.map((val)=>val.replace(',','').replace('.','').replace('\n','').toLowerCase())
    for(const word of noPunctuation){
        if(!accuranceMap.has(word)) accuranceMap.set(word,1)
            else{
            accuranceMap.set(word,accuranceMap.get(word)+1)
        }
    }
    const res=[]
    const accuranceArray=Array.from(accuranceMap).filter(val=>val[0]!=='')
    for(let i=0;i<3;i++){
        let highestNum=0
        let highestNumIndex=null
        for(let j=0;j<accuranceArray.length;j++){
            if(highestNum<accuranceArray[j][1]){
            highestNum=accuranceArray[j][1]
            highestNumIndex=j}
        }
        if(highestNumIndex){
            res.push(accuranceArray.splice(highestNumIndex,1).flat()[0])
        }}
    return res
    
    
}
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));

// НЕ РЕШИЛ
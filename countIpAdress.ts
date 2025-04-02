const countIp=(start:string,end:string) => {
    const startArray=start.split('.')
    const endArray=end.split('.')
    let dif=0
    for(let i=startArray.length-1;i>=0;i--){
        switch (i) {
            case 3:   
                dif-=+startArray[i]-+endArray[i]
                break;
            case 2:
                dif-=(+startArray[i]-+endArray[i])*256
                break
            case 1:
                dif-=(+startArray[i]-+endArray[i])*256*256
                break
            default:
                dif-=(+startArray[i]-+endArray[i])*256*256*256
                break
        }
    }
    return dif
}
console.log(countIp("1.2.3.4", "5.6.7.8"));

// const countIp=(start:string,end:string) => {
//     const startArray=start.split('.')
//     const endArray=end.split('.')
//     let dif=0
//     for(let i=startArray.length-1;i>=0;i--){
//         dif += (+endArray[i] - +startArray[i]) * 256 ** (3 - i)
//     }
//     return dif
// }
// console.log(countIp("1.2.3.4", "5.6.7.8"));

// Читается похуже но поменьше строк
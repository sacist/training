const findUnique=(arr:number[]) => {
    if(arr[0]===arr[1]||arr[0]===arr[2]){
        return arr.filter(val=>val!==arr[0])[0]
    }else if(arr[1]===arr[2]){
        return arr.filter(val=>val!==arr[1])[0]
    }
}
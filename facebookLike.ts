function likes(names:string[]) {
    let likeString=''
    for (let i = 0; i < names.length; i++) {
        switch (names.length) {
            case 1:
                likeString=names[i]+' likes this'
                break;
            case 2:
                if(i===0){
                    likeString+=names[i]+' and '
                }else{
                    likeString+=names[i]+' like this'
                }
                break
            case 3:
                if(i===0){
                    likeString+=names[i]+', '
                }else if(i===1){
                    likeString+=names[i]+' and '
                }else{
                    likeString+=names[i]+' like this'
                }
                break
            default:
                if(i===0){
                    likeString+=names[i]+', '
                }else if(i===1){
                    likeString+=names[i]+` and ${names.length-2} others like this`
                }
        }
    }
    if(names.length===0){
        return 'no one likes this'
    }
    return likeString
  }

console.log(likes([]));


const ExAnd=(str:string) => {
    return str.split('').filter((val)=>/[x]/i.test(val)).length===str.split('').filter((val)=>/[o]/i.test(val)).length
}

// interface SecretObject {
//     getSecret(): number;
//     setSecret(secret: number): void;
// }
// const createSecret=(secret:number):SecretObject => {
//     const returningObject=new Object()
//     let sec=secret
//     Object.defineProperty(returningObject,'getSecret',{
//         value:function(){
//             return sec}
//     })
//     Object.defineProperty(returningObject,'setSecret',{
//         value:function(secret:number){
//             sec=secret}
//     })
//     return returningObject as SecretObject
// }
// const obj = createSecret(5)
// console.log(obj.getSecret() );

// obj.setSecret(2)
// console.log(obj.getSecret());


const createSecretHolder=(secret:number) => {
    return{
        getSecret:()=>{
            return secret
        },
        setSecret:(sec:number)=>{
            secret=sec
        }
    }
}

const obj = createSecretHolder(5)
console.log(obj.getSecret() );
obj.setSecret(2)
console.log(obj.getSecret());
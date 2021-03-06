/*
    let p = new Promise((resolve, reject)=>{
    let a = 1 + 1
    if (a == 2){
        resolve('success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
   console.log('This is in the then ' + message) 
}).catch((message)=> {
    console.log('This is in the catch ' + message )
})
*/

function myFunc(){
    return (((Math.floor(Math.random()* 10)) % 2) === 0) ? true : false
}

const resolveFunc = () => console.log("Success")
const rejectFunc = () => console.log("Failure")

const result = new Promise ((res, rej) => {
    setTimeout(()=> (myFunc()? res(): rej()), 2000)
    })

result.then(resolveFunc).catch(rejectFunc)
console.log("hello")
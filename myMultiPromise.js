function createPromise(){

    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5

        if (success){
            resolve("Operation sunccessful")
        } else{
            reject("Operation Failed")
        }
    })
}

//If one fails then the catch is triggered
try{
    const promise1 = createPromise()
    const promise2 = createPromise()
    const promise3 = createPromise()

    const result = await Promise.all([promise1, promise2, promise3])
    console.log(result)
} catch(err){
    console.log(err)
}
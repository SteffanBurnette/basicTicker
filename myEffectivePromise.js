function uploadFile(){

    return new Promise((resolve, reject) =>{
        console.log("Uploading file...")

        setTimeout(() =>{
            resolve() //call the next step after 1 second
        }, 1000)
    })
}

function processFile(){


    return new Promise((resolve, reject) =>{
        console.log("Processing the file")

        setTimeout(() =>{
            resolve() //Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser(){

    return new Promise(() => {
        console.log("Notifying the user")

        setTimeout(() =>{
            resolve()
        }, 1000) //1 second
    })
}

try{
    await uploadFiles()

}catch(err){
    console.log(err)
}
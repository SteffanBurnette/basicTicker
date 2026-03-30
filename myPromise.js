const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5

    if(success){
        resolve("Operation Successful")
    } else{
        reject("Operation Failed")
    }
})


promise.then( response => console.log(response))

try {
    const response = await promise
    console.log(response)
} catch(err){
    console.log(err)
}

//Example of a function that will use a promise to load and image or return an error msg if 
//the img cannot be loaded
function preLoadImg(url){

    const img = new Image()

    return new Promise((resolve, reject) => {
        img.src = url
        img.alt = "A beautiful scene"
        img.addEventListerner("load", () => resolve(img))
        img.addEventListener("error", () => reject("Image has not loaded"))
    })
}
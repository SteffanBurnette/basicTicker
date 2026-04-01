function getImagePromise(url){

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const img = new Image()
            img.src = url
            img.alt = "Scenic Image"
            img.addEventListener("load", () => resolve(img))
            img.addEventListener("error", () => reject(new Error(`Failed to load image: ${url}`)))
        }, 500)
    })
}

const images = [
    "url1",
    "url2",
    "url3"
]


async function preloadImages(imageUrlsArr){

    const imgContainer = document.getElementById("img-container")
    const uploadContainer = document.getElementById("upload-container")

    const promises = imageUrlsArr.map((url) => getImagePromise(url))
 
    try{
        const results = await Promise.all(promises)
        console.log("All images loaded successfully")
        uploadContainer.style.display = "none"
        results.forEach((img) => imgContainer.appendChild(img))
    } catch(err){
        console.log(err)
    }

}


document.getElementById("submit-imgs").addEventListener("click", () => preloadImages(images))
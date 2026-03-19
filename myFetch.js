// https://apis.scrimba.com/dog.ceo/api/breads/image/random

fetch("https://apis.scrimba.com/dog.ceo/api/breads/image/random")
.then(response => {response.json()})
.then(data => {
    const imageElement = document.createElement("img")
    imageElement.src = data.message
    imageElement.alt = "random dog picture"
    document.getElementById("img-container").appendChild(imageElement)
    //console.log(data)
})


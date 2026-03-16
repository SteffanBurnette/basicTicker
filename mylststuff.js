const lst = ["panda", "crow", "goblin", "jade"]

lst.forEach((elem) => {
    console.log(elem)
})

lst.forEach((elem)=>{
    console.log(elem.length)
})

lst.forEach((elem)=>{
    console.log(elem + " " + elem.length)
})
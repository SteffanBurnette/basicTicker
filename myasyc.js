

async function myGet(){

    try{
        const res = await fetch("https://apis.scrimba.com/bored/api/activity")
        const data = await res.json()
        console.log(data)
       // console.log(res.text())
    }
    catch(error){
        console.log(error)
    }
}

myGet()
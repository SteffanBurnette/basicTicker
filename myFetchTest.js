
//Basic GET request via the fetch method
try {
    const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
   
    if(!response.ok){
        throw new Error("There was a problem with the API")
    }

    const data = await response.json()
    console.log(data)
} catch(err){
    console.log(err)
}


//Basic POST request via the fetch method
//Will need to convert the data to json before sending it to the endpoint
try {
    const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts", 
        {
            method: "POST",
            body: JSON.stringify({ //Converts the given object into json
                title: "Holiday Nightmares",
                body: "When I got lost in scotland...",
                userId: 100
            }),
            headers: {
                "Content-Type": "application/json"
            }


        })
   
    if(!response.ok){
        throw new Error("There was a problem with the API")
    }

    const data = await response.json()
    console.log(data)
} catch(err){
    console.log(err)
}
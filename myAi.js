import OpenAi from'openai' //npm install openai
import dotenv from 'dotenv'; //npm install dotenv
dotenv.config();

const myKey = process.env.OPENAI


const openai = new OpenAi({
    apiKey: myKey,
    dangerouslyAllowBrowser: true
})

//console.log(openai.apiKey)
//console.log(myKey)


const messages = [
    {
        role: "system",
        content: "You are a helpful general knowledge expert"
    },
    {
        role: "user",
        content: "What skills should a computer science major prioritize in todays job market"
    }
]

//This is an asynchronous process so we have to use await
const response = await openai.responses.create({
    model: "gpt-5",
    input: messages
});

console.log(response.output_text);


//Code used to fine-tune a apt model
const upload = await openai.files.create({
    file: await fetch("/motivationalBotData.jsonl"),
    purpose: "fine-tune"
})

const fineTune = await openai.fineTuning.jobs.create({
    training_file: "file-QxBP3GKvDO7OXsIhI98BhGsn",
    model: "gpt-3.5-turbo"
})


//Generating images with dalle
async function generateImage(prompt){
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
        style: "vivid",
        response_format: "b64_json"

        //base64 enconded image - A chunk of code that the web browser can interpret
    })
    console.log(response)
    outputImg.innerHTML = `<img src ="data:image/png;base64,${response.data[0].b64_json}" alt = "The Image API Failed"`
}
/**

 const response = await openai.responses.create({
     model: "gpt-5",
    tools: [
        { type: "web_search" },
    ],
    input: "What was a positive news story from today?",
});
 **/
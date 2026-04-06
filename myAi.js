import OpenAi from'openai' //npm install openai
import dotenv from 'dotenv'; //npm install dotenv
dotenv.config();

const myKey = process.env.OPENAI


const openai = new OpenAi({
    apiKey: myKey,
    dangerouslyAllowBrowser: true
})

console.log(openai.apiKey)
console.log(myKey)
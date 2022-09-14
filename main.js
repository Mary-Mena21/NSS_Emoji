import { fetchRandomEmoji } from "./emoji.js";

const displayEmoji = async () =>  {
        const emoji = await fetchRandomEmoji()
        let html = `
        
        <h1> The emoji is ${emoji.name} </h1>
        <div><h2> ${emoji.htmlCode[0]}  ${emoji.group}</h2></div>
        `
document.getElementById("app").innerHTML = html
}
displayEmoji()
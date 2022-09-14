

export const fetchRandomEmoji = async () => {
        const response = await fetch("https://emojihub.herokuapp.com/api/random")
        const data = await response.json()
        return data
}
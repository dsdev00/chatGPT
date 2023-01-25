const dotenv = require("dotenv")
dotenv.config()

const OpenAI = require('openai-api')
const openai = new OpenAI(process.env.OPENAI_API_KEY)
const _generateAnswers = async (question) => {
    try {
        const completion = await openai.complete({
            engine: 'text-davinci-003',
            prompt: question,
            maxTokens: 2048,
            temperature: 0,
            topP: 1,
            presencePenalty: 0,
            frequencyPenalty: 0,
            n: 1,
            // bestOf: 1,
            // stream: false,
            // stop: ['\n', "testing"]
        })
        return completion.data.choices[0].text
    } catch (error) {
        return error.message
    }
}

module.exports = { _generateAnswers }
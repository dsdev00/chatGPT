const dotenv = require("dotenv")
const TeleBot = require('telebot')
const { _generateAnswers } = require("./utils/openai")
dotenv.config()

const bot = new TeleBot(process.env.TELEGRAM_API_TOKEN)

bot.on('text', async (msg) => {
    try {
        const chatId = msg.chat.id
        const text = msg.text
        const answers =  await _generateAnswers(text)
        bot.sendMessage(chatId, answers)
        console.log("================================================")
        console.log(`From: ${msg.chat.first_name}`)
        console.log(`Message: ${text}`)
        console.log("------------------------------------------------")
        console.log(`Answer: ${answers}`)
        console.log("================================================")
    } catch (err) {
        console.error(err)
    }
    
})

bot.start()
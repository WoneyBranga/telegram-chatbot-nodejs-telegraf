const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {

  const mestreId = env.meuChatId
  const from = ctx.update.message.from
  const idMensagem = from.id

  if (idMensagem == mestreId) {
    ctx.reply(`Fala Mestre ${from.first_name}!`)
  } else {
    ctx.reply(`Yo no te conozco ${from}...`)
  }

})

bot.startPolling()
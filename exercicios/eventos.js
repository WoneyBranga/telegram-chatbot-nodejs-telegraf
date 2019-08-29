const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
  const name = ctx.update.message.from.first_name
  ctx.reply(`Seja Bem Vindo ${name}`)
})

bot.on('text', ctx =>{
  const text = ctx.update.message.text
  ctx.reply(`Texto '${text}' recebido!`)
})

bot.on('location', ctx => {
  const loc = ctx.update.message.location
  console.log(loc)
  ctx.reply(`Entendido, você está em: \nlat:${loc.latitude} \nlong:${loc.longitude}`)
})

bot.on('contact', ctx => {
  const contact = ctx.update.message.contact
  console.log(contact)
  ctx.reply(`Vamos guardar '${contact.first_name}' : '${contact.phone_number}'`)
})

bot.on('voice', ctx => {
  const voice = ctx.update.message.voice
  console.log(voice)
  ctx.reply(`Audio recebido, possui ${voice.duration} segundos!`)
})

bot.on('photo', ctx => {
  const photo = ctx.update.message.photo
  console.log(photo)
  photo.forEach((ph, i) => {
    ctx.reply(`Foto ${i} tem resolucao de ${ph.width}x${ph.height}`)
  })
})

bot.on('sticker', ctx => {
  const sticker = ctx.update.message.sticker
  console.log(sticker)
  ctx.reply(`Recebi seu sticker ${sticker.emoji} do conjunto ${sticker.set_name}`)
})


bot.startPolling()
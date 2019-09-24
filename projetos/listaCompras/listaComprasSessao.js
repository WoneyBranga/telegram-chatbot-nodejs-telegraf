const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Session = require('telegraf/session')
const bot = new Telegraf(env.token)

const botoes = lista => Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item, `delete ${item}`)
        , { columns: 3}
        )
    )
)

bot.use(Session())

bot.start(async ctx => {
    const name = ctx.update.message.from.fist_name
    await ctx.reply(`Seja vem vindo, ${name}`)
    await ctx.reply('Escreva os itens que deseja adicionar...')
    ctx.session.lista = []
})

bot.on('text', ctx => {
    let msg = ctx.update.message.text
    ctx.session.lista.push(msg)
    ctx.reply(`${msg} adicionado!`, botoes(ctx.session.lista))
})

bot.action(/delete (.*)/, ctx =>{
    ctx.session.lista = ctx.session.lista.filter( 
            item => item !== ctx.match[1]
        )
    ctx.reply(`${ctx.match[1]} deletado!`, botoes(ctx.session.lista))
})

bot.startPolling()
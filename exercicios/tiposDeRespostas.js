const env = require("../.env");
const Telegraf = require("telegraf");
const bot = new Telegraf(env.token);

bot.start(async ctx => {
  
  await ctx.reply(`Seja bem vindo ${ctx.update.message.from.first_name}!😁 `);

  await ctx.replyWithHTML(   `Destacando \ncom negrito<b>HTML</b> \ncom italico <i>varias</i> \ncom code <code>com code...</code> \ncom pre <pre>com pre...</pre> \ncom links... <a href='https://google.com'>Google</a>`);
  
  await ctx.replyWithMarkdown(" aaa   *bbbbb*  `cccc` ```ddd``` [eee](https://www.google.com)  ");
  
  await ctx.replyWithPhoto({ source: `${__dirname}/bot.png`}, {caption: 'Teste caption111'} );

  await ctx.replyWithPhoto('https://telegraf.js.org/header.png',{ caption: 'Teste caption222'});

  await ctx.replyWithPhoto({url: 'https://telegraf.js.org/header.png'},{ caption: 'Teste caption333'});

  await ctx.replyWithLocation(29.9773, 31.1303)

  //await ctx.replyWithVideo('http://zzzzzzzzzzzzzz.xxx/video.m4v')

});

bot.startPolling();

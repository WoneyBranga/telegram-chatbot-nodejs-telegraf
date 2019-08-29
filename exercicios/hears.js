const env = require("../.env");
const Telegraf = require("telegraf");
const moment = require("moment");
const bot = new Telegraf(env.token);

bot.hears("pizza", ctx => ctx.reply("Quero!🤗"));
bot.hears(["fígado", "chuchu", "cebola"], ctx => ctx.reply("Passo!😬"));

bot.hears(/burguer/i, ctx => ctx.reply("Quero!🤗"));
bot.hears([/cebola/i, /pepino/i], ctx => ctx.reply("Passo!😬"));

bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
  moment.locale("pt-BR");
  const data = moment(ctx.match[1], "DD/MM/YYYY");
  ctx.reply(`${ctx.match[1]} cai em um(a) ${data.format("dddd")}`);
});

bot.startPolling();

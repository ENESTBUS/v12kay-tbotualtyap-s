const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("797903044918116373"))// rol id buraya girmeniz gerekli 
    return message.channel.send(      //rol ismini aşağıya girin
      `Bu komutu kullanabilmek için \`Register\` yetkisine sahip olmasınız.`
    );
  let lrowskullanıcı = message.mentions.users.first();
  if (!lrowskullanıcı)
    return message.channel.send("Kullanıcıyı etiketlemen gerekli");
  let lrowsrol = message.mentions.roles.first();
  let lrowsmember = message.guild.member(lrowskullanıcı);
  lrowsmember.roles.add("797903044918116373"); //verilecek rol
  lrowsmember.roles.remove("797903046641844245"); //alınacak rol
  lrowsmember.roles.remove("797903046641844245"); //alınacak rol
  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(
      `${lrowskullanıcı} **üyesine** <@&797903044918116373> **rolü verildi!**`
    )
    .setFooter(`Komutu kullanan yetkili : ${message.author.username}`);
  message.react("798448647980974110"); //emoji id
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: "erkek",
  description: "Hadi erkek olalımm",
  usage: "erkek"
};

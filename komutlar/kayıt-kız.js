const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("797903043361898546"))
    return message.channel.send(
      `Bu komutu kullanabilmek için \`kullanacağı rol isimi\` yetkisine sahip olmasınız.`
    );
  let lrowskullanıcı = message.mentions.users.first();
  if (!lrowskullanıcı)
    return message.channel.send("Kullanıcıyı etiketlemeyi unuttun kanka.");
  let lrowsrol = message.mentions.roles.first();
  let lrowsmember = message.guild.member(lrowskullanıcı);
  lrowsmember.roles.add("797903043361898546"); //verilecek rol
  lrowsmember.roles.remove("797903046641844245"); //alınacak rol
  lrowsmember.roles.remove("797903046641844245"); //alınacak rol
  let lrowsembed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(                
      `${lrowskullanıcı} **üyesine** <@&797903043361898546> **rolü verildi!**`
    )
    .setFooter(`Komutu kullanan yetkili : ${message.author.username}`);
  message.react("798448647980974110");//emoji id
  return message.channel.send(lrowsembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: "kadın",
  description: "Kadın Üye Rolü Verir",
  usage: "kadın"
};

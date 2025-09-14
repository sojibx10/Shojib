module.exports.config = {
  'name': "info2",
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': "Islamick Chat",
  'description': "Admin and Bot info.",
  'commandCategory': "...",
  'cooldowns': 0x1,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async function ({
  api: _0x5df86b,
  event: _0x1bbdfe,
  args: _0xfe6473,
  client: _0x40ae6f,
  Users: _0x1a983f,
  Threads: _0xce2348,
  __GLOBAL: _0x3c3e23,
  Currencies: _0x26c195
}) {
  const _0x32c61e = global.nodemodule.request;
  const _0x54f377 = global.nodemodule["fs-extra"];
  const _0x15f9de = process.uptime();
  const _0xc312c9 = Math.floor(_0x15f9de / 3600);
  const _0x5c3d4e = Math.floor(_0x15f9de % 3600 / 60);
  const _0x13352a = Math.floor(_0x15f9de % 60);
  const _0x56621e = require("moment-timezone");
  var _0x51de78 = _0x56621e.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  var _0x536a99 = [
    "https://i.imgur.com/WXQIgMz.jpeg",
    "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif",
    "https://i.imgur.com/ybM9Wtr.jpeg",
    "https://i.imgur.com/k8nes6h.jpeg"
  ];
  var _0x318093 = () => _0x5df86b.sendMessage({
    'body': "•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n•┄┅═════❁🌺❁═════┅┄•\n\n 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭\n\n𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝐒𝐔𝐉𝐎𝐍 𝐂𝐇𝐀𝐓 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 𝐒𝐮𝐣𝐨𝐧 ッ\n\n•┄┅══❁𝐂𝐎𝐍𝐓𝐀𝐂𝐓❁══┅┄• \n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/cybersujon\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/profile.php?id=100089660775474\n\n𝐆𝐢𝐭𝐇𝐮𝐛  : https://github.com/cybersujon\n\n𝐖𝐏 𝐍𝐮𝐦𝐛𝐞𝐫 : 01813*****38\n\n𝐒𝐞𝐚𝐫𝐜𝐡 𝐆𝐨𝐨𝐠𝐥𝐞 : এখনো এত বড় সেলিব্রিটি হই নাই 🤡, যে কেউ গুগলে সার্চ করবে 💔🌚\n\n𝐖𝐚𝐛 𝐒𝐢𝐭𝐞 𝐋𝐢𝐧𝐤 : https://m.me/cybersujon\n\n•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•\n\nTYPE /admin \n\n𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : " + global.config.BOTNAME + "\n\n𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : " + global.config.PREFIX + "\n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : 𝐒𝐮𝐣𝐨𝐧 ッ\n\n 𝐁𝐨𝐭 Fork link:- https://github.com/cybersujon/ISLAMICK-CHAT-BOT \n\n 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 :- https://youtube.com/@cybersujon?si=vDIyqsB882bcVOt3\n\n•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞\n\n𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : " + _0x51de78 + " \n\n𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 " + _0xc312c9 + ':' + _0x5c3d4e + ':' + _0x13352a + ".\n\n𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣" + global.config.BOTNAME + "｢🕋｣",
    'attachment': _0x54f377.createReadStream(__dirname + "/cache/juswa.jpg")
  }, _0x1bbdfe.threadID, () => _0x54f377.unlinkSync(__dirname + "/cache/juswa.jpg"));
  return _0x32c61e(encodeURI(_0x536a99[Math.floor(Math.random() * _0x536a99.length)])).pipe(_0x54f377.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close", () => _0x318093());
};
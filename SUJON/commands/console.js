module.exports.config = {
  'name': "console",
  'version': "1.0.0",
  'hasPermssion': 0x3,
  'credits': "SUJON",
  'description': "Make the console more beautiful",
  'commandCategory': "Admin-bot system",
  'usages': "console ",
  'cooldowns': 0x0
};
module.exports.handleEvent = async function ({
  api: _0x5c08c9,
  args: _0x56588e,
  Users: _0x229358,
  event: _0x588720,
  Threads: _0x232c42,
  utils: _0x3389e9,
  client: _0x2f4579
}) {
  let {
    messageID: _0x403c76,
    threadID: _0x3475f8,
    senderID: _0x3e9150,
    mentions: _0x2a37ea
  } = _0x588720;
  const _0x55dc1e = require("chalk");
  const _0x2cdc83 = require("moment-timezone");
  var _0x28e49e = _0x2cdc83.tz("Asia/Dhaka").format("LLLL");
  const _0x59c2f9 = global.data.threadData.get(_0x588720.threadID) || {};
  if (typeof _0x59c2f9.console !== "undefined" && _0x59c2f9.console == true) {
    return;
  }
  if (_0x588720.senderID == global.data.botID) {
    return;
  }
  var _0xcf2b88 = global.data.threadInfo.get(_0x588720.threadID).threadName || "Name does not exist";
  var _0x2df420 = await _0x229358.getNameUser(_0x588720.senderID);
  var _0x1f283 = _0x588720.body || "Photos, videos or special characters";
  var _0x3d54cb = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "7900FF", "93FFD8", "CFFFDC", "FF5B00", "3B44F6", "A6D1E6", "7F5283", "A66CFF", "F05454", "FCF8E8", "94B49F", "47B5FF", "B8FFF9", "42C2FF", "FF7396"];
  var _0x14ccf6 = _0x3d54cb[Math.floor(Math.random() * _0x3d54cb.length)];
  var _0x10b0a3 = _0x3d54cb[Math.floor(Math.random() * _0x3d54cb.length)];
  var _0xb75d04 = _0x3d54cb[Math.floor(Math.random() * _0x3d54cb.length)];
  var _0x171353 = _0x3d54cb[Math.floor(Math.random() * _0x3d54cb.length)];
  var _0x115d64 = _0x3d54cb[Math.floor(Math.random() * _0x3d54cb.length)];
  var _0x4bd0a6 = _0x3d54cb[Math.floor(Math.random() * _0x3d54cb.length)];
  var _0x32549f = _0x3d54cb[Math.floor(Math.random() * _0x3d54cb.length)];
  console.log(_0x55dc1e.hex('#' + _0x14ccf6)("[💓]→ Group name: " + _0xcf2b88) + "\n" + _0x55dc1e.hex('#' + _0x4bd0a6)("[🔎]→ Group ID: " + _0x588720.threadID) + "\n" + _0x55dc1e.hex('#' + _0x32549f)("[🎉]→ User name: " + _0x2df420) + "\n" + _0x55dc1e.hex('#' + _0x10b0a3)("[📝]→ User ID: " + _0x588720.senderID) + "\n" + _0x55dc1e.hex('#' + _0xb75d04)("[📩]→ Content: " + _0x1f283) + "\n" + _0x55dc1e.hex('#' + _0x171353)("[ " + _0x28e49e + " ]") + "\n" + _0x55dc1e.hex('#' + _0x115d64)("◆━━━━━━━━━◆ 𝐒𝐔𝐉𝐎𝐍-𝐁𝐎𝐒𝐒◆━━━━━━━━◆\n"));
};
module.exports.languages = {
  'vi': {
    'on': "Bật",
    'off': "Tắt",
    'successText': "console thành công"
  },
  'en': {
    'on': 'on',
    'off': "off",
    'successText': "console success!"
  }
};
module.exports.run = async function ({
  api: _0x11b0f6,
  event: _0x43824c,
  Threads: _0x5bc493,
  getText: _0x776f7e
}) {
  const {
    threadID: _0x3d7603,
    messageID: _0x178d12
  } = _0x43824c;
  let _0x275ea5 = (await _0x5bc493.getData(_0x3d7603)).data;
  if (typeof _0x275ea5.console == "undefined" || _0x275ea5.console == true) {
    _0x275ea5.console = false;
  } else {
    _0x275ea5.console = true;
  }
  await _0x5bc493.setData(_0x3d7603, {
    'data': _0x275ea5
  });
  global.data.threadData.set(_0x3d7603, _0x275ea5);
  return _0x11b0f6.sendMessage((_0x275ea5.console == false ? _0x776f7e('on') : _0x776f7e("off")) + " " + _0x776f7e("successText"), _0x3d7603, _0x178d12);
};
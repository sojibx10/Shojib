const chalk = require("chalk");
function randomColor() {
  var _0x4d920e = '';
  for (var _0x3f95cc = 0; _0x3f95cc < 3; _0x3f95cc++) {
    var _0x567b90 = Math.floor(Math.random() * 256).toString(16);
    _0x4d920e += _0x567b90.length == 1 ? '0' + _0x567b90 : _0x567b90;
  }
  return '#' + _0x4d920e;
}
module.exports = (_0x283e1c, _0x15ce48) => {
  switch (_0x15ce48) {
    case "warn":
      console.log(chalk.bold.hex("#ff0000").bold("» Log « ") + _0x283e1c);
      break;
    case "error":
      console.log(chalk.bold.hex("#ff0000").bold("» Log « ") + _0x283e1c);
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold(_0x15ce48 + " » ") + _0x283e1c);
      break;
  }
};
module.exports.loader = (_0x5e68ac, _0x2609c1) => {
  switch (_0x2609c1) {
    case "warn":
      console.log(chalk.bold.hex(randomColor()).bold(" •─༅𝐒𝐔𝐉𝐎𝐍 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓 ༅─• ") + chalk.bold.hex("#8B8878").bold(_0x5e68ac) + chalk.bold.hex("FF00DD")(''));
      break;
    case "error":
      console.log(chalk.bold.hex(randomColor()).bold(" •─༅𝐒𝐔𝐉𝐎𝐍 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓 ༅─• ") + _0x5e68ac + chalk.bold.hex("5EFF00")(''));
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold("∞∞SUJON LOADED∞∞") + chalk.bold.hex(randomColor()).bold(_0x5e68ac) + chalk.bold.hex("FFF0000")(''));
      break;
  }
};

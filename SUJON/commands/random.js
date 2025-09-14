const request = require("request");
const fs = require("fs");

module.exports.config = {
 name: "random",
 version: "1.0.0",
 hasPermission: 0,
 credits: "Cyber-Sujon",
 description: "Send a random sad video by name",
 commandCategory: "media",
 usages: "/random <name>",
 cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
 const axios = require("axios");
 const nameParam = args.join(" ");
 if (!args[0]) {
 return api.sendMessage(
 "[ ⚠️ ] দয়া করে একটি নাম লিখুন।\nউদাহরণ: /random sujon",
 event.threadID,
 event.messageID
 );
 }

 try {
 const apis = await axios.get("https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json");
 const n = apis.data.api;
 const res = await axios.get(`${n}/video/random?name=${encodeURIComponent(nameParam)}`);

 const videoUrl = res.data.url;
 const name = res.data.name;
 const cp = res.data.cp;
 const ln = res.data.count;
 const filePath = __dirname + "/cache/video.mp4";

 const file = fs.createWriteStream(filePath);
 request(videoUrl)
 .pipe(file)
 .on("close", () => {
 return api.sendMessage({
 body:
 `${cp}\n\n` +
 `🎞️ মোট ভিডিও: ${ln}টি\n` +
 `➕ এই ভিডিওটি API-তে যুক্ত করেছেন: ${name}\n\n` +
 `🤖 Powered by 𝐂𝐲𝐛𝐞𝐫-𝐒𝐮𝐣𝐨𝐧`,
 attachment: fs.createReadStream(filePath)
 }, event.threadID, event.messageID);
 });

 } catch (err) {
 console.error(err);
 return api.sendMessage("😢 এই নামে কোনো ভিডিও পাওয়া যায়নি...💔", event.threadID, event.messageID);
 }
};
const os = require("os");

const startTime = new Date();


module.exports = {

  config: {

    name: "uptime",

    version: "3.3.0",

    hasPermssion: 0,

    credits: "SHAHADAT SAHU",

    description: "Show system info and uptime with single-message progress bar animation",

    commandCategory: "system",

    usages: "uptime",

    prefix: false,

    cooldowns: 5

  },


  run: async function ({ api, event }) {

    try {

      api.sendMessage("[█░░░░░░░░░░] 10%", event.threadID, async (err, info) => {

        if (err) return console.error(err);

        let messageID = info.messageID;


        // Progress Bar Steps

        const steps = [

          { bar: "[██░░░░░░░░░]", percent: "20%" },

          { bar: "[██████░░░░░]", percent: "60%" },

          { bar: "[█████████░░]", percent: "90%" },

          { bar: "[███████████]", percent: "100%" },

        ];


        for (const step of steps) {

          await new Promise(r => setTimeout(r, 700));

          try {

            await api.editMessage(`${step.bar} ${step.percent}`, messageID);

          } catch (e) {

            // fallback যদি editMessage না চলে

            await api.unsendMessage(messageID);

            const newMsg = await api.sendMessage(`${step.bar} ${step.percent}`, event.threadID);

            messageID = newMsg.messageID;

          }

        }


        // Uptime

        const uptimeSec = (new Date() - startTime) / 1000;

        const days = Math.floor(uptimeSec / 86400);

        const hours = Math.floor((uptimeSec % 86400) / 3600);

        const minutes = Math.floor((uptimeSec % 3600) / 60);

        const seconds = Math.floor(uptimeSec % 60);

        const uptimeFormatted = `${days}d ${hours}h ${minutes}m ${seconds}s`;


        // System Info

        const cpuUsage = os.loadavg()[0].toFixed(2); // 1 min avg load

        const totalMem = os.totalmem() / 1073741824;

        const freeMem = os.freemem() / 1073741824;

        const usedMem = totalMem - freeMem;


        // Date/Time BD

        const now = new Date();

        const date = now.toLocaleDateString("en-US");

        const time = now.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka", hour12: true });


        // Ping

        const startPing = Date.now();

        const ping = Date.now() - startPing;

        const status = ping < 300 ? "✅ Smooth System" : "⛔ Bad System";


        // Final Message

        const finalMsg = `♡ ∩_∩

（„• ֊ •„)♡

╭─∪∪────────────⟡

│.  ☢️ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗜𝗡𝗙𝗢 ☢️

├───────────────⟡

│ ⏰ RUNTIME

│ ${uptimeFormatted}

├───────────────⟡

│ 👑 SYSTEM INFO

│ OS: ${os.type()} ${os.arch()}

│ LANG VER: ${process.version}

│ CPU MODEL: ${os.cpus()[0].model}

│ STORAGE: ${usedMem.toFixed(2)} GB / ${totalMem.toFixed(2)} GB

│ CPU LOAD: ${cpuUsage}

│ RAM USAGE: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB

├───────────────⟡

│ ✅ OTHER INFO

│ DATE: ${date}

│ TIME: ${time}

│ PING: ${ping}ms

│ STATUS: ${status}

╰───────────────⟡`;


        await new Promise(r => setTimeout(r, 1000));

        try {

          await api.editMessage(finalMsg, messageID);

        } catch (e) {

          await api.unsendMessage(messageID);

          await api.sendMessage(finalMsg, event.threadID);

        }

      });

    } catch (error) {

      console.error("Uptime command error:", error);

      await api.sendMessage("❌ Failed to load uptime info.", event.threadID);

    }

  }

};
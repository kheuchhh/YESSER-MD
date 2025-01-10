const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dZRGlTVE83bDhjQ0w1SFdTT3ZzVDdKd1lJZTdQOFA0VFkzb25YVTQyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHhzY21DZnZhSDJlNkNzTEpxYUhlSmJkdklCaFAycVZySDJadmZxUVdtRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTUtnVDhZTXpEdjlKT3czOC9ib1dlek1Ba3NoVURSOTZYbHVsVGxGMVZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwcXJnMnIzVWUzV0FUbmZFNUhtRnBmTFE3V3JtWEsvejFyYVAySzNTSkRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBNGNyWkJUczg1ZWlIRWo3a0xDRG9TVTc4bzdocnhWNFdtNmJtUXRvMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisvbVRYRWZTQ3ZNMGxXSEROWVIvTThDUEl0cEs4K3FOUitxQ2FhMjduUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFyUFlVVlQzQVBwNWRBOXF0STdsZmwvaUk1WHVic2M4STNPYk42U0gzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDF4VjF3d3FvZFpjMXZnZmtwbmhvNCtaeStzVTc4RWJ6ZmVEbTBTRmdGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFDUjBMamhQODlycE9jYXZLQ1haMXNKNmprQXdXOHVUTWZ5YWM4cGJGZjFCK0d2ZlBGM2oyeTJVUExHZzBMclE5VTZnNHdUWUp6cE1HeGlWZDJtRGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiI1cllUdFI3eGJGQml4RTRmckRDOUZrV2E5SWFBSzh3VDEvSFVMOGZGZ1g4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4bFZHV2JoOVFDLTg1MkZCNTdIQjVBIiwicGhvbmVJZCI6IjkyMjgyOWJkLWU0ODYtNGMxZi04YTE3LWJkMWNkNDZhMTY2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFZlUzZENYWldCUjBZeG9yM1hxcG9VTGRabHM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRrdDU5YTcxUEgxdTEzRnM1T0tWQTJrNDJ2Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04yQzNZUUJFUEQxZ2J3R0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdiV3pDVVFiME9naDhPVmJIaGtNWVN4V050b0RUV2g1RkRna0IwRDd4VVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImF3ejMwU2lBNk9lOHFyVW9GQy8waDVUSzdISU8wdU82YUFBUXE4ZGgycmw0NFllRlRvMFpxV3c1UUgySWtqVTBlM0o3VDI0UjRXd3JPU3dtUUdVYUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzU3lPaW9GdWZ5VmNIajUwTWJtTmxTbUJiMlZsL0pxT1V1RU9EazhRM0JuWnIxSlJSLzZad2Z6cyt6N056bE1SWG9Vd3pudE9PVGNZWHlzeHQ0WWdqQT09In0sIm1lIjp7ImlkIjoiMjIxNzc2NjIyMjEzOjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4ODkyNzI5Nzg4ODQwNDo5QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3NzY2MjIyMTM6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbTFzd2xFRzlEb0lmRGxXeDRaREdFc1ZqYmFBMDFvZVJRNEpBZEErOFZGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY0NzMzNDEsImxhc3RQcm9wSGFzaCI6IjN4WFdZWiJ9",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

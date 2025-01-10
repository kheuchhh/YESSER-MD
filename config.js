const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUh6Z2FmSTJIYTFwNW1CelluN24rMWdReHBiYUlrVjRYbnA5M1J1U09WRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3M4UGZPSmpteFhyaVU2UFN2ck1QZDB0NE9XQ3RFR3VuaHQ5eExJbW1rND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQTZjY1hZL2R2N1VCdjdaSEhMVlpPM2xuNk9hR05vdjdXSDBFSTBrWVVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHKzJGNWNqWDFLS2F0YjVBSm4rRU1CYjg1Y2lOOENmcHpacmhMZG5GMHdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLMXp1TkVuNjZwcDdhRElYMUxDdzM3czlIamlhMWRlekg0VzkwVC91bXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ1Zys1RHRLR3NoZjBkWmdQeW1tM0taNmY0WUFDNndNK2tzdDEzYVFQVk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkY5bEVnRW1Bb1FOeUwwZm9kVzkxbHp6MmloZDdhY2x0UUZ4MWNCMm5WWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1R4bzk3MW1CelpOVWwzOUp4TnUvRUVNaGh2clF4L2ZBWjJjM3h1NUpYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVVUVlERFNCczM0V0poY0hPMFgzbFFUNFA5OGVscG9kYllPaDB4dC9qZkdrTGJZZXhsUmxVeHpvTVpQbWJQcWxhaXgrbkhwM2tDd0tqM0xVVjJYQ2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoieTJtb1F5YVkvbzJhMEw2VjZjNGZpVURud2U1S2wzQjlucm5xSjVJaDYrVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicnVzdE93ZXhScUc0eXlJbDBUVVFndyIsInBob25lSWQiOiIwOWJiNDhjNi05NjU5LTQ5NTktYTdkZS1jNzYxOGViOWVmMTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNCtnSGVKRDhINFhORmZ5RGxmR3dCN2tWU1VrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjaFd1VUVHbUJLcWpkVGJONGZvZXIxZ3FkQW89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOMkMzWVFCRUlEWmdid0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHYld6Q1VRYjBPZ2g4T1ZiSGhrTVlTeFdOdG9EVFdoNUZEZ2tCMEQ3eFVVPSIsImFjY291bnRTaWduYXR1cmUiOiIyYkpqZ3dNVU42K0h6cHYzYVAxbzBGNmdwK2haNGc5TDJvU0Y1WUhTQUNFUk9NWnBicit3SnVJbElpVnU3SUlvU2laUkdlYW5uamdQSU9JNWQ0YUpEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZW5yZWMzcVNzU1Rha3hCT2VlTDB4bWdRRklCS2FYdUNhdGZzSG5CTjBjb1FRZVBvSEcybXJML3NTckVuOEk1U2pDUGxqR1BjUVhFNGd1b2gyZFFWZ1E9PSJ9LCJtZSI6eyJpZCI6IjIyMTc3NjYyMjIxMzo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiODg5MjcyOTc4ODg0MDQ6N0BsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzc2NjIyMjEzOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUm0xc3dsRUc5RG9JZkRsV3g0WkRHRXNWamJhQTAxb2VSUTRKQWRBKzhWRiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NDY5NjQ3LCJsYXN0UHJvcEhhc2giOiIzeFhXWVoifQ==",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

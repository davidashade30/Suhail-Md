const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_09_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAyNixcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlV0Z09oSU5lTEhXYzIvaUF3ckFQQnhCZEVtb2wzbWdBblpzSnFrQ3l4YUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhJWHFmNWFCUkVxc1ZGbDkxNGtQLVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk2YjJmZGYtNjFiYy00N2ExLTkwNDAtYmYyYjliYmJiZmNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDE1OSxcbiAgICAgIDE4MixcbiAgICAgIDE5MyxcbiAgICAgIDMxLFxuICAgICAgNDIsXG4gICAgICAxNzMsXG4gICAgICAyMTQsXG4gICAgICA1NixcbiAgICAgIDE2MyxcbiAgICAgIDIzOCxcbiAgICAgIDEwOSxcbiAgICAgIDIxMyxcbiAgICAgIDc2LFxuICAgICAgMTMzLFxuICAgICAgMTM4LFxuICAgICAgMTA4LFxuICAgICAgMixcbiAgICAgIDM2LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDI0MixcbiAgICAgIDE3NyxcbiAgICAgIDEwMSxcbiAgICAgIDE4MSxcbiAgICAgIDQ1LFxuICAgICAgMTUsXG4gICAgICAyMTIsXG4gICAgICAxMzUsXG4gICAgICAyMyxcbiAgICAgIDEzMixcbiAgICAgIDM1LFxuICAgICAgMTEzLFxuICAgICAgNzgsXG4gICAgICAxMDAsXG4gICAgICA3MyxcbiAgICAgIDg5LFxuICAgICAgMzcsXG4gICAgICAzNSxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0phZnhZY0ZFSktkcDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK1NmdE8zRHhZczFObkk0ckFqOUZ5azk2eC9WVndWRTdBTGdUMzJ2a3NqOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2VVRYUDFBRnF0Ky9aWkJmby9HNmtqaCtqTVA4ZFE0SmxCQ0ZJeE1iSFpiRUY1a1IwN0dJU010Uys1YXYxd04vTHFaanAzR0p6RXNQb2FNWFhQdURndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6U1h5RlBzZkp0aG42UnJiNFNUM2hHYjgwWnNJK0xsTXpUZjBTWmFVUFpnZURqZ2pPZGJPOXI1Q21FUmFsWldHSDNPM011Z0gwL0dORjdROWdjKzhDQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjMzODE2ODI6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEdW1lYmlcIixcbiAgICBcImxpZFwiOiBcIjUxMjYwNTM1Mzc3OTc3Ojg5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MzM4MTY4Mjo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMDczNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEYTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURhOS5qc29uIjogIntcImtleURhdGFcIjpcInFSWHNocEx4eXVZemVvdjR3U2U1bDZQeEg2Wk5MZ1kyL0c1ZHQwdXZVems9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1Nzk5MTgzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMzA3MzU3MDE2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

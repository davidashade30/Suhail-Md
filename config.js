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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_08_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV2xzV3RtWmRGeHdYUVR6VVBQTExFeTliZytpRWJZcVZKa0dUYXlOeGpyYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicG9GZ1BjcVdUVnFfUXFwX0lLRWs4QVwiLFxuICBcInBob25lSWRcIjogXCIwNzZlMjkzNC02YTQxLTQxODktYTIwZS03YmQ2MDYyMGU4M2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgNzQsXG4gICAgICA0MyxcbiAgICAgIDg3LFxuICAgICAgMTU1LFxuICAgICAgMTM3LFxuICAgICAgMTA2LFxuICAgICAgMTI5LFxuICAgICAgODMsXG4gICAgICA0NyxcbiAgICAgIDE3NixcbiAgICAgIDMxLFxuICAgICAgNixcbiAgICAgIDE1LFxuICAgICAgOTEsXG4gICAgICA3OCxcbiAgICAgIDIyNyxcbiAgICAgIDEyNyxcbiAgICAgIDE0NCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDE3MCxcbiAgICAgIDEwOCxcbiAgICAgIDE2MCxcbiAgICAgIDExNyxcbiAgICAgIDExLFxuICAgICAgODIsXG4gICAgICAxNDcsXG4gICAgICAxNjQsXG4gICAgICAzNSxcbiAgICAgIDIzNSxcbiAgICAgIDI0LFxuICAgICAgMjUzLFxuICAgICAgMjUzLFxuICAgICAgMTYzLFxuICAgICAgNjksXG4gICAgICAxMjUsXG4gICAgICAxODcsXG4gICAgICAxMDgsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1dHNERBN1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzM0MDY3MDM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMTgxODI5MTY2MzA2MzoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbk82NkVLRU5Ua3ByUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInk4eldjanhDSk5VVkpKV0ZKSUhGT3ZYYWdieFhyd3VUMHZvdnhqL3J0bFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic091YTJ2UU5IeFJsRFR3dk05SFdldnBpUWxJTmNGaVJBWEpRK0dwcTRQSE12TEJKRXp3all1d25kTXhRMEEvSkIwRUJsNGJnazdvTDZVMUZKVnZMQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid20xcUZGQks4ay9hd1NQS3IyRzBCWFcwQnFkSWVVRE9zcjhvdE1ybm0wc1FBUmtVQUVOcTN1eTZhUGhzVWZhbEI0VXdlSnJoQnluNElPRGpYcHphRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzMzQwNjcwMzoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzAwMTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2dHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZ0cuanNvbiI6IHt9Cn0="

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

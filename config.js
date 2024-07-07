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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_01_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyNGM4bkltZ0U1ejJEVnA0R1kvOUZ3RjNMSHBYZDdFS3RaYXlVejd3aHF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjU5MTIwMzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZCRjY1MTJCNjU2QkY0NjE2NzQyNkE1RUVFMkEzQjA4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI5MjQ4NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1YldpNkctcFNGMkNuM1E3dVJtSnJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0MGNlMDE0LTJkM2QtNDZlZC1iZjhhLWMzYzNiNmNmOTBlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAyMDMsXG4gICAgICAxNzUsXG4gICAgICA5MixcbiAgICAgIDE5MyxcbiAgICAgIDIxNyxcbiAgICAgIDc4LFxuICAgICAgMTEyLFxuICAgICAgMTA0LFxuICAgICAgNTMsXG4gICAgICAyMjMsXG4gICAgICA2MSxcbiAgICAgIDQ1LFxuICAgICAgMTAyLFxuICAgICAgMTIsXG4gICAgICAyMTIsXG4gICAgICAzOCxcbiAgICAgIDE4NyxcbiAgICAgIDIyOCxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDIyNixcbiAgICAgIDE5OCxcbiAgICAgIDM1LFxuICAgICAgMTU4LFxuICAgICAgMTIzLFxuICAgICAgNzIsXG4gICAgICA1OCxcbiAgICAgIDI4LFxuICAgICAgMTcyLFxuICAgICAgMTI0LFxuICAgICAgMTkxLFxuICAgICAgMTAsXG4gICAgICAyNixcbiAgICAgIDEzOSxcbiAgICAgIDgxLFxuICAgICAgMTQ1LFxuICAgICAgMTkwLFxuICAgICAgNSxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxMzY5OEpSNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NTkxMjAzMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODg2MDkyNzc3NDMxMzk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTG5nOHdIRVArb3ByUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtXbjVtQ2poTThYdzBNUEM1K2ZHTGd3WmFRdE9iOENhaTlzRWRJWU1OSHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTFwR3FWOTNVOTZyZFpnRGc0VE9EVHkxS2tRRUp5ZVZQbHliQ2M5MHlqL28vOGtYeDdrRks5cVZyYk0rbFcwNndHLzZJelU4L0Y5WkhDSDlUVUZwQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSSsrOUJjY0pYZ0NxS2RKaUh4N09jMnhabnZnNVl4VEhmVUV1NzNaODcwNTlQR3hhNEFSZ0N3TlBvN0lEWkRlNGEyTkFSNlMyK3c4YWc5ODVUaTF1QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NTkxMjAzMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI5MjQ4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9JVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0lWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMG1iS0NlZXV3czJ2QzBNRjN4Qk5BcUtmakJFNVY2b3BabUg0MlB0bU4vRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDM4NDk0MTYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgwMTY0MjEzMjlcIn0iCn0="

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

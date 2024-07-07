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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODksXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWVzNrOTczUkZ4cXVOMWJpV2JPY09TbnJGQW94dXpVTnBHYVNLV1Y2Mi84PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDg2MDc1NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE5QUMyNjE1MzJDOEMwNjNEQTg1MUU1N0E4NkFDQTREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM0MTY4N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTUVBBY2pPZ1F2V0p3NmkzeFhvUEpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzM2M4MTI4LWJjYTMtNGEyYS1iODcwLTVlNjJjZTg0NWMxOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAyMixcbiAgICAgIDE3MyxcbiAgICAgIDgxLFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICAxNDcsXG4gICAgICAxMzEsXG4gICAgICAxNSxcbiAgICAgIDExOCxcbiAgICAgIDk3LFxuICAgICAgMjUsXG4gICAgICAxMCxcbiAgICAgIDE3OCxcbiAgICAgIDkxLFxuICAgICAgMTMzLFxuICAgICAgMTM3LFxuICAgICAgNDEsXG4gICAgICAyMjAsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAyMSxcbiAgICAgIDExNSxcbiAgICAgIDk4LFxuICAgICAgMzIsXG4gICAgICAzOCxcbiAgICAgIDcyLFxuICAgICAgMTEsXG4gICAgICAyMyxcbiAgICAgIDkxLFxuICAgICAgMTU3LFxuICAgICAgMTQ5LFxuICAgICAgMTAxLFxuICAgICAgMjIzLFxuICAgICAgMTMxLFxuICAgICAgNDYsXG4gICAgICAyMjksXG4gICAgICAzNyxcbiAgICAgIDgwLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzk4V1lTNTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDg2MDc1NDU6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY4OTM4NTIwMDY4MjEyOjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmTWdLc0VFSzJwcWJRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieEJDVE5kMVEwdTNJcG9kcXhXWXJJVTJPbkREVVdxL3ByM1VDckd5U1hCZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpTEFJZE9FckxHalAwUVUxWmJPZWZtT05KekZVdmFNL0ZmT3ByeXlhU0QzRTBTUmZzOFVnNzd2TFVTUjBQZm9KcUlON3FCMWlUM0toeTVIeVh0M3pBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1NGc4QTUyVUJTUXAzUFl6bmE1bkc5bWZydjlVM0k2Q2tJM3IyK3RLcjIxV0pBemVnK05aWGEwVmpYYlVUcVQrWTVRTmJQWExwWlZ4Sy9BYzRsVGdEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ4NjA3NTQ1OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzQxNjgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDV1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRdVFySk5VcDhVKzJQd2I3VzJFT2R6ZXFSUXpRUysyOEtacGV5WWVEQjQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjM5MjkyMDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDkzNDA0MzM5MFwifSIKfQ=="

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

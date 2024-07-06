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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_35_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFWkd3VHRoSkR2UStQYy8wMCs0UEZsbEpaYXAxelExQldnR1ZZaGU2R3NZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1Q1pjYXVReFFMYU9mWFMyVEYtNzVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4YTdlN2UyLTJiOTEtNGExZS1iZDM2LWI2ZGE5MzA0NDY0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICA5MixcbiAgICAgIDE1OCxcbiAgICAgIDMzLFxuICAgICAgNjMsXG4gICAgICA3MixcbiAgICAgIDQzLFxuICAgICAgMTQ1LFxuICAgICAgMTA5LFxuICAgICAgMTQ3LFxuICAgICAgMjQsXG4gICAgICA5NSxcbiAgICAgIDEzNyxcbiAgICAgIDYsXG4gICAgICA1MixcbiAgICAgIDQ4LFxuICAgICAgMjcsXG4gICAgICAyMDgsXG4gICAgICAzNCxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDEyNyxcbiAgICAgIDUsXG4gICAgICAyNDAsXG4gICAgICAyMDEsXG4gICAgICAxNTksXG4gICAgICA3MixcbiAgICAgIDIwNSxcbiAgICAgIDIyNixcbiAgICAgIDk4LFxuICAgICAgMTA4LFxuICAgICAgMjQ0LFxuICAgICAgNDksXG4gICAgICAyNDMsXG4gICAgICAxOTMsXG4gICAgICAxODgsXG4gICAgICAyNyxcbiAgICAgIDIzMixcbiAgICAgIDI2LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSytScDg4R0VKLzBwTFFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGaEhpaHI1RG41dm8xYVBSVjVCb1k3djJlUkY0TWU1dUYyQlF3dXlmcEI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVTd0pzQXYxV1pWNFZCYitYYzdLRVRieVJ0c1Fna3ZhV2h2TEJiQVkreXplNDFaOVF0TndMbWJWay9NclRmVVBaS1I4SGdOQkhVQmhtYTVzMEVQOWh3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndrd0U5dUlLRWtubERFREtOajlQdGszRzlRekI2ZzVUT3QyYWljaURsN01MeDFvQVFMaUR5VFRhclEyUzQ2SFFEc2NrMXZ2ZG9xaTEyQWNZaE9NbmdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MzM4MTY4Mjo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkR1bWViaVwiLFxuICAgIFwibGlkXCI6IFwiNTEyNjA1MzUzNzc5Nzc6ODRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYzMzgxNjgyOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2OTM0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt6c1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3prLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTEphdytjcjFQeUYxS3BmdHhqZVNJZnlwMVZJaVNVdWFpTHUzUUVWZ3Jycz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc2OTI4OTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMzE1NzQwOTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLem0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwM1NLODJEUEg4bTJBaWpSbVI0aktuekVvL0FEaWVqQXAvZE1IUkJKby9jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzY5Mjg5NDMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTM4MTAzMTU4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3puLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWFpNXB0MW1DSyt3M3pWM01VNThqTFhZVUtPWVZ3OUpiM0JpejNyUGpoYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc2OTI4OTQzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMzgxMDU1MDdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLenAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0RVAwZHNLRDB3am9nbzZBc2UwcUt0LzA4OElWZEFTN0ZtVTJNTmRsbmhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzY5Mjg5NDMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTkzMjk4NjUwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3pxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZS9ONTgvcUJ4cUhKSEpqNEtpS05oTm0veXlqdnlOakgyM1ByQWNtcTlMRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc2OTI4OTQzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxOTM0MzU0MzFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLenMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHcVZVU3FYaGlQZnhKMDd0Vkx0RHJXSE4rVmVLN1RsOCs3dHMyYnp1QzljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzY5Mjg5NDMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjY5MzMzMTU2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3p0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXM3WWEvY01Wdng5aEZkNmxabGJRQUpucUhTa05HQjc3VDhQTERaZHA4VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc2OTI4OTQzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNjkzMzUzMTBcIn0iCn0="  // PUT your SESSION_ID 


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

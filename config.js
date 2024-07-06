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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_39_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCL0dHbE1rYjN0dDNBS1hINDMyTE1SNXVURmc1Rm9nTXlYaTRRVlFPMm9VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5ZFl2alp6M1N4YV84VU1keDczU1ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjNjQwMzRkLTZhMGEtNDIwNy04Yjc4LTc2N2VkNjVkMjhhZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICA5NCxcbiAgICAgIDAsXG4gICAgICAyNTIsXG4gICAgICAyMjAsXG4gICAgICAyMDYsXG4gICAgICAxNzEsXG4gICAgICAyMzMsXG4gICAgICAzNixcbiAgICAgIDIzNSxcbiAgICAgIDE0NSxcbiAgICAgIDIyNyxcbiAgICAgIDgsXG4gICAgICAxODEsXG4gICAgICA1MixcbiAgICAgIDUyLFxuICAgICAgMjA0LFxuICAgICAgNTUsXG4gICAgICAyMCxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxNjksXG4gICAgICAxNTksXG4gICAgICAxMzgsXG4gICAgICAxNzcsXG4gICAgICA2MyxcbiAgICAgIDE3NixcbiAgICAgIDMsXG4gICAgICAxNjQsXG4gICAgICAxMDMsXG4gICAgICAxOSxcbiAgICAgIDM0LFxuICAgICAgMTcwLFxuICAgICAgMTI3LFxuICAgICAgMjQ1LFxuICAgICAgMzYsXG4gICAgICA1MCxcbiAgICAgIDE5MyxcbiAgICAgIDkzLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkhHNVgyWURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTE3MzQ4OTU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIqw4BXw4BMw4EqXCIsXG4gICAgXCJsaWRcIjogXCIyMDU2MDI0MzM0NzY0NjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYW0wS1FIRVBqeXByUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZWTVFNckZCQ0ZCVDhBNzFBakw5c0VXTG8wM3g1UmhkemN6U0F5bDBSaFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQmg0Rmp1N1F2ZlRZRzFhdXlKMzdNSVBrc0krRVhxSDQyMTRSMmRsNDhqOHNRNGJlczhYelBxYjVtanR6SlBmU2s1N3VVd3ZuTi9hSjdaa3RHaDhFREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib01tOGZRMUQ5Uy9vUzJkR3g1emFDMVVUWk9XY1U3eURteVpRTTlxa1ppeEFvYWQ2NTdRNGVMeGx4TGkzQ0REakp3L0FOTVRGNjBPSnN3RUtjSzNCQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMTczNDg5NToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzAxOTQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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

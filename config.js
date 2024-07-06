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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_32_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTFNyS0t4QkpOWHpGUlQ3LzdYZjFKdkRkVnY3aHM4dVJVZXZNa2VCNnQyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQzd4V0htZ09ULW0xUW9USkxncC1ud1wiLFxuICBcInBob25lSWRcIjogXCJkN2EzMTU5ZS05NTViLTRkMjUtOTk3Ny03NThmOWM2ZThkOTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAxOTIsXG4gICAgICA4MyxcbiAgICAgIDkxLFxuICAgICAgOTEsXG4gICAgICAxNzMsXG4gICAgICA5NCxcbiAgICAgIDcxLFxuICAgICAgMTgxLFxuICAgICAgMjksXG4gICAgICAyMjYsXG4gICAgICAyNDIsXG4gICAgICA4MixcbiAgICAgIDEzMyxcbiAgICAgIDM5LFxuICAgICAgMjAxLFxuICAgICAgMTAwLFxuICAgICAgNyxcbiAgICAgIDMzLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTkzLFxuICAgICAgMjksXG4gICAgICAxODUsXG4gICAgICAyMzYsXG4gICAgICA1NixcbiAgICAgIDI1LFxuICAgICAgMjIsXG4gICAgICA1NixcbiAgICAgIDIxMyxcbiAgICAgIDEwNixcbiAgICAgIDExLFxuICAgICAgMjcsXG4gICAgICAxODUsXG4gICAgICAyMzIsXG4gICAgICAxNDQsXG4gICAgICAxMDEsXG4gICAgICAyNDIsXG4gICAgICAxOTgsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZlFwODhQRU4rTHA3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdZc0FJSi9RN2g2ODFPQ3dZZUVuMDZBZHFWTGh0b2dmTmx0SmdaTHZmbnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGp0dnVaZCs1N0F0LzVGM1RjNkxNQjFxT0l5SjRMWUdZVjAyMnpLcWF4Sm5mNkVBVzEzUUppUW15aEFkSDNOam1NRzhHaDhWVFYvbzNjMG9FSmVBQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQndPQ3FRWENGZk44Nzdac2FDNWwxSnA1cUdzQkZMQ0RlMk9pelkyTzltUklmd2dDczFZVkdVcXg2NDZJQytYcGZvUTR5Z1hyY1JsQTd1MFlyRUNNZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDUxMzM5MjExOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM2NjI3NjY1Njk5MDY1OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Vt/CdlprwnZaI8J2WjvCdlprwnZaYXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDUxMzM5MjExOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzA1MTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFlWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWVYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVVmVSd3lzbnRjYnJhR0NNOEJKQzdKeEUwS1VtZU9taTlkRDc3UHZybHRnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxOTI4NTYxNjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDMwNTEyMzY5MFwifSIKfQ=="

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

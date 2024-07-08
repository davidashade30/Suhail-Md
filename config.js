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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_10_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNU25udlBMREVGa2hwNUE1S2x2YUljaURxREc2Vjh3MUdtT3prRWoyeG8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwT1QxelJsb1NZMlE1RkxVU2ZTN3NBXCIsXG4gIFwicGhvbmVJZFwiOiBcImExMzE0ZjA1LTQwYTctNGZhZC1hMjMwLWE2ZWM5MWNlZTVjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICA4MSxcbiAgICAgIDAsXG4gICAgICAxNTcsXG4gICAgICA2OCxcbiAgICAgIDk4LFxuICAgICAgMTI5LFxuICAgICAgMTg0LFxuICAgICAgMjI0LFxuICAgICAgMTk1LFxuICAgICAgMzMsXG4gICAgICA1MCxcbiAgICAgIDgxLFxuICAgICAgMTE3LFxuICAgICAgMTM5LFxuICAgICAgMTg2LFxuICAgICAgNzUsXG4gICAgICAxNDYsXG4gICAgICAzMixcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAzLFxuICAgICAgMTg0LFxuICAgICAgMTU0LFxuICAgICAgMTUxLFxuICAgICAgNDQsXG4gICAgICAxMTIsXG4gICAgICAxNDksXG4gICAgICAyMjAsXG4gICAgICA5MSxcbiAgICAgIDEwMSxcbiAgICAgIDExOCxcbiAgICAgIDkzLFxuICAgICAgMTIzLFxuICAgICAgOTYsXG4gICAgICA1NSxcbiAgICAgIDE1MixcbiAgICAgIDE2OCxcbiAgICAgIDQ1LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlM3M3NVRkVLMnVyN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCd0ZYV2czQXdxeUh2SDhqSDB6SDYwbGNtT1ROVm0wUTJGZ0FkMXQ3UW5BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVWc2ZqRWZhc3ZSL1M3VjRvSnpGMFNwVGYrNGJ5VnNqUGgweXVTTmVwYlByTFpHSUpYaVhZWXdkS1BhRCtCQURKcnJmK3dtSmhxMmZ3NDdHUXgvSkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImk0N21CWWdRcENWaXFoTDBrSmZ4THNjUCtZcGJJQTJIY042bmxkRTcvSkdGaXc0bnVZemlsWGdlMGszcWF3N3BNcWVsM05abG1ucnFrbHRBWnFmRkRRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzMzA3ODA4MDo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjU2MDU2NTkwNTgzMjU6NTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMzMDc4MDgwOjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ0MDYyM1xufSIKfQ=="

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

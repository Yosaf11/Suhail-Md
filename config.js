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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_10_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImYvd1RJN0Z5c0ttbXFKSWFKc3V2VGJFVklmRSs1aTVEaDdRc28yemM1Smc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBRWXppWE9nUkp5dU5aSXZvS1dZM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzVmNjllNDYtNWQzZi00ZTFiLTlmYzItN2M1NDVjNTk5ZThkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDE5LFxuICAgICAgMTQsXG4gICAgICAxNzEsXG4gICAgICAxMjEsXG4gICAgICAxMCxcbiAgICAgIDkxLFxuICAgICAgMjU0LFxuICAgICAgMTIyLFxuICAgICAgMjM4LFxuICAgICAgMjMzLFxuICAgICAgMTgxLFxuICAgICAgMTE1LFxuICAgICAgOTIsXG4gICAgICAxODUsXG4gICAgICA3NixcbiAgICAgIDIyOSxcbiAgICAgIDc1LFxuICAgICAgMTg1LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDIyOSxcbiAgICAgIDE5MixcbiAgICAgIDcsXG4gICAgICA2MyxcbiAgICAgIDg5LFxuICAgICAgMjMsXG4gICAgICAyMTUsXG4gICAgICAxNTIsXG4gICAgICAyMDAsXG4gICAgICAyNTEsXG4gICAgICAxOTQsXG4gICAgICA5NCxcbiAgICAgIDIyNCxcbiAgICAgIDExNyxcbiAgICAgIDIwMixcbiAgICAgIDE4MyxcbiAgICAgIDIyOSxcbiAgICAgIDkyLFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRBSDdWTjUyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMTU5NzE1MjU6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMDQ4NjQ1NzkyMTc4NjozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPelhwYjBCRUtqRXhyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjl3cHZsdHFNWVhSTFo5OVpiZ21tVkdEaDluaFpsMDBoVFBoMUZGcWovV1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTVloaW84UHF2QzdUbFd5c1EvWFlBbE1xenA3MlNtVG9ycGpwRmtUQVRzdEg1YXJqT3B2bldpMjFMV3dCcE9hbWRWLzRPNFB4WC9UdXhWQ29CaDY3Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2JRdWgya3NBTEI2TlBWMEdsNDZtaWJ0OHpab0htRExpQnJFUEMvVWcraytlNG5ZMDlMcnBMMnhQMzViRWNDQTBoK1NqUmxCM1U4eS9xdFhnMkw5aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTE1OTcxNTI1OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjkxNzQxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhHSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEdJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZXdKcnF0bzVxZENXYmN1UTF1QTBjdWY4T3d3cUt6TTRxL040NWxPa2k4WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozOTY5NzkxNzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI5MTczMDkzOTVcIn0iCn0="  // PUT your SESSION_ID 


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

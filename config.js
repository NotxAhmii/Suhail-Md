const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="notxahmii@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vaeqzcj4NVinr0ldVw1F";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaeqzcj4NVinr0ldVw1F" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ NotxAhmii" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923034819465";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_44_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlV5RTVRbHFLSUZRVmRuY0IvSGNMYVo0OTVScExZUGtGZ0FXSVRpMDJseXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpMakZxX0ExUzdlTzNicjlBNXVVa0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTJiODE5OTgtMjUzMi00OThhLTk3NWUtZWQzZjZlOTdlZjdjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE1OSxcbiAgICAgIDIxOSxcbiAgICAgIDMyLFxuICAgICAgNCxcbiAgICAgIDE0NCxcbiAgICAgIDkxLFxuICAgICAgMTU0LFxuICAgICAgMjI0LFxuICAgICAgMSxcbiAgICAgIDIyOSxcbiAgICAgIDYyLFxuICAgICAgOTksXG4gICAgICA2NyxcbiAgICAgIDEzNSxcbiAgICAgIDE4NCxcbiAgICAgIDE5NyxcbiAgICAgIDE1MSxcbiAgICAgIDgsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgOTUsXG4gICAgICA1MCxcbiAgICAgIDE5OSxcbiAgICAgIDk0LFxuICAgICAgMzcsXG4gICAgICAzMCxcbiAgICAgIDE2MCxcbiAgICAgIDEwNixcbiAgICAgIDEzMyxcbiAgICAgIDkxLFxuICAgICAgMjM4LFxuICAgICAgMTIwLFxuICAgICAgNTcsXG4gICAgICAyMSxcbiAgICAgIDIwMyxcbiAgICAgIDExNCxcbiAgICAgIDQyLFxuICAgICAgMTU5LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjExRVEyUDVaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzQ4MTk0NjU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJhZMOXQ2FwdGFpblwiLFxuICAgIFwibGlkXCI6IFwiODU2MjkyNDk1NDgzNjk6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSDJ5WXNCRUlxQno3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInI1dU9QK2YrUCtHbjdzeUc2cjJuWk1HVEVLcXlmcWFub2ZaNUNSTWpxVkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVWN0RXhqYzR1amtJeUVTVk8wTC85eFVOd2hvRDRsb01waE9UZzB4S256Rkk4Y0srLzVtMnk0cE5KZFo4aEVkSER0eHJuY0ErWEhKODJpOW1jeHVqRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibHMxbjZkMHdWUWo1Tjd2YStJTU1sdElwb3V0M0RZZmNXZG0yWSt4SFdDb1Z5cnhibUlRTk51N0g2VVk1cDYvQUlxTHlsbEdGL1BQLzlTZUVYUmpPaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDM0ODE5NDY1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDU2MjcxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ NOTXAHMII』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "AHMII_STICKERS",
  packname: process.env.PACK_NAME || "NOTXAHMII",
  botname : process.env.BOT_NAME  || "NOTXAHMII-SCOTT",
  ownername:process.env.OWNER_NAME|| "AHMAD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "uBrFddbP6isSxsoZnEYaZ9zd",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "3_4_f7c5_29dd_c03d",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "2d34297201ebd45e31178e3592990227";
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

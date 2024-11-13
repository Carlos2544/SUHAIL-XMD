const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_36_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJydEI4bzNoTzZHL0JBWGplSkZoVDlCdGxMRmxsYVBTR0lVTlFMZm12MXB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQWllVQmd3QVNDNmw1cm9MVTVUQU5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEyYTQ3ZmRjLWYwOWQtNGZlNS1hODE2LTE4Yjg5NWVkMjY5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDQ0LFxuICAgICAgODAsXG4gICAgICAzMCxcbiAgICAgIDk4LFxuICAgICAgMzcsXG4gICAgICAxMjYsXG4gICAgICAyMTgsXG4gICAgICA1MSxcbiAgICAgIDkyLFxuICAgICAgMTU1LFxuICAgICAgMjUyLFxuICAgICAgOTUsXG4gICAgICA3OCxcbiAgICAgIDY0LFxuICAgICAgMjE5LFxuICAgICAgNTgsXG4gICAgICAyMzMsXG4gICAgICAzNCxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDU1LFxuICAgICAgMjMwLFxuICAgICAgMTMwLFxuICAgICAgMjIyLFxuICAgICAgMjE2LFxuICAgICAgMjM5LFxuICAgICAgMTI2LFxuICAgICAgMTI5LFxuICAgICAgMTkwLFxuICAgICAgMTMxLFxuICAgICAgMTE1LFxuICAgICAgMTQxLFxuICAgICAgODUsXG4gICAgICAyMzAsXG4gICAgICAxNjYsXG4gICAgICAxMzUsXG4gICAgICAxMzMsXG4gICAgICAxMjYsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWExKNzNRUEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMTkyMTQxMzQ5MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ09NUFVURVIgV0laQVJEXCIsXG4gICAgXCJsaWRcIjogXCIxODQ5MDc0Njg5Mzk1MTk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNRzErZTBERU1TZTBya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlA3Vk8xOUl1ZmZhUE5kTVRuSzJVODh4TU1yQkcrN2NNNWpYL0FjMmJMek09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicHNkUFhDRUlzdnQ4SWdKQ2ptWFZWLzZxR3NSOWVpUGRlN2xnZnJ4MTIrMlhXWWFRTVV1RlBnem4yUFBRUEpVUVBTNUJjTGZaUGJiOVdqQ1JDejdmRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXNuaHpWQk9lQ1VJQjNKeWFFVWNuY0ViaXFrdkt1SjhuaFBNVnpVbU1SbmI4WnJwYlJ4YmhhZ0tVY3Ziam5qQkx1UEZlUVlLZUVBQ0ZUck5aaytkQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjExOTIxNDEzNDkxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDk3ODAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

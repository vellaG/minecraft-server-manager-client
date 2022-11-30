const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")
const rcon = require("rcon")

//variable hostname, port, rcon port, rcon password to be set
var hostname;
var port;
var rconport;
var rconpass;
var whitelistServerPort;



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname,'preload.js'),
      contextIsolation: true,
      sandbox: true
    }
  })
  win.loadFile('./page/settings.html')

  return win;
}

app.whenReady().then(() => {
  const win = createWindow()
 

//Handle set ports and hostname data
ipcMain.on('applyChanges',(even,data)=>{
  hostname = data.hostname
  port = data.port
  rconport = data.rconPort
  rconpass = data.rconpass
  whitelistServerPort = data.whitelistHandlerPort
 

})

//send settings back to client
ipcMain.handle('hostsettings', ()=>{
  return {
    hostname: hostname,
    port: port,
    rconPort: rconport,
    rconpass: rconpass,
    whitelistHandlerPort: whitelistServerPort
  }
})

//handle input from rcon
ipcMain.on('rconInput',(event,message)=>{
 
  win.webContents.send('rconOutput', message)
})


})


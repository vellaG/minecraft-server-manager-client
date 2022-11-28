const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")

//variable hostname, port, rcon port, rcon password
var hostname;
var port;
var rconport;
var rconpass;


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname,'preload.js')
    }
  })
  win.loadFile('./page/settings.html')
}

app.whenReady().then(() => {
  createWindow()
 
})
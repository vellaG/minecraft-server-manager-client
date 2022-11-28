const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    resizable: false
  })

  win.loadFile('./page/settings.html')
 
}

app.whenReady().then(() => {
  createWindow()
})
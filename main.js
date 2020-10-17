const {
  app, BrowserWindow, Menu
} = require('electron')
const shell = require('electron').shell

//TRY
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
      width: 800,
      height: 600,
      // Remove Frame
      frame: false,
      fullscreen: true,
      webPreferences: {
          // Enable Node.js integration
          nodeIntegration: true,
          devTools: true,
      }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
  })

  var menu = Menu.buildFromTemplate([{
      label: 'File',
      submenu: [{
          label: 'New Model',
          accelerator: process.platform== 'darwin' ? 'Command+N' : 'Ctrl+N',
          click() {}
      }, {
          label: 'Open',
      }, {
          type: 'separator',
      }, 
      {
        label: 'Save',
        accelerator: process.platform== 'darwin' ? 'Command+S' : 'Ctrl+S',
        click() {}
    },
    {
        label: 'Save As',
        accelerator: process.platform== 'darwin' ? 'Command+S' : 'Ctrl+T',
        click() {}
    },
    {
        label: 'Print',
        accelerator: process.platform== 'darwin' ? 'Command+P' : 'Ctrl+P',
        click() {}
    },{
          label: 'Exit',
          accelerator: process.platform== 'darwin' ? 'Command+Q' : 'Ctrl+Q',
          click() {
              app.quit()
          }
      }]
  }, {
      label: 'Pre Processor'
  }, {
      label: 'Simulation'
  }, {
      label: 'Post Process'
  }, {
      label: 'Export'
  }, {
      label: 'About',
      click() {
        let win1= new BrowserWindow({width: 600, height: 500})
        win1.loadFile('about.html')
      }
  }])
  Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
      app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
      createWindow()
  }
})

import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
// require("../../server");

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 800,
    backgroundColor: "#f2f2f2",
    // resizable: false,
    minHeight: 800,
    minWidth: 1400,
    title: "March",

    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      devTools: process.env.NODE_ENV !== "production",
      // preload: "ENTER FILE TO PRELOAD"
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:4000");
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "renderer/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// TODO : On 'resize', reload screen to adjust to new params

// TODO : On Blur, exit, foxus, etc, save progress in api call to server to ensure everything saves
// https://www.electronjs.org/docs/latest/api/browser-window


// process.dlopen = () => {
//   throw new Error('Load native module is not safe')
// }
// const worker = new Worker('script.js')

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

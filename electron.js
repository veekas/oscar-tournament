var app = require('app');
var BrowserWindow = require('browser-window');

var express = require('express');
var expressApp = express();

expressApp.use(express.static(__dirname));
expressApp.listen(30517);

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({ width: 1024, height: 768, center: true });

  mainWindow.loadUrl('http://localhost:30517');

  mainWindow.openDevTools();

  mainWindow.webContents.on('new-window', function(event, url, frameName, disposition, windowOptions) {
    windowOptions['node-integration'] = false;
  });

});
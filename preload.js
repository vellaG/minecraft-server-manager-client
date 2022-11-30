const {ipcRenderer,contextBridge} = require("electron");

contextBridge.exposeInMainWorld("settingApi", {
    applySettingChanges: function(data){
        ipcRenderer.send("applyChanges", data);
    },
    retrieveSettings: function() {
        return ipcRenderer.invoke('hostsettings')
    }
});

contextBridge.exposeInMainWorld('rconApi', {
    handleRconMessage: function(callback) {
        ipcRenderer.on('rconOutput', callback)
    },
    sendRconCommand: function(message) {
        ipcRenderer.send('rconInput',message)
    }
})


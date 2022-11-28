const {ipcRenderer,contextBridge} = require("electron");

contextBridge.exposeInMainWorld("settingApi", {
    applySettingChanges: function(data){
        ipcRenderer.send("applyChanges", data);
    },
    
});
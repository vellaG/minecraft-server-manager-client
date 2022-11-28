//inputs
const hostname = document.getElementById("hstnm");
const port = document.getElementById("hstp");
const rconport = document.getElementById("rcp");
const rconpass = document.getElementById("rcpp");
const wtlstport = document.getElementById("whtlstp")

document.getElementById("apply").onmouseup = ()=>{
    window.settingApi.applySettingChanges({
        hostname: hostname.value,
        port: port.value,
        rconPort: rconport.value,
        rconpass: rconpass.value,
        whitelistHandlerPort: wtlstport.value
    })
}
//inputs
const hostname = document.getElementById("hstnm");
const port = document.getElementById("hstp");
const rconport = document.getElementById("rcp");
const rconpass = document.getElementById("rcpp");

window.settingApi.retrieveSettings().then(dat=>{
    hostname.value = dat.hostname || ''
    port.value = dat.port || ''
    rconport.value = dat.rconPort || ''
    rconpass.value = dat.rconpass || ''
})


document.getElementById("apply").onmouseup = ()=>{
    window.settingApi.applySettingChanges({
        hostname: hostname.value,
        port: port.value,
        rconPort: rconport.value,
        rconpass: rconpass.value
    })
}


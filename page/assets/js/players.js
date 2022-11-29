
//handle inability to retrieve players
function failPlayerRetrieve() {
    document.getElementById('noPlayers').innerText = "Cannot Connect to Server"
    document.getElementById('noPlayers').style.color = "red"
}

//makeplayercell
function makePlayerCell(namep,pfpurl) {
    const playercell = document.createElement('div');
    playercell.classList.add('playercell')
    const img = document.createElement('img')
    img.style.width = '45px';
    img.style.height ='45px';
    img.src = pfpurl
    const name = document.createElement('h5')
    playercell.appendChild(img)
    playercell.appendChild(name)
    name.classList.add('playername');
    name.innerText = namep
    document.getElementById('playerContainer').appendChild(playercell)
}

//Get Player data
window.settingApi.retrieveSettings().then(dat=>{

if (dat.hostname == undefined || dat.port == undefined) {
    failPlayerRetrieve();
    return false;
}

fetch('https://api.mcsrvstat.us/2/'+dat.hostname+":"+dat.port, {cache:'no-store'}).then(dats=>dats.json().then(date=>{
    if (date.online == true) {
        if (date.players.online > 0) {
            for (player in date.players.list) {
                const name = date.players.list[player]
                makePlayerCell(name, 'https://mc-heads.net/avatar/'+name);
                document.getElementById('noPlayers').remove()
            }
            

        }else {
            //handle if no players online
        }
        document.getElementById('PlayerCount').innerText = "Players Online ("+date.players.online.toString()+"/"+date.players.max.toString()+")"

    }else {
        document.getElementById('noPlayers').innerText = "Cannot Connect to Server"
        document.getElementById('noPlayers').style.color = "red"
        failPlayerRetrieve()
    }
})).catch(err=>{
    console.error(err)
})





})

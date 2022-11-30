//elemnts
const rconInput = document.getElementById('rconin');


function printRcon(msg) {
    const msgs = document.createElement('h6');
    msgs.innerText = msg
    msgs.classList.add('rcontext')
    document.getElementById('rconout').appendChild(msgs)
    document.getElementById('rconout').scroll({top: document.getElementById('rconout').scrollHeight, behavior:"smooth"})
    
}


//print msg to rcon message from main process
window.rconApi.handleRconMessage((_event, message)=>{
    printRcon(message)
} )

rconInput.onkeydown = (event)=>{
    if (event.code=="Enter") {
        window.rconApi.sendRconCommand(rconInput.value);
        rconInput.value = "";
    }
}

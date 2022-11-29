function printRcon(msg) {
    const msgs = document.createElement('h6');
    msgs.innerText = msg
    msgs.classList.add('rcontext')
    document.getElementById('rconout').appendChild(msgs)
    document.getElementById('rconout').scroll({top: document.getElementById('rconout').scrollHeight, behavior:"smooth"})
    
}


let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let PlayerNumber = Math.floor(Math.random() * 6 + 1);

    button.innerText = 'tira ancora';
    
    let PcNumber = Math.floor(Math.random() * 6 + 1);
    
    document.getElementById('PlayerNumber').innerHTML = `il tuo punteggio è: ${PlayerNumber}`;
    document.getElementById('PcNumber').innerHTML = `il punteggio del Computer è: ${PcNumber}`;
    
    if(PlayerNumber > PcNumber){
        button.innerText = 'Hai vinto!';
    } else if (PlayerNumber < PcNumber){
        button.innerText = 'Hai perso!';
    } else {
        button.innerText = 'Hai pareggiato, riprova!';
    }
})
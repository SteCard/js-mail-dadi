"use strict";

// ARRAY EMAIL CON ACCESSO
const mail_list = ["MartyMcFly@gmail.com", "FrodoBaggins@gmail.com", "MarkLenders@gmail.com", "McLovin@gmail.com"];

// PROMPT EMAIL
let email = prompt('Inserire Email');

// VARIABILE DI CONTROLLO - FLAG
let flag = false;

// CICLO FOR ARRAY MAIL LIST
for (let i = 0; i < mail_list.length; i++){

    // CONFRONTO EMAIL ARRAY CON EMAIL INSERITA DALL'UTENTE
    if (email.toLowerCase() === mail_list[i].toLowerCase()){
        
        flag = true;
    }
}

// MESSAGGIO ESITO CONTROLLO EMAIL
if(flag === true){

    console.log('Mail valida')
    alert("L'email inseritaha superato la verifica di accesso, è possibile proseguire.");

} 
else{ 

    console.log('Mail NON valida')
    alert("L'email inserita NON ha superato la verifica per accedere.");
}
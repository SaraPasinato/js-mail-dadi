/*
? Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//vars
var usersEmail=["pinco@yahoo.it","panco@gmail.com","cip@icloud.com","ciop@alice.it"];
//show array on console 
console.log("Questi sono le email che puoi scegliere: ");
console.table(usersEmail);
var userEmail= prompt("inserisci un' email: ","pinco@yahoo.it");
var isCorrect=false;    //flag 

/////TODO: validation user input
if (userEmail.length === 0){
    alert("non hai inserito email.");
}

//debug inline
console.log("scelta utente: ",userEmail);

//search for userEmail
for(i=0;i<usersEmail.length;i++){
    if(userEmail == usersEmail[i]){
        isCorrect=true;
    }
}
//access to html tag
var access=document.getElementById('access');

//write html tag response
if(isCorrect==false){
    access.innerText=" Spiacente, la sua Email non è inserita.\n Ritenti";
    access.style.color="#f00";
}else{
    access.innerText="La sua email è corretta , può accedere.";
    access.style.color="#0ca678";
}

//debug inline
console.log("valore flag:",isCorrect);
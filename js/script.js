////console.log('JS OK');

/* TRACCIA:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

// 1 - prendo l'elemento dal DOM
const pwdgenElement = document.getElementById('pwdgen');
////console.log(pwdgenElement); 

// 2 - metto l'ultimo dato che comporrà la password in una variabile
const lastElement = '21';

// 3 - Chiedo all’utente il nome con un prompt e lo salvo in una variabile
const firstName = prompt('Qual è il tuo nome?', 'es: Mario');
////console.log(firstName); 

// 4 - Chiedo all’utente il cognome con un prompt e lo salvo in una variabile
const lastName = prompt('Qual è il tuo cognome?', 'es: Rossi');
////console.log(lastName); 

// 5 - Chiedo all’utente il colore prederito con un prompt e lo salvo in una variabile
const favuriteColor = prompt('Qual è il tuo colore preferito?', 'es: blue');
////console.log(favuriteColor); 

// 6 - Compongo la password montando nel pwdgenElement tutti i dati raccolti
pwdgenElement.innerText = `La tua password è: ${firstName}${lastName}${favuriteColor}${lastElement}`;

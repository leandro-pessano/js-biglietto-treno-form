// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// Nome delle variabili
var nome, km, eta, carrozza, prezzo;

eta = document.getElementById('eta').value = '';

// Click su button "genera"
document.getElementById("genera").addEventListener('click',
function() {
  // codice
  // definizione variabili
  nome = document.getElementById('nome').value;
  km = document.getElementById('km').value;
  eta = document.getElementById('eta').value;
  prezzo = km * 0.21;
  if (eta == 'Sconto Minorenne') {
    prezzo = (km * 0.21) / 100 * 80;
  } else if (eta == 'Sconto Over 65' ) {
      prezzo = (km * 0.21) / 100 * 60;
  }

  // valori a schermo
  document.getElementById('biglietto').className = 'show';

  document.getElementById('nome-input').innerHTML = nome;
  document.getElementById('offerta').innerHTML = eta;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*10) + 1;
  document.getElementById('codice').innerHTML = Math.floor(Math.random()*10000) + 90000;
  document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' €';
  //
}
);

// Click su button "annulla"
document.getElementById("annulla").addEventListener('click',
function() {
  // codice
  // definizione variabili
  nome = document.getElementById('nome').value = '';
  km = document.getElementById('km').value = '';
  eta = document.getElementById('eta').value = '';

  // valori a schermo
  document.getElementById('biglietto').className = 'hidden';

  document.getElementById('nome-input').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice').innerHTML = '';
  document.getElementById('prezzo').innerHTML = '';
  //
}
);

// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var nome, km, eta, prezzo;

document.getElementById("genera").addEventListener('click',
function() {
// codice
nome = document.getElementById('nome').value;
km = document.getElementById('km').value;
eta = document.getElementById('eta').value;
console.log(nome, km, eta);
prezzo = km * 0.21;
if (eta < 18) {
  prezzo = (km * 0.21) / 100 * 80;
} else if (eta >= 65 ) {
    prezzo = (km * 0.21) / 100 * 60;
}
//
}
);


// document.getElementById('km').innerHTML += km;
// document.getElementById('eta').innerHTML += eta;
// document.getElementById('generated-price').innerHTML = prezzo.toFixed(2) + ' €';

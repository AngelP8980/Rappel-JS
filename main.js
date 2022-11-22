"use strict"

// Affiche après chargement de la page

document.addEventListener('DOMContentLoaded', function() {
    console.log('Yes easy');
  });

  // ou 

document.addEventListener('DOMContentLoaded', console.log('Yes easy') );

//
// Affiche après clic bouton

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
} );

function onClickXHRButton(){
    console.log("J'ai cliqué c'est super la vie !");
}

//
// Affiche après clic bouton dans un endroit précis

function onClickXHRButton(){
    let container = document.getElementById('xhr-response');
    container.innerHTML = "Direct dans l'encart";
}


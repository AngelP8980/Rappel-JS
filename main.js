"use strict"

document.addEventListener('DOMContentLoaded', function() {
    console.log('Yes easy');
  });

  // ou 

document.addEventListener('DOMContentLoaded', console.log('Yes easy') );

//-------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
} );

function onClickXHRButton(){
    console.log("J'ai cliqué c'est super la vie !");
}

//-------------------------------------------------------------------------------------


function onClickXHRButton(){
    let container = document.getElementById('xhr-response');
    container.innerHTML = "Direct dans l'encart";
}


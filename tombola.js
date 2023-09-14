
 const numeriTombola = [];
 for (let i = 1; i <= 76; i++) {
   numeriTombola.push(i);
 }

 function estraiNumeroCasuale() {
   if (numeriTombola.length === 0) {
     alert("Hai estratto tutti i numeri!");
     return;
   }
   const indiceCasuale = Math.floor(Math.random() * numeriTombola.length);
   const numeroEstratto = numeriTombola.splice(indiceCasuale, 1)[0];

   const numeriEstrattiDiv = document.getElementById("numeriEstratti");
   numeriEstrattiDiv.textContent += " " + numeroEstratto;
 }

 const estraiButton = document.getElementById("estraiNumero");
 estraiButton.addEventListener("click", estraiNumeroCasuale);

function generaNumeriCartella() {
    const numeriCartella = [];
    while (numeriCartella.length < 76) {
      const numeroCasuale = Math.floor(Math.random() * 90) + 1;
      if (!numeriCartella.includes(numeroCasuale)) {
        numeriCartella.push(numeroCasuale);
      }
    }
    return numeriCartella;
  }
  
  function popolaCartella() {
    const cartellaDiv = document.getElementById("cartella");
    const numeriCartella = generaNumeriCartella();
  
    for (let i = 1; i <= 76; i++) {
      const cellaDiv = document.createElement("div");
      cellaDiv.classList.add("cell");
      if (numeriCartella.includes(i)) {
        cellaDiv.textContent = i;
      }
      cartellaDiv.appendChild(cellaDiv); 
    }
  }
window.addEventListener("load", popolaCartella);
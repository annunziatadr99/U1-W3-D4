const tabellone = document.getElementById("tabellone");
const estraiBtn = document.getElementById("estraiBtn");

const numeriEstratti = [];

function creaTabellone() {
  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;
    cella.id = "cella" + i;
    tabellone.appendChild(cella);
  }
}

function estraiNumero() {
  let numeroEstratto;
  
  do {
    numeroEstratto = Math.floor(Math.random() * 90) + 1;
  } while (numeriEstratti.includes(numeroEstratto));
  
  numeriEstratti.push(numeroEstratto);
  
  if (numeriEstratti.length >= 90) {
    alert("Riavvia la pagina per ricominciare ");
   
  }
  const cellaEstratta = document.getElementById("cella" + numeroEstratto);
  cellaEstratta.classList.add("estratta");
}

estraiBtn.addEventListener("click", estraiNumero);

creaTabellone();

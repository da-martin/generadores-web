const LIKELY = 0;
const FIFTY = 1;
const UNLIKELY = 2;
const DESCRIPTION = 3;


const tables = [
  ["Respuesta sí o no probable","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  ["Respuesta sí o no cincuenta cincuenta","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  ["Respuesta sí o no improbable","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  ["Descripción","Relacionado con personaje protagonista",
  "Relacionado con un personaje secundario",
  "Relacionado con alguna organización",
  "Lo opuesto a un personaje secundario",
  "Relacionado con un objetivo",
  "Alejado de un objetivo",
  "Inspira alegría",
  "Inspira tristeza",
  "Inspira temor",
  "Inspira asco",
  "Inspira confianza"]
];
// Los elementos del array con el formato .5 tienen que volver a 
//  llamar a rollOnTable en la tabla indicada.
// Los elementos del array con el formato :5 tienen que volver a 
//  llamar a rollOnTable dos veces en la tabla indicada.

//Tira en la tabla indicada por el parámetro
function rollOnTable(tableNumber){
  let randomIndex = Math.floor(Math.random() * (tables[tableNumber].length - 1)) + 1;
  let randomResult = tables[tableNumber][randomIndex];
  //console.log(tables[tableNumber]);
  console.log(randomIndex + "/" + tables[tableNumber].length);
  return randomResult;
}

const btnLikely = document.querySelector('#likely');
const btnFifty = document.querySelector('#fifty');
const btnUnlikely = document.querySelector('#unlikely');
const btnDescription = document.querySelector('#description');

btnLikely.addEventListener("click", function() {
  const txtResults = document.querySelector('#results');
  txtResults.textContent = rollOnTable(LIKELY);
});

btnFifty.addEventListener("click", function() {
  const txtResults = document.querySelector('#results');
  txtResults.textContent = rollOnTable(FIFTY);
});

btnUnlikely.addEventListener("click", function() {
  const txtResults = document.querySelector('#results');
  txtResults.textContent = rollOnTable(UNLIKELY);
});

btnDescription.addEventListener("click", function() {
  const txtResults = document.querySelector('#results');
  txtResults.textContent = rollOnTable(DESCRIPTION);
});




const selectColors = document.querySelector('#colors');
selectColors.addEventListener("change", function() {
    console.log(this.value);
    const body = document.querySelector('body');
    body.style.setProperty("--accent-color", this.value + ", 60%, 30%");
});

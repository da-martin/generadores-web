const PROBABLE = 0;
const CINCUENTA = 1;
const IMPROBABLE = 2;

const tables = [
  ["probable","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  ["cincuenta","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  ["improbable","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"]
];
// Los elementos del array con el formato .5 tienen que volver a 
//  llamar a rollOnTable en la tabla indicada.
// Los elementos del array con el formato :5 tienen que volver a 
//  llamar a rollOnTable dos veces en la tabla indicada.

//Tira en la tabla indicada por el parámetro
function rollOnTable(tableNumber){

  
}
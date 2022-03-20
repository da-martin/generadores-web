//Tables' index
const LIKELY = 0;
const FIFTY = 1;
const UNLIKELY = 2;
const DESCRIPTION = 3;
const NARRATIVE_ELEMENT = 4;
const CONVERSATION = 5;
const ACTION = 6;


//Tables' contents
const tables = [
  ["Respuesta sí o no: Probable","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  
  ["Respuesta sí o no: Cincuenta cincuenta","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  
  ["Respuesta sí o no: Improbable","Los asuntos son como piensas, y de manera excepcional",
  "Es lo que tú piensas, pero quizás no de la forma que esperabas",
  "Exactamente lo que tú crees",
  "En realidad las cosas sólo son parcialmente como tú querrías",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas",
  "Tus expectativas no se van a cumplir, aunque quizás puedas sacar algo bueno de todo esto",
  "Lo siento pero las cosas no son como tú pensabas",
  "Te advierto que la situación va ser lo contrario de lo que esperabas"],
  
  ["Descripciones","Relacionado con personaje protagonista",
  "Relacionado con un personaje secundario", "Relacionado con alguna organización",
  "Lo opuesto a un personaje secundario", "Relacionado con un objetivo",
  "Alejado de un objetivo", "Inspira alegría", "Inspira tristeza",
  "Inspira temor", "Inspira asco", "Inspira confianza"],

  ["Elementos narrativos", "Suceso remoto", "Acción de un personaje secundario",
  "Acción de un personaje secundario", "Elemento típico de este género (o acción de personaje secundario)",
  "Complica un hilo argumental", "Introduce un elemento personal o pasado de protagonista",
  "Introduce un nuevo personaje secundario", "Elemento típico de este género (o avanza un hilo argumental)",
  "Avanza un hilo argumental", "Avanza un hilo argumental", "Retrocede un hilo argumental",
  "Retrocede un hilo argumental", "Cierra un hilo argumental  (o si es demasiado pronto, avánzalo)",
  "Suceso negativo para protagonista", "Suceso negativo para protagonista",
  "Suceso positivo para protagonista", "Suceso ambiguo", "Suceso negativo para personaje secundario",
  "Suceso negativo para personaje secundario", "Suceso positivo para personaje secundario"],

  ["Temas de conversción aleatorios", "Continúa con el tema de conversación más lógico",
  "Continúa con el tema de conversación más lógico", "Continúa con el tema de conversación más lógico",
  "Habla sobre su comunidad", "Habla sobre la comunidad del área",
  "Habla sobre quien gobierna en el área","Habla sobre peligros en el área",
  "Habla sobre un suceso reciente", "Pregunta sobre su interlocutor",
  "Pregunta sobre el último lugar que su interlocutor visitó", "Pregunta sobre peligros en el área",
  "Habla de un suceso reciente", "Habla sobre el tiempo", "Habla sobre negocios",
  "Habla sobre su familia", "Habla sobre su pasado"],

  ["Acciones aleatorias", "Bloquear", "Hacer daño", "Ocultar", "Convencer", "Continuar", "Continuar",
  "Continuar", "Distraer", "Devolver", "Retroceder", "Intimidar", "Aprovechar un recurso",
  "Sacrificarse", "Acercarse", "Fintar (Mostrar una intención falsa)", "Pedir ayuda", "Moverse",
  "Defenderse", "Acción decisiva", "Buscar posición de ventaja",
  "Hacer algo para conseguir su objetivo de manera precisa",
  "Hacer algo para conseguir su objetivo de manera cautelosa",
  "Hacer algo para conseguir su objetivo de manera agresiva",
  "Hacer algo para conseguir su objetivo de manera indirecta",
  "Hacer algo para conseguir su objetivo de forma descuidada",
  "Hacer algo para conseguir su objetivo de manera directa",
  "Aprovecharse del entorno"]
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

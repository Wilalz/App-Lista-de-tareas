// info date
const dateText = document.getElementById("dateText");
const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

const tasksContainer = document.getElementById("tasksContainer");

const daysOfWeek = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

const date = new Date();
console.log("la variable date es: " + date)
console.log('la funcion "toLocaleString" de date es: ' + date.toLocaleString())

const setDate = () => {
    // se usan las variables que usan el document.getElementById("xxxxx") y les setea un valor basado en la fecha actual
    dateText.textContent = setWeedDay(date);
    dateNumber.textContent = date.getDate();
    dateMonth.textContent = daysOfWeek[date.getMonth()];
    dateYear.textContent = date.getFullYear();

    // ********* Otra manera de hacerlo es así: **********
    //dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    //dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    //dateMonth.textContent = date.toLocaleString('es', {month: 'short'});
    //dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});
}

const setWeedDay = (date) => {
    const day = date.getDay();
    switch (day) {
        case 0:
            return "Domingo"
            break;
        case 1:
            return "Lunes"
            break;
        case 2:
            return "Martes"
            break;
        case 3:
            return "Miércoles"
            break;
        case 4:
            return "Jueves"
            break;
        case 5:
            return "Viernes"
            break;
        case 6:
            return "Sábado"
            break;
        default:
            break;
    }
}


const addNewTask = (event) => {
    event.preventDefault();
    const { value } = event.target.taskText;    
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
}

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    })
    return [...toDo, ...done];
}

const renderOlderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}


setDate();


const abcarr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const abcDEFarr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "-", "/", "!", "@", "#", "$", "%", "&", "?", ";", ":", "(", ")", "*", "+" ]

const compArr = abcarr.concat(abcDEFarr)


const abc = () => {
    const start = new Date();
    let times = 0
    for (let a = 0; a < abcarr.length ; a++) {
        for (let b = 0; b < abcarr.length; b++) {
            for (let c = 0; c < abcarr.length; c++) {
                // solo con 3 digitos... si se quiere con 4 se deben eliminar las siguientes 2 lineas y descomentar el siguiente for
                console.log(abcarr[a] + abcarr[b] + abcarr[c] + abcarr[d])
                times += 1;
                // for (let d = 0; d < abcarr.length; d++) {
                //     console.log(abcarr[a] + abcarr[b] + abcarr[c] + abcarr[d])
                //     times += 1;
                // }
            }
        }
    }
    const end = new Date();
    console.log("*******************************")
    console.log(times)
    console.log(start)
    console.log(end)
    console.log(end.getTime() - start.getTime(), "ms");
}

function hacerCodigoIPV6 () {

    function mathr() {
        return Math.ceil(Math.random()*35)
    }
    const ramdomly = () => {
        const a = abcarr[mathr()] + abcarr[mathr()] + abcarr[mathr()] + abcarr[mathr()]
        return a
    }
    
    for (let i = 0; i < 100 ; i++){
        console.log(`${ramdomly()}:${ramdomly()}:${ramdomly()}:${ramdomly()}:${ramdomly()}:${ramdomly()}`)
    }
    
}

function generadorClavesGoogle () {

    for (let i = 0; i < 100 ; i++){
        const ramdomly = () => {
            return compArr[Math.ceil(Math.random()*77)]
        }
        console.log(`${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}${ramdomly()}`)
    }
}
    
//abc()
//hacerCodigoIPV6();
//generadorClavesGoogle();



const changeColor = document.querySelector("#changeColor")

function random(number) {
    return Math.floor(Math.random() * (number+1));
}
/** NO SE REOOMIENTA USAR LA PROPIEDAD .onclick EN UN ELEMENTO, SOLO PERMITE TENER MANEJADOR DE EVENTOS EN DICHO BOTON */
// changeColor.onclick = () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;

// };

/** ES MEJOR USAR addEventListener YA QUE PERMITE TENER VARIOS MANEJADORES PARA UN EVENTO 
changeColor.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});

// EN ESTE CASO: 1 Se asignó la funcion de cambiar backgroundColor arriba y en esta se le asigna una nueva fucnion de cambiar color de la fuente
changeColor.addEventListener("click", changeFontColor)

function changeFontColor () {
    document.body.style.color = "red";
}

changeColor.addEventListener("click", btnEvent)
// esta funcion recibe como parametro directamente al evento

function btnEvent (e) {
    e.preventDefault()
    console.log(typeof(e));
    console.log(e);
    console.log(typeof(e.target.style));
    e.target.i = "cambiado"
    e.target.value = "p"
    e.target.style.width = "300px"
    e.target.style.height = "300px"
    e.target.style.fontFamily = "impact"
    console.dir(e.target);

}

*/

/**  JUGANDO CON LOS METODOS DEL OBJETO
 * 
 * const setDate = () => {
    const date = new Date();
    document.getElementById("dateText").textContent = date.getDay()

    console.log("date: ", date)
    console.log("date.toDateString: ", date.toDateString())
    console.log("date.toJSON: ", date.toJSON())
    console.log("getFullYear (año entero): ", date.getFullYear())
    console.log("getMonth (mes 0 - 11): ", date.getMonth())
    console.log("getHours (Hora 0 - 23): ", date.getHours())
    console.log("getDate (dia del mes): ", date.getDate())
    console.log("getDay (# dia de la semana): ", date.getDay())
    console.log("getUTCHours (Hora 0 - 23): ", date.getUTCHours())
    console.log("getMinutes (minutos 0 - 59): ", date.getMinutes())
    console.log("getSeconds (segundos 0 - 59): ", date.getSeconds())
    console.log("getMilliseconds (milisegundos 0 - 999): ", date.getMilliseconds())
    console.log("getTime (valor numerico de la fecha desde 1 Ene 1970): ", date.getTime())
    console.log("getTimezoneOffset (diferncia en minutos con UTC): ", date.getTimezoneOffset())
}

setDate()

const newDate = new Date;
newDate.setDate(2);
newDate.setMonth(9);
newDate.setFullYear(1985);
console.log("newDate: " + newDate)

const birthdayWilson = new Date(1985, 9, 2 )
console.log("birthdayWilson: ", birthdayWilson )

 */


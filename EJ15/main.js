const caracteres = ['🍍', '🍊', '🍉', '🍐', '🍑', '🍒', '🍓', '🍅', '🍆', '🌽', '🥭'];
const array = [];


let parrafo = document.getElementById("p");
parrafo.innerHTML = array.toString();
function charRandom() {
    return caracteres[Math.round(Math.random() * caracteres.length)];
}

// Push Boton
document.getElementById("push").onclick = () => {
    array.push(charRandom());
    parrafo.innerHTML = array.toString();};

// Unshift Boton
document.getElementById("unshift").onclick = () => {
    array.unshift(charRandom());
    parrafo.innerHTML = array.toString();
};


// insert Boton
document.getElementById("insert").onclick = () => {
    var valor = parseInt(document.getElementById("miInput").value);
    // var posicion = valor; // La posición se ajusta para comenzar en cero
    array.splice(valor, 0, (charRandom()));
    parrafo.innerHTML = array.toString();
}
// pop Boton
document.getElementById("pop").onclick = () => {
    array.pop(charRandom());
    parrafo.innerHTML = array.toString();};

// shift Boton
document.getElementById("shift").onclick = () => {
    array.shift(charRandom());
    parrafo.innerHTML = array.toString();};


// remove at Boton
document.getElementById("remove").onclick = () => {
    var valor = parseInt(document.getElementById("miInput2").value);
    // var posicion = valor; // La posición se ajusta para comenzar en cero
    array.splice(valor, 1);
    parrafo.innerHTML = array.toString();
}

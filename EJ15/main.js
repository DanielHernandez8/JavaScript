const caracteres = ['🍍', '🍊', '🍉', '🍐', '🍑', '🍒', '🍓', '🍅', '🍆', '🌽', '🥭'];
const array = [];

function charRandom() {
    return caracteres[Math.round(Math.random() * caracteres.length)];
}

// Push Boton
document.getElementById("push").onclick = () => {
    array.push(charRandom());
    console.log(array);
};

// Unshift Boton
document.getElementById("unshift").onclick = () => {
    array.unshift(charRandom());
    console.log(array);
};


// insert Boton
document.getElementById("insert").onclick = () => {
    var valor = parseInt(document.getElementById("miInput").value);
    // var posicion = valor; // La posición se ajusta para comenzar en cero
    array.splice(valor, 0, (charRandom()));
    console.log(array);
}
// pop Boton
document.getElementById("pop").onclick = () => {
    array.pop(charRandom());
    console.log(array);
};

// shift Boton
document.getElementById("shift").onclick = () => {
    array.shift(charRandom());
    console.log(array);
};


// remove at Boton
document.getElementById("remove").onclick = () => {
    var valor = parseInt(document.getElementById("miInput2").value);
    // var posicion = valor; // La posición se ajusta para comenzar en cero
    array.splice(valor, 1);
    console.log(array);
}
// const arr = ['😂', '👌', '😜'];
// function printValues() {
//     arr.forEach((element, index, array) => {
//         console.log(element);
//         console.log(index);
//         console.log(array);
//     });
// }

// printValues();

//14.1
// const array = ['🍔','🌯','🍣','🍕','🍜','🍱','🍙','🍘','🥩'];
// function beer() {
//     array.filter(item => {
//         if(item != '🍺'){
//             console.log('🍺');
//         };
//     });
// }
// beer()




//14.2
// const array = ['🍕','🍕','🍍','🍕','🍕'];
// let stock = 0;
// function pizza() {
//     array.filter(item => {
//         if(item != '🍕'){
//             stock++;
//             console.log(item)
//         };
//     });
//     if (stock != 0 ){console.log("Tenemos " + stock + " 🍕 en stock")};
// }
// pizza();



//----------------------------------------
//un Invento

// const array = ['🍕','🍕','🍍','🍕','🍕'];
// array.splice(array.indexOf("🍍"),1,"🍕");
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     array.splice(item => {
//         if(item == "🍍"){
//             delete(array[item]);
//             console.log(item);
//         }
//     });
//  };
// console.log(array);
// const array = ['🍕','🍕','🍍','🍕','🍕','🍍','🍍'];
// const arrayAux = [];
// for(let i=0; i<array.length; i++){
//     // if(array[i] != '🍍'){
//     //     arrayAux.push(array[i]);
//     // }else{
//     //     console.log(array[i])
//     // }
//     (array[i]!='🍍')?arrayAux.push(array[i]) : console.log(array[i]);
// }
// console.log(arrayAux);

// const array = ["🍕", "🍕", "🍍", "🍕", "🍕"]; // Tienes 1 piña y 4 elementos que no piña
// console.log(array.includes('🍍'));




//-----------------------------------------------------------------

// Mediante a un for quiero que hagas un console.log que imprima si
// exista la piña y cuantas. Y cuantas cuantas no es una piña.

// const arr = ["🍕", "🍕", "🍍", "🍕", "🍕","🍍","🍍"];
// let stock = 0;
// let stock2 = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] == "🍍") {
//     stock++;
//    }else {
//     stock2++;
//    }
   
    
// }


// if(stock !=0) {console.log(stock + "🍍")};
// if(stock2 !=0) {console.log(stock2 + "🍕")};

//ejercicio 14.3

// const arr = ["🍕", "🍕", "🍍", "🍕", "🍕","🍍","🍍"];
// const pinas = arr.filter(pina => pina !="🍍")
// console.log(pinas);



//EJ 14.4

// A partir del siguiente array 🍓🍋🍓🍋🍓
// convierte todas las fresas en 🍄

// const arr = ["🍓","🍋","🍓","🍋","🍓"];
// const fresas = arr.map(item => item == "🍓" ? "🍄" : item);
// console.log(fresas);

// 14.5 Añade el siguiente icono 🥵 inmediatamente después del cada
// 🌶️ en el siguiente array:
// 🌶️🥛🌶️🥛🌶️🥛


// const arr = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
// const result = [];
// arr5.map((item, index, array) => {
//     return item === "🌶️" && array[index + 1] === "🥛"
// 		? result.push(item, "🥵")
// 		: result.push(item);
// });
// console.log(result);


// Añade una 🃏 cartas comodín entre medio de dos cartas . 
// Por ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴

const arr = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"]
const result = [];
arr.forEach((item,index,array) =>{
return item === "🎴" && array[index +1] === "🎴"
? result.push(item,"🃏"): result.push(item);
})
console.log(result);
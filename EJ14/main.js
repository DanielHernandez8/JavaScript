// const arr = ['ð', 'ð', 'ð'];
// function printValues() {
//     arr.forEach((element, index, array) => {
//         console.log(element);
//         console.log(index);
//         console.log(array);
//     });
// }

// printValues();

//14.1
// const array = ['ð','ð¯','ð£','ð','ð','ð±','ð','ð','ð¥©'];
// function beer() {
//     array.filter(item => {
//         if(item != 'ðº'){
//             console.log('ðº');
//         };
//     });
// }
// beer()




//14.2
// const array = ['ð','ð','ð','ð','ð'];
// let stock = 0;
// function pizza() {
//     array.filter(item => {
//         if(item != 'ð'){
//             stock++;
//             console.log(item)
//         };
//     });
//     if (stock != 0 ){console.log("Tenemos " + stock + " ð en stock")};
// }
// pizza();



//----------------------------------------
//un Invento

// const array = ['ð','ð','ð','ð','ð'];
// array.splice(array.indexOf("ð"),1,"ð");
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     array.splice(item => {
//         if(item == "ð"){
//             delete(array[item]);
//             console.log(item);
//         }
//     });
//  };
// console.log(array);
// const array = ['ð','ð','ð','ð','ð','ð','ð'];
// const arrayAux = [];
// for(let i=0; i<array.length; i++){
//     // if(array[i] != 'ð'){
//     //     arrayAux.push(array[i]);
//     // }else{
//     //     console.log(array[i])
//     // }
//     (array[i]!='ð')?arrayAux.push(array[i]) : console.log(array[i]);
// }
// console.log(arrayAux);

// const array = ["ð", "ð", "ð", "ð", "ð"]; // Tienes 1 piÃ±a y 4 elementos que no piÃ±a
// console.log(array.includes('ð'));




//-----------------------------------------------------------------

// Mediante a un for quiero que hagas un console.log que imprima si
// exista la piÃ±a y cuantas. Y cuantas cuantas no es una piÃ±a.

// const arr = ["ð", "ð", "ð", "ð", "ð","ð","ð"];
// let stock = 0;
// let stock2 = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] == "ð") {
//     stock++;
//    }else {
//     stock2++;
//    }
   
    
// }


// if(stock !=0) {console.log(stock + "ð")};
// if(stock2 !=0) {console.log(stock2 + "ð")};

//ejercicio 14.3

// const arr = ["ð", "ð", "ð", "ð", "ð","ð","ð"];
// const pinas = arr.filter(pina => pina !="ð")
// console.log(pinas);



//EJ 14.4

// A partir del siguiente array ððððð
// convierte todas las fresas en ð

// const arr = ["ð","ð","ð","ð","ð"];
// const fresas = arr.map(item => item == "ð" ? "ð" : item);
// console.log(fresas);

// 14.5 AÃ±ade el siguiente icono ð¥µ inmediatamente despuÃ©s del cada
// ð¶ï¸ en el siguiente array:
// ð¶ï¸ð¥ð¶ï¸ð¥ð¶ï¸ð¥


// const arr = ["ð¶ï¸", "ð¥", "ð¶ï¸", "ð¥", "ð¶ï¸", "ð¥"];
// const result = [];
// arr5.map((item, index, array) => {
//     return item === "ð¶ï¸" && array[index + 1] === "ð¥"
// 		? result.push(item, "ð¥µ")
// 		: result.push(item);
// });
// console.log(result);


// AÃ±ade una ð cartas comodÃ­n entre medio de dos cartas . 
// Por ejemplo:ð´ðð´ En el siguiente array: ð´ð´ð´ðð´ð´ð´

const arr = ["ð´","ð´","ð´","ð","ð´","ð´","ð´"]
const result = [];
arr.forEach((item,index,array) =>{
return item === "ð´" && array[index +1] === "ð´"
? result.push(item,"ð"): result.push(item);
})
console.log(result);
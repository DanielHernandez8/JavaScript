var n1,n2,n3,n4,n5;
n1 = 1;
n2 = 2;
n3 = 3;
n4 = 4;
n5 = 5;
function nombre(n1,n2,n3){
var a = n1 + n2 + n3;
return a; 
}
nombre()

console.log('El Resultado es ' + nombre(n1,n2,n3))


const name = 'Daniel';
const apellido1 = 'Hernandez';
const apellido2 = 'Montero';

function nombrecompleto(name, apellido1, apellido2){
  const b = name + ' '+ apellido1 +' '+ apellido2;
  return b;

}
nombrecompleto()
console.log('Mi nombre es: ' + nombrecompleto(name, apellido1, apellido2));



function numero (numero1,numero2){
  if (numero1 > numero2) {
    return numero1;
  }
 return numero2;
}
console.log('El numero mayor es '+ numero(1,2))

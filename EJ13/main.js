let numero = 1; //la variable se inicializa en 1
let i = 0; //la variable se inicializa en 0
do{
    if(i === 0){ //revisa si son iguales estrictamente y hace un boleano
        i++ //si es igual i se incremente en 1
        numero--; //si es igual numero se resta en 1
        console.log(numero); //imprime el valor de numero
    } else{ //sino coincide la condicion
        numero++; // numero se incrementa en 1
        console.log(numero); //imprime el valor de 1
    }
} while (numero < 5); //el bucle se ejecutara al menos una vez aunque 
//la condicion del bucle es false, el proceso se repite hasta que 'numero' sea igual o mayor que 5.
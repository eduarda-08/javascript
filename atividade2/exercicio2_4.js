let n = 10;
let numeros = [0, 1]; 

while (true) { 
    let proximo = numeros[numeros.length - 1] + numeros[numeros.length - 2]; 
    

    if (proximo > n) { 
        break;
    }

    numeros.push(proximo); 
}

console.log(numeros); 
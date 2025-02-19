let numero = 7; 
let ehPrimo = true; 

if (numero < 2) { 
    ehPrimo = false;
} else {
    for (let i = 2; i < numero; i++) { 
        if (numero % i === 0) { 
            ehPrimo = false; 
            break; 
        }
    }
}

if (ehPrimo) {
    console.log("É primo");
} else {
    console.log("Não é primo");
}
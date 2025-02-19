let numeros = [10, 5, 20, 8, 15]; 

let maior = numeros[0]; 

for (let i = 1; i < numeros.length; i++) { 
    if (numeros[i] > maior) { 
        maior = numeros[i];
    }
}
console.log(maior);
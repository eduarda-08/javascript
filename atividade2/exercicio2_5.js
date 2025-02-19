let palavra = "banana"; 
let contagem = {}; 

for (let letra of palavra) { 
    if (contagem[letra]) {
        contagem[letra]++;
    } else { 
        contagem[letra] = 1;
    }
}

console.log(contagem);

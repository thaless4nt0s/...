const frase = 'target systems';

function fraseReversa (frase){
    const TAMANHO = frase.length - 1;
    let novaFrase = "";
    for (let i = TAMANHO; i >= 0; i--) {
        novaFrase += frase[i];
    }

    return novaFrase;
}

console.log(fraseReversa(frase)); // smetsys tegrat
var palavra = '';
var palindromo = '';

palavra = prompt('Digite uma frase:');

const checarTexto = () => {
    for (var i = palavra.length - 1; i >= 0; i--) {
        palindromo += palavra[i]
    }
    if (palavra == palindromo) {
        return `A palavra digitada: ${palavra} É um palíndromo!`;
    } else {
        return `A palavra digitada: ${palavra} Infelizmente não é um palíndromo!`;
    }
}
console.log(checarTexto());
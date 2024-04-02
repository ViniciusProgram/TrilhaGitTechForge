// Exercicio 1

let a = 13

let b = 4

let soma = a + b

console.log(soma);

// Exercicio 2

function verificaNumero(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } 
    else {
        console.log(numero + " é ímpar");
    }
}

// Testando a função com diferentes números
verificaNumero(5);  // Saída: 5 é ímpar
verificaNumero(10); // Saída: 10 é par
verificaNumero(17); // Saída: 17 é ímpar
verificaNumero(20); // Saída: 20 é par

// Exercicio 3

// Declarando uma string
let minhaString = "Olá, rapaziadaaaaaaaa.";

// Imprimindo o comprimento da string no console
console.log("Comprimento da string:", minhaString.length);

// Convertendo a string para letras maiúsculas
let stringMaiuscula = minhaString.toUpperCase();
console.log("String em maiúsculas:", stringMaiuscula);

// Dividindo a string em palavras e imprimindo cada palavra no console
let palavras = minhaString.split(" ");
console.log("Palavras na string:");
palavras.forEach(palavra => console.log(palavra));
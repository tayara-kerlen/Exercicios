
// document.getElementById('btnCalcular').addEventListener('click', () => {
//     // Pega os valores informados pelo usuário
//     const peso = Number(document.getElementById('peso').value);
//     const altura = Number(document.getElementById('altura').value) / 100;

//     const imc = calcularIMC(peso, altura);
    
//     console.log(`IMC: ${imc.toFixed(1)}`);
//     alert(`IMC: ${imc.toFixed(1)}`);
// });

// function calcularIMC(peso, altura) {
//     const imc = peso / (altura * altura);
//     return imc;
// }

// DESAFIO: Pesquisar sobre os Níveis de IMC e mostrar conforme o resultado do cálculo.
// Exemplo:
//  peso: 95
//  altura: 185
// 
//  Resultado: IMC 27.8 - Acima do peso
//  IMC ideal: 18.6 a 24.9

// // Calculos
// if (imc < 18,5) {
//     console.log();

// } else if (imc >= 18,5 && imc <= 24.9); {
//     console.log("normal");

// } else if (imc >= )

// 19. Escreva uma function contarVogais que recebe uma string e conta quantas vogais ela tem.

// Exemplo:
//  palavra: 'estudante'
// 
//  Resultado: A palavra 'estudante' tem 4 vogais

const vogais = 'aeiou';
const palavraInformada = prompt("Informe uma palavra");
const palavra = palavraInformada.toLowerCase();
let resultado = '';

// Guarda o quantidade de caracteres da palavra informada
// const numeroLetras = palavra.length;

for (let i = 0; i < palavra.length; i++) {
    // console.log(palavra[i]);

    for (let j = 0; j < vogais.length; j++) {
        if (palavra[i] === vogais[j]) {
            resultado += palavra[i];
        }
    }
}

console.log(`Palavra informada: ${palavraInformada}`);
console.log(`Vogais: ${resultado}`);
console.log(`Quantidade: ${resultado.length}`);

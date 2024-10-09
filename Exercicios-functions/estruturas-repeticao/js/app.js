
// ===== Estruturas de Repetição ===== //

// While (enquanto)
// let contator = 1;

// while (contator <= 10) {
//     console.log(contator);
//     contator++;
// }

// // For (para)
// for (let contador = 1; contador <= 10; contador++) {
//     console.log(contador); 
// }

// Do While (faça enquanto)
// let menu;

// do {
//     // Recebe o valor informado e converte para número
//     menu = Number(prompt("Informe uma opção do menu ou zero para sair"));

//     //Se NÃO for um número (NaN -> Not a Number)
//     if (isNaN(menu)) {
//         console.log(`Informe apenas números`);  

//     // Conseguiu conveter para número
//     } else {
//         console.log(menu);  
//     }

// } while (menu != 0);

// ===== Exercícios ===== //

// 1. Escreva um algoritmo que conte de 1 até 100, mostrando de 2 em 2.

// Exemplo:
// 1 ,3, 5, 7, 9, 11... 93, 95, 97, 99.
//
// Extra: adicionar vírgula depois de cada número pares, de 1 até um valor informado do usuário.

// let contador = 1;

// while (contador <= 100) {
//     console.log(contador);
//     contador += 2;    
// }

// Resposta com for
// let resultado = '';

// for (let contador = 1; contador <= 100; contador += 2) {
//     if (contador < 99) {
//         resultado += `${contador},`
//         // console.log(`${contador},`);
        
//     } else {
//         // console.log(`${contador}.`);
//         resultado += `${contador},`   
//     }  
// }

// console.log(resultado);



// 2.Escreva um algoritmo que mostre todos os números pares, de 1 até um valor informado pelo usuário.

// Exemplo:
// valor informado: 50
// 2, 4, 6, 8... 46, 48, 50.

const valorInformado = Number(prompt("Informe um valor"));
let resultado = '';

for (let i = 1; i <= valorInformado; i++) {
    if (i % 2 == 0) {
        // IF Ternário (Operador Ternário)
        resultado += i < valorInformado ? `${i},` : `${i}.`

        // if (i < valorInformado) {
        //     resultado += `${i},`;

        // } else {
        //     resultado += `${i}.`;
        // }
    }
}

console.log(resultado);



// 3. Escreva um algoritmo que receba um valor inicial e um valor final. Mostre todos os valores, do maior para o menor valor, que sejam ímpares.

// Exemplo:
// valor inicial: 20
// valor final: 200
// Resultado: 199, 197, 195... 25, 23, 21.

// if else
// const idade = 17;

// if (idade >= 18) {
//     console.log("maior");

// } else {
//     console.log("menor");
// }

// === SWITCH CASE === //

// const regiao = 1;

// switch (regiao) {
//     case 1:
//         console.log("Nordeste");
//         break;
    
//     case 2:
//         console.log("Norte");
//         break;

//     case 3:
//         console.log("Sul");
//         break;
        
//     case 4:
//         console.log("Sudeste");
//         break;

//     case 5:
//         console.log("Centro-Oeste");
//         break;

//     default:
//         console.log("opção inválida");
//         break; 
// }

// Declaração das variáveis e atribuição de valores (ENTRADA)
// const idade = 25;

// Cálculos e validações (PROCESSAMENTO)
// if (idade < 12) {
//     console.log("criança"); 

// } else if (idade < 18) {
//     console.log("adolescente");
    
// } else if (idade < 29) {
//     console.log("jovem adulto");

// } else if (idade < 65) {
//     console.log("adulto");

// } else {
//     console.log("idoso");
// }

// FIM SE

//Declaração de variáveis
let nota1, nota2, nota3, media;

// Atribuição de valores  (ENTRADA)
nota1 = 5;
nota2 = 7;
nota3 = 8;

// Cálculos e Validações (Processamento)
media = (nota1 + nota2 + nota3) / 3;

// Mostrar o resultado
console.log(`Media: ${media.toFixed(1)}`);

// Verificação de média
if (media >= 6) {
    console.log("Aprovado");

} else if ( media > 3 && media < 6) {
    console.log("Recuperação");

} else {
    console.log("Reprovado");   
}




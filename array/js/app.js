// ===== Array ===== //

// Declarar um array (vazio)
// const carros = [];

// Declarar um array e atribui valor
// const alunos = [
//     [ 1, 'Maria', 52, true ],
//     23,
//     '2024-10-09',
//     false
// ];

// // console.log(alunos);
// console.log(alunos[0]);

// const carros = [
//     'Honda',
//     'Civic',
//     'automático',
//     2023,
//     'gasolina'
// ];

// console.log(carros);
// console.log('Câmbio: ', carros[2]);

// Alterar o valor de um campo
// carros[2] = 'manual';
// console.log(carros);

// Adicionar valor no final do array
// carros.push("4 portas");
// console.log(carros);

// Retira valor do final do array
// carros.pop();
// console.log(carros);

// Adicionar valor no início do array
// carros.unshift("4 portas");
// console.log(carros);

// Retira valor do início do array
// carros.shift();
// console.log(carros);

// Retira valor da posição informada
// carros.reverse(carros);
// console.log(carros);

// Desafio: retirar o ano de fabricação do array e mostrar o resultado.

// slice
// const extra = carros.slice(0, 2);
// console.log(extra);

// splice(0) limpa o array
// carros.splice(0);

// splice(0, 2) remove "posição: 0 quantidade: 2"
// carros.splice(0, 2);

// splice(2, 1) remove "posição: 2 quantidade: 1"
// carros.splice(2, 1);

// splice(2, 1, 'novo valor') substitui o valor atual por 'novo valor' na posição indicada (2)
// carros.splice(2, 1, 'Ano de fabricação');

// splice(2, 0, 'novo valor') adiciona o 'novo valor' na posição indicada (2), e empurra o restante para frente
// carros.splice(2, 0, 'Ano de fabricação');


// ===== Objetos ===== //
const aluno = {
    id: 23,
    nome: 'Maria',
    idade: 52
};

// console.log(aluno);
// console.log(aluno.nome);

const alunos = [
    aluno
];

const aluno2 = {
    id: 24,
    nome: 'Pedro',
    idade: 32
};

alunos.push(aluno2);

// console.log(alunos.length);

for (let i = 0; i < alunos.length; i++) {
    console.log('Nome: ', alunos[i].nome);
    console.log('Matrícula: ', alunos[i].id);
    console.log('Idade: ', alunos[i].idade);
}

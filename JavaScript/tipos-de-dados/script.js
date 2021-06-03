var nome = 'André';
var idade = 20;
console.log(typeof nome);
// retorna string

// String

var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + 'gols';
console.log(frase);

// ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil"; // vai agir como um caractere
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido

//TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
//Você deve passar expressões / variáveis dentro de ${}

// EXERCÍCIOS //

// Declare uma variável contendo uma string

var nome = 'Rafael';

// Declare uma variável contendo um número dentro de uma string

var Idade = '20';

// Declare uma variável com a sua idade

var Idade = 20;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = 'Rafael';
var sobrenome = 'Mascarenhas';
var nomeCompleto = `${nome} ${sobrenome}`;

// Coloque a seguinte frase em uma variável: It's time

var frase = 'It\'s time';

// Verifique o tipo da variável que contém o seu nome
var nome = 'Rafael';
console.log(typeof nome);



//COMENTÁRIOS
//Servem para explicar o código

// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/

// var nome = 'André';

//OPERADORES DE ATRIBUIÇÃO

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


//OPERADOR TERNÁRIO
//Abreviação de condicionais com if e else

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false

var idade = 20;
var naoPossuiDiabetes = true;
var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber': 'Não pode beber';

console.log(podeBeber);

//Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

//IF ABREVIADO
//Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');

//EXERCÍCIO

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var scrollNovo = 2000;

scroll += scrollNovo;

console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;

var darCredito = (possuiCarro && possuiCasa);

console.log(darCredito);


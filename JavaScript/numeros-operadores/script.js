var idade = 23;
console.log(idade);

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
// Precisão para até 15 digitos

//Operadores Aritméticos 
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//OPERADORES ARITMÉTICOS (STRINGS)
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// A ORDEM IMPORTA

//Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var soma1 = 10 + 20 + 28 + 30 * 4 / 2 + 18; // 136
console.log(soma1);

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var x = 5;
// x = x + 1
console.log(x++);
console.log(x);

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// EXERCÍCIO // 

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

//Resultado: 35

// Crie duas expressões que retornem NaN

var comprar = 'Comprei um computador' / 2;
var vender = 'Vendi meu computador' - 2;

// Somar a string '200' com o número 50 e retornar 250

var somar = +'200' + 50;

// Incremente o número 5 e retorne o seu valor incrementado

var y = 5;
console.log(++y);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso);
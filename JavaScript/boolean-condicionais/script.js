//BOOLEAN
var possuiGraduacao = true;
var possuiDoutorado = false;

//CONDICIONAIS IF E ELSE
//Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else
//O valor dentro dos parênteses sempre será avaliado em false ou true.

//CONDICIONAIS ELSE IF
//Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

var nome = 'André';

if(nome){
  console.log(nome);
}else{
  console.log('Nome não existe');
}

//TRUTHY
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})

//OPERADOR LÓGICO DE NEGAÇÃO !

//O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true // pq uma string vazia vai dar false
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

if(!possuiGraduacao){ // o sinal de negação !
  console.log('Não possui Graduação');
}

//OPERADORES DE COMPARAÇÃO //
//*Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

//OPERADORES LÓGICOS &&
// * && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

if(5 - 5) && (5 + 5){
  console.log('verdadeiro');
}else{
  console.log('falso');
}

//OPERADORES LÓGICOS ||
// * || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);

// SWITCH
// * Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

// EXERCÍCIO

// Verifique se a sua idade é maior do que a de algum parente
var idade = 20;
var idadeMae = 55;
if (idade >= idadeMae){
  console.log('Sua idade é maior que a da sua mãe');
}else{
  console.log('Sua idade é menor que a da sua mãe');
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 30;
if (idade > 40){
  console.log('É maior');
}
if (idade == 30){
  console.log('É igual');
}
if (idade < 50){
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//false

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; 
var idade = 28; 
var possuiDoutorado = false; 
var empregoFuturo; 
var dinheiroNaConta = 0; 

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta );


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
  console.log('Brasil possui mais habitantes');
}else{
  console.log('China possui mais habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// Cão 


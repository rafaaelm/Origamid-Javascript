//FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

// Parênteses () executam uma função


//PARÂMETROS E ARGUMENTOS

//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos.

function imc(peso, altura){
  var imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(55, 1.77)); // 55 e 1.77 são argumentos 

//PARÊNTESES EXECUTA A FUNÇÃO

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Eu gosto do céu';
  }else if (cor === 'verde'){
    return 'Eu gosto de mato';
  }else{
    return 'Eu não gosto de cores';
  }
}

console.log(corFavorita('azul'));
corFavorita(); // retorna 'Você não gosta de nada'

//Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

//ARGUMENTOS PODEM SER FUNÇÕES
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function(){ console.log('Oi')});

addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined

//VALORES RETORNADOS
//Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

//ESCOPO
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(precisoVisitar(6));

console.log(totalPaises); // erro, totalPaises não definido

//ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

//HOISTING

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// EXERCÍCIOS

// Crie uma função para verificar se um valor é Truthy

function verificar(valor){
  return !!valor
}

console.log(verificar('rafael'));

// Crie uma função matemática que retorne o perímetro de um quadrado
function calcularPerimetro(lado){
  var calcular = lado * 4;
  return calcular;
}

console.log(calcularPerimetro(3));

// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){

  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Rafael', 'Mascarenhas'));

// Crie uma função que verifica se um número é par

function verificarPar(num){
  var modulo = num % 2;
  if (modulo === 0){
    return true;
  }else{
    return false;
  }
}
console.log(verificarPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
  return typeof dado
}

console.log(tipoDeDado(20));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener(scroll, function(){ console.log('Rafael mascarenhas');});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);







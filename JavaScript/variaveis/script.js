var nome = 'André';
var idade = 28;
var passuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome );

var preco = 25
var totalComprado = 5;
var totalPreco = totalComprado + preco;

console.log(totalPreco);

var sobrenome = 'Rafael', cidade = 'Rio';

console.log(sobrenome, cidade);

var semDefinir;

// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

// Erro ao tentar utilizar uma variável que não foi declarada.
console.log(nome);
// retorna nome is not defined

//É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro

// Exercícios //

// Declarar uma variável com o seu nome

var Nome = 'Rafael';

// Declarar uma variável com a sua idade 

var idade = 20;

// Declarar uma variável com a sua comida favorita e não atribuir valor

var comidaFavorita;

// Atribuir valor a sua comida favorita 

var comidaFavorita = 'Japonês';

// Declarar 5 variáveis diferentes sem valores 

var nomeCantor, nomeFilme, nomeSerie;
    genero, nomeAtor;
 




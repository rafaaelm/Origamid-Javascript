//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'André'
console.log(nome.toLocaleUpperCase());

var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'

//NÚMEROS

var altura = 1.8;

console.log(altura.toString()); // '1.8'
console.log(altura.toFixed()); // '2'

//FUNÇÕES

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

//ELEMENTOS DO DOM

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

//Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

//OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO

//Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

//EXERCÍCIO

// nomeie 3 propriedades ou métodos de strings

var nome = 'Rafael';

console.log(nome.toUpperCase());

console.log(nome.toString());

console.log(nome.toLowerCase());

// nomeie 5 propriedades ou métodos de elementos do DOM

var bnt = document.querySelector('.botao');

bnt.nextElementSibling();
btn.addEventListener();
btn.appendChild();
btn.innerHTML();
btn.id();


// busque na web um objeto (método) capaz de interagir com o clipboard, 
function copy(){ 
var bnt = document.querySelector('botao');
copyText.select();
document.execCommand('copy')
}

document.querySelector('copy').addEventListener('clique', copy);

// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V



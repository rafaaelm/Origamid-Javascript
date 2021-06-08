//HEIGHT E WIDTH
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
console.log(height);

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//Mesma coisa para o Width, clientWidth ...

//OFFSETTOP E OFFSETLEFT

const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;

//GETBOUNDINGCLIENTRECT()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

//WINDOW

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

//MATCHMEDIA();
//Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

//EXERCÍCIO

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');

const primeiraImagemTop = primeiraImagem.offsetTop;

console.log(primeiraImagemTop);
// Retorne a soma da largura de todas as imagens
function somaImagens(){ 
const imagens = document.querySelectorAll('img');
let soma = 0;
imagens.forEach((imagem) => {
  soma = soma += imagem.offsetWidth;
  console.log(imagem.offsetWidth);
})};
  console.log(imagem.offsetWidth);

window.onload = function() {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth > 48 && linkHeight > 48){
    console.log(link,'Possui boa acessibilidade');
  }else{
    console.log(link, 'Não possui boa acessibilidade');
  }

})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.document.matchMedia('(max-width: 720px').matches;

if (browser){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile');
}else{
  console.log('Não é menor');
}



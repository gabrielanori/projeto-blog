console.log(" === BLOG.JS === ");

// var chave = "valor"; -> variavel armazeno um único valor
// var chave = [ "val1", "val2" ]; -> variavel armazena multiplos valores

var fotos = [ "foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg" ];
var textos = [ "Slogan 1", "Slogan 2", "Slogan 3", "Slogan 4", "Slogan 5" ];

var posicao = 0;
function proxima() {
  if(posicao == fotos.length-1) {
    posicao = 0;
  } else {
    posicao++;
  }
  return posicao;
}

function atualizar(pos) {
  document.querySelector(".highlight__image").src = "img/" + fotos[pos];
  document.querySelector(".highlight__title").textContent = textos[pos];
  document.querySelector(".highlight__bullets .active").classList.remove("active");
  document.querySelectorAll(".highlight__bullets a")[pos].classList.add("active");
}

// registra uma funcao para ser executada de tempos em tempos de forma automatica
var controle = setInterval(function rotacionarDestaque() { 
  atualizar(proxima()); 
}, 3000);

// mapeando um comportamento do usuario
document.querySelector(".highlight__bullets").onclick = function trocaDestaque(event) {
  // console.log("Trocar o Destaque...", event.target.dataset.pos);
  clearInterval(controle);
  atualizar(event.target.dataset.pos);
}

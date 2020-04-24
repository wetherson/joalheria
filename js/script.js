// Variáveis Globais 
var slideIndex  = 0;
var maximoSlide = 3;
var segundos = 5;              //Segundos 

// Executa a função do Slide Automático.
// As demais funções desse sctipt é executada por cliques.
slideAutomatico();

/* Função que faz as fotos girarem automáticamente */
function slideAutomatico() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var botoes = document.getElementsByClassName("botao");

// Esconde todos os slides e todos os Botoes
  for (i = 0; i < maximoSlide; i++) { 
    slides[i].style.display = "none";  
    botoes[i].className = botoes[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > maximoSlide) {
    slideIndex = 1;
  }    
// Mostar Slide Ativo. O Array no JavaScript começa no 0.
// Por isso ele usa slideIndex - 1
  slides[slideIndex-1].style.display = "block";  
  botoes[slideIndex-1].className += " active";
  setTimeout(slideAutomatico, segundos * 1000 ); 
}

// Função que vai para uma foto diretamente quando se clica nos  
// Botões inferiores em formato de circulo ou chamado pelos Botões Anterior e Próximo
function mostraSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var botoes = document.getElementsByClassName("botao");
  slideIndex = n; 
  // Esconde todos os slides e todos os Botoes
  for (i = 0; i < maximoSlide; i++) {
      slides[i].style.display = "none";
      botoes[i].className = botoes[i].className.replace(" active", "");
  }

// Mostar Slide Ativo. O Array no JavaScript começa no 0.
// Por isso ele usa slideIndex - 1
  slides[slideIndex -1].style.display = "block";  
  botoes[slideIndex -1].className += " active";
}

// Controle Setas de Proximo e Anterior
// X somente pode ser A (Acrescenta) ou D (Dimunui)
function aumentaSlides(X) {
  if ( X == 'A' ) {
    if (slideIndex == maximoSlide)
      slideIndex = 1;
    else {
      slideIndex++;
    }
  } else {  // X = D
   if (slideIndex == 1) {
      slideIndex = maximoSlide;
    }else {
      slideIndex--;
    }
  }
  mostraSlides(slideIndex);
}
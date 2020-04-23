var slideIndex  = 0;
var maximoSlide = 3;
var segundos = 5; /*Segundos */ 
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
  slides[slideIndex-1].style.display = "block";  
  botoes[slideIndex-1].className += " active";
  setTimeout(slideAutomatico, segundos * 1000 ); 
}

/* Função que vai para uma foto diretamente quando se clica nos  */
/* Botões inferiores em formato de circulo                       */
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
  slides[slideIndex -1].style.display = "block";  
  botoes[slideIndex -1].className += " active";
}

// Controle Setas de Proximo e Anterior
// X somente pode ser A (Acrescenta) ou D (Dimunui)
function aumentaSlides(X) {
//  alert('X ' + X  + ' slideIndex ' + slideIndex + ' maximoSlide ' + maximoSlide )
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
//  alert('slideIndex ' + slideIndex)
  mostraSlides(slideIndex);
}
  
  // Thumbnail image controls
  //function vaiSlide(n) {
//    mostraSlides(slideIndex = n);
//  }  
var slideIndex = 0;
var segundos = 5; /*Segundos */ 
slideAutomatico();

function slideAutomatico() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var botoes = document.getElementsByClassName("botao");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) 
    {slideIndex = 1}    
  for (i = 0; i < botoes.length; i++) {
    botoes[i].className = botoes[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  botoes[slideIndex-1].className += " active";
  setTimeout(slideAutomatico, segundos * 1000 ); 
}

function mostraSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var botoes = document.getElementsByClassName("botao");
  if (n > slides.length) 
    {slideIndex = 1}
  if (n < 1) 
    {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Controle de Proximo e Anterior
function aumentaSlides(n) {
    mostraSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function vaiSlide(n) {
    mostraSlides(slideIndex = n);
  }
  
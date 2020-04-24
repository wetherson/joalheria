/* Troca de Nome da classe entre */
/* topnav x topnav responsive    */
function menuresponsivo() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//column-count

function uneColonne (){
  var choix = document.getElementsByClassName('postGroup'); //Va chercher chaque élément possédant la classe "postGroup"
  for (i=0;i<choix.length;i++){ //Boucle pour appliquer quelque chose sur chaque élément.
    choix[i].style.columnCount = 1; //Nombre de colonne = 1
    choix[i].style.width = "300px"; //Largeur = 300px
  }
  document.getElementById('postGroupNew').style.columnCount = "1";
}

function deuxColonnes (){
  var choix = document.getElementsByClassName('postGroup');
  for (i=0;i<choix.length;i++){
    choix[i].style.columnCount = 2;
    choix[i].style.width = "620px";
  }
  document.getElementById('postGroupNew').style.columnCount = "2";
}

function troisColonnes (){
  var choix = document.getElementsByClassName('postGroup');
  for (i=0;i<choix.length;i++){
    choix[i].style.columnCount = 3;
    choix[i].style.width = "940px";
  }
  document.getElementById('postGroupNew').style.columnCount = "2";
}

function quatreColonnes (){
  var choix = document.getElementsByClassName('postGroup');
  for (i=0;i<choix.length;i++){
    choix[i].style.columnCount = 4;
    choix[i].style.width = "1280px";
  }
  document.getElementById('postGroupNew').style.columnCount = "4";
}

function gestColonnes(){
  var largeur = getComputedStyle(document.getElementById("center")).width; //Detection de la largeur de la zone de publication.
  largeur = largeur.replace("px", ""); //Formatage à l'arache pour ne garder que la valeur numérique.
  var largeurF = parseFloat(largeur);
  if (largeurF < 1280) { //Test avec différentes résolutions, et execution de la fonction appropriée.
    if (largeurF < 940) {
      if (largeurF < 620) {
          uneColonne();
      } else {
        deuxColonnes();
        }
    } else {
      troisColonnes();
      }
  } else {
    quatreColonnes();
    }
}


gestColonnes(); //Execution de la fonction au chargement de la page.

window.onresize = gestColonnes; //Execute la fonction à chaque fois que la fenêtre est redimentionnée.

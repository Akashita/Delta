function ratioBackground(source, imgId, postId){ //Fonction pour calculer la heuteur de l'image et l'appliquer au passage de la souris au dessus des nouveaux posts
      var loadImage = new Image; //Déclaration de la variable loadImage qui servira à appeler una image.
      loadImage.src = "img/" + source; //on donne le chemin de l'image que l'on veut charger
      var heightImage = loadImage.height; //on récupère la valeur en px de la hauteur de l'image
      var widthImage = loadImage.width; //idem de la largeur
      var heightStade1 = (300*heightImage)/widthImage;//On sait que sur le site l'image fera 300px de largeur, avec une produit en croix on cherche donc la hauteur qui correspond.
      var newImgElt = document.getElementById(imgId);//On va chercher l'image qui correspond à l'ID qui est passé en paramètre.
      var heightFinal = parseInt(heightStade1, 10);//On convertie la hauteur qui sorte du produit en croix en entier (int).
      newImgElt.style.height = heightFinal + "px"; //On lui ajoute "px" à la fin pour l'affecter à la propriété "height" en css.
      var posteIdCss = document.getElementById(postId);
      posteIdCss.style.boxShadow = "0px 4px 100px black"; //Application de l'ombre sur l'arrière des posts
}

function retourBackground(id, postId){ //Retour à la valeur par défaut de la hauteur de l'image
      document.getElementById(id).style.height = "125px";
      var posteIdCss = document.getElementById(postId);
      posteIdCss.style.boxShadow = "none";
}

function heightTxt(id, ordre){ //Changement de taille du container de texte des nouveaux posts.
  var choix = document.getElementById(id);
  if (ordre) {
      choix.style.height = "auto";
  } else if (!ordre) {
      choix.style.height = "24px";
  }
}

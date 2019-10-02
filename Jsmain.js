class Article {
      constructor(titre,lien,corps){
            this.titre = titre;
            this.lien = lien;
            this.corps = corps;
      }
}

let contenu = [new Article('Olovesuuu', 'https://www.youtube.com/embed/L7kPWGegVaQ', 'Interview d\'une influenceuse cheveux et lifestyle'),new Article('Olovesuuuu', 'https://www.youtube.com/embed/L7kPWGegVaQ', 'Interview d\'une influenceuse cheveux et lifestyle'),new Article('Olovesuuuuu', 'https://www.youtube.com/embed/L7kPWGegVaQ', 'Interview d\'une influenceuse cheveux et lifestyle'),new Article('Olovesuuuuuu', 'https://www.youtube.com/embed/L7kPWGegVaQ', 'Interview d\'une influenceuse cheveux et lifestyle')];
let colors = ['#ffb3ba','#ffdfba','#ffffba','#baffc9','#bae1ff'];
let derniereCouleur= -1;
let indice = -1;

//Remplit l'écran
document.body.onload = addElement;

function addElement() {
      for (let i = 0; i < contenu.length; i++) {
            //Création du row
            let newRow = document.createElement("div");
            //Attribution de la classe row en Bootstrap
            newRow.className = "row interview";
            //Attribution de l'id 
            newRow.id = "row numero " + i;

            //Création du conteneur à l'intérieur du row
            let newContainer = document.createElement("div");
            newContainer.className = "container-fluid containerInterview";
            newContainer.style.backgroundColor = getRandomColor();


            //Titre
            let titreDiv = document.createElement("div");
            titreDiv.className = "row justify-content-center titreVideo";
            titreDiv.id = "titre de la video" + i;
            let titreContenu = document.createTextNode(contenu[i].titre);
            titreDiv.appendChild(titreContenu);


            //Video
            let divVideo = document.createElement("div");
            divVideo.className = "row justify-content-center videoYoutube";
            divVideo.id = "video" + i;
            let urlVideo = document.createElement("iframe");
            urlVideo.width=889; 
            urlVideo.height=500;
            urlVideo.src=contenu[i].lien;
            urlVideo.frameBorder=0;
            urlVideo.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
            urlVideo.allowFullscreen = true;
            divVideo.appendChild(urlVideo);

            //Corps
            let divCorps = document.createElement("div");
            divCorps.className = "row justify-content-center description";
            divCorps.id = "corps" + i;
            let corpsContenu = document.createTextNode(contenu[i].corps);
            divCorps.appendChild(corpsContenu);


            //Assemblage
            newContainer.appendChild(titreDiv);
            newContainer.appendChild(divVideo);
            newContainer.appendChild(divCorps);
            newRow.appendChild(newContainer);

      let currentDiv = document.getElementById('videos');
      currentDiv.appendChild(newRow);
}
}

function getRandomColor() {
      while(indice == derniereCouleur){
      indice = parseInt(Math.random() * colors.length);
}
      derniereCouleur = indice;
      return colors[indice];
    }

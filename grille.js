class Article {
    constructor(titre, lien, corps, image) {
        this.titre = titre;
        this.lien = lien;
        this.corps = corps;
        this.image = image;
    }
}
let articles = remplirArticles();
let colonnes = 6;
let lignes = parseInt(articles.length / colonnes);
document.body.onload = remplirGrille;

function remplirGrille() {







    //Video
    let divVideo = document.createElement("div");
    divVideo.className = "divVideo";
    divVideo.id = "divVideo";
    let urlVideo = document.createElement("iframe");
    urlVideo.id = "video";
    urlVideo.className = "video"
    urlVideo.frameBorder = 0;
    urlVideo.allow = "accelerometer; autoplay; encrypted-media; gyroscope";
    urlVideo.allowFullscreen = true;
    divVideo.appendChild(urlVideo);
    divVideo.style.display = 'none';


    //Div pour sortir de la vidéo
    let divExit = document.createElement("div");
    divExit.className = "exit";
    divExit.id = "exit";
    divExit.style.display = 'none'
    divExit.onclick = function () {
        document.getElementById('divVideo').style.display = "none";
        divExit.style.display = 'none';
    }
    document.body.appendChild(divExit);

    let currentDiv = document.getElementById('grille');
    currentDiv.appendChild(divVideo);

    document.body.insertBefore(divExit,currentDiv);

    for (let i = 0; i < lignes; i++) {

        let newRow = document.createElement("div");
        newRow.className = "row";
        newRow.id = "row" + i;

        for (let j = 0; j < colonnes; j++) {
            let newDivImage = document.createElement("div");
            newDivImage.className = "col-" + parseInt(12 / colonnes) + " divImage";
            newDivImage.id = "divImage" + i + j;

            let newImage = document.createElement("img");
            newImage.className = "imageGrille"
            newImage.id = articles[i * colonnes + j].lien;

            newImage.src = articles[i * colonnes + j].image;
            newImage.onclick = function () {
                document.getElementById('video').src = newImage.id;
                document.getElementById('divVideo').style.display = "block";
                document.getElementById('exit').style.display = "block";
            }

            newDivImage.appendChild(newImage);
            newRow.appendChild(newDivImage);



        }
        currentDiv.appendChild(newRow);

    }

}

function remplirArticles() {
    let listArticles = [];
    for (let i = 0; i < 100; i++) {
        let article = new Article('Oceane', 'https://www.youtube.com/embed/L7kPWGegVaQ', 'Interview influenceuse', 'https://dummyimage.com/1920x1080/' + getRandomColor() + '/0011ff&text=test')
        listArticles[i] = article;
    }
    return listArticles;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function displayVideo(url) {
    document.getElementById('video').src = url;

}
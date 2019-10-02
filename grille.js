let images = remplirImages();
let colonnes = 6;
let lignes = parseInt(images.length / colonnes);
document.body.onload = remplirGrille;

function remplirGrille() {
for(let i=0; i<lignes;i++){
    
    let newRow = document.createElement("div");
    newRow.className = "row";
    newRow.id = "row" + i;

    for(let j = 0; j<colonnes; j++){
        let newDivImage = document.createElement("div");
        newDivImage.className = "col-" + parseInt(12/colonnes) + " divImage";
        newDivImage.id = "divImage" + i + j;

        let newImage = document.createElement("img");
        newImage.className = "imageGrille"
        newImage.src = images[i*colonnes + j];

        newDivImage.appendChild(newImage);
        newRow.appendChild(newDivImage);
        


    }
    let currentDiv = document.getElementById('grille');
    currentDiv.appendChild(newRow);
    
}
    
}

function remplirImages(){
    let listImages = [];
    for(let i=0; i <30 ; i++){
        listImages[i]='https://dummyimage.com/4032x3024/' + getRandomColor() + '/0011ff&text=test'
        

    }
    return listImages;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
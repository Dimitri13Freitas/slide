var img = document.getElementsByClassName("img-slide");
var position = 0;
var maximo = img.length;

function nextImg() {
  img[position].classList.remove("slideOn");

  position++;

  if(position >= maximo)
    position = 0;

  img[position].classList.add("slideOn");
  
};

// Intervalo de tempo de troca de imagem
setInterval(() => {
  nextImg() //chama a troca de imagem
}, 2000);


// Primeiro SLide
function PrimeiroSlide() {
  const img = document.querySelectorAll('[data-img="Primeiro"]');
  const btn = document.querySelectorAll('[data-btn="Primeiro"]');

  img[0].classList.add('ativo');
  btn[0].classList.add('ativo');

  let index = 0

  setInterval(() => {
    img.forEach((e) => {
      e.classList.remove('ativo')
    });

    img[index].classList.add('ativo')

    btn.forEach((e) => {
      e.classList.remove('ativo')
    });
    btn[index].classList.add('ativo')

    index++
    if (index >= img.length) {
      index = 0
    }
  }, 3000);


  btn.forEach((e, i) => {
    e.addEventListener('click',() => {
      btn.forEach((e) => {
        e.classList.remove('ativo')
      });

      e.classList.add('ativo');

      img.forEach((e) => {
        e.classList.remove('ativo')
      });

      index = i;
      img[index].classList.add('ativo');
    });
  });
};
PrimeiroSlide();

// Segundo Slide

function segundoSlide() {
  const img = document.querySelectorAll('[data-img="Segundo"]');
  const btnD = document.querySelector('[data-btn^="setaDireita"]');
  const btnE = document.querySelector('[data-btn^="setaEsquerda"]');
  const detalhe = document.querySelector('.detalhe');


  btnD.addEventListener('click', slideRight);
  btnE.addEventListener('click', slideLeft);

  let valor = 0;
  let valorDetalhe = 0;
  function slideLeft() {
    if(valor <= 0) {
      valor = 300
    } else {
      valor -= 100;
    };
    img[0].style.marginLeft = `${-valor}%`;

    detalheLeft();
  }

  function detalheLeft() {
    if( valorDetalhe <= 0) {
      valorDetalhe = 75
    } else {
      valorDetalhe -= 25
    }
    detalhe.style.left = `${valorDetalhe}%`;
  };

  function slideRight() {
    if(valor >= 300) {
      valor = 0;
    }else {
      valor += 100;
    };
    img[0].style.marginLeft = `-${valor}%`;

    detalheRight();
  };

  function detalheRight() {
    if(valorDetalhe >= 75) {
      valorDetalhe = 0
    } else {
      valorDetalhe += 25
    };
    detalhe.style.left = `${valorDetalhe}%`;
  };
};
segundoSlide();
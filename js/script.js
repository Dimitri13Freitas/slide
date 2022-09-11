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

const img = document.querySelectorAll('[data-img="Segundo"]');
const btn = document.querySelectorAll('[data-btn="Segundo"]');

console.log(img);
console.log(btn);
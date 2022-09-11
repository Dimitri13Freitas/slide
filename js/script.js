// Primeiro Slide
function slide1() {
const imgs = document.querySelectorAll('[data-img1]');
const btns = document.querySelectorAll('[data-navSlide]');

let i = 0

setInterval(() => {
  imgs.forEach((e) => {
    e.classList.remove(atribute)
  })
  imgs[i].classList.add(atribute)
  btns.forEach((e) => {
    e.classList.remove(atribute);
  })
  btns[i].classList.add(atribute)

  i++
  if(i >= imgs.length) {
    i = 0
  }
}, 1580);

let atribute = imgs[i].getAttribute('data-img1');

  btns.forEach((e, index) => {
    e.addEventListener('click', () => {

      btns.forEach((e) => {
        e.classList.remove(atribute)
      });
  
      e.classList.add('ativo');
  
      imgs.forEach((e) => {
        e.classList.remove(atribute)
      });
      imgs[index].classList.add(atribute);

    });
  });
};

slide1();

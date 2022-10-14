export default class Slide {

  constructor(wrapper, slide) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.distancia = {
      finalPosition: 0,
      startX: 0,
      movement: 0
    };
  }
  moveSlide(distanciaX) {
    this.distancia.movePosition = distanciaX
    this.wrapper.style.transform = `translate3d(${distanciaX}px, 0, 0)`
  }
  onStart(e) {
    let movetype;
    if (e.type === 'mousedown') {
      e.preventDefault();
      this.distancia.startX = e.clientX
      movetype = 'mousemove';
    } else {
      this.distancia.startX = e.changedTouches[0].clientX;
      movetype = 'touchmove';
    }
    this.wrapper.addEventListener(movetype, this.onMove);
  }
  updatePosition(clientX) {
    this.distancia.movement = (this.distancia.startX - clientX) * 1.4;
    return this.distancia.finalPosition - this.distancia.movement;
  }
  onMove(e) {
    const pointerPosition = (e.type === 'mousemove') ? e.clientX : e.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition)
    this.moveSlide(finalPosition);
  }
  onEnd(e) {
    const movetype = (e.type === 'mouseup') ? 'mousemove' : 'touchmove'
    this.distancia.finalPosition = this.distancia.movePosition;
    this.wrapper.removeEventListener(movetype, this.onMove);
  }
  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  SliderPosition(e) {
    const margin = (this.wrapper.offsetWidth - e.offsetWidth) / 2;
    return -(e.offsetLeft - margin);
  }
  slidesConfig() {
    this.slideArray = [...this.wrapper.children].map((element) => {
      const position = this.SliderPosition(element);
      return {
        position,
        element
      }
    });
  }
  slideIndexNav(index) {
    const last = this.slideArray.length - 1
    this.index = {
      prev: index === last ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    }
  }
  changeSlide(index) {
    const activeSlide = this.slideArray[index]
    this.moveSlide(this.slideArray[index].position);
    this.slideIndexNav(index);
    this.distancia.finalPosition = activeSlide;
  }
  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.slidesConfig();
    return this;
  }

}
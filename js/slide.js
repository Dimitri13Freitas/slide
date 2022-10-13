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
    e.preventDefault();
    this.wrapper.addEventListener('mousemove', this.onMove);
    this.distancia.startX = e.clientX
  }
  updatePosition(clientX) {
    this.distancia.movement = (this.distancia.startX - clientX) * 1.4;
    return this.distancia.finalPosition - this.distancia.movement;
  }
  onMove(e) {
    const finalPosition = this.updatePosition(e.clientX)
    this.moveSlide(finalPosition);
  }
  onEnd() {
    this.distancia.finalPosition = this.distancia.movePosition;
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }
  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }

}
import Splide from '@splidejs/splide';

class Slider {

  constructor({ container, sliderClassName, pubsub }) {
    this.pubsub = pubsub;
    this.container = container;

    this.setColor = this.setColor.bind( this );
    this.pubsub.subscribe('change-color', this.setColor );
    this.init( sliderClassName );
  }

  init( className ) {
    new Splide( className, {
      type   : 'loop',
    } ).mount();
  }

  setColor({ hex }) {
    this.container.style.background = hex;
  }
};

export default Slider;
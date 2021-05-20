import Slider from './components/Slider';
import Palette from './components/Palette';
import PubSub from './utils/PubSub';

const pubsub = new PubSub;
const selectedColor = document.querySelector('.selected-color');

new Slider({
  container: document.querySelector('.slider'),
  sliderClassName: '.splide',
  pubsub: pubsub
});

new Palette({
  container: document.querySelector('.colors'),
  pubsub: pubsub
});

pubsub.subscribe('change-color', ({ name, hex }) => {
  selectedColor.innerHTML = `color: ${name}`;
});
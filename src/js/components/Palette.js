import colors from '../colors.json';

class Palette {

  constructor({ container, pubsub }) {
    this.container = container;
    this.pubsub = pubsub;

    this.clickHandler = this.clickHandler.bind( this );
    this.container.addEventListener('click', this.clickHandler );
    this.init();
  }

  init() {
    const fragment = document.createDocumentFragment();

    for( let i = 0; i < colors.length; i++ ) {

      const li = document.createElement('li');
      li.classList.add('color-column');

      for( let j = 0; j < 6; j++ ) {

        const { name, hex } = colors[ i++ ];
        const div = document.createElement('div');
        div.classList.add('color-item');
        div.setAttribute('data-name', name );
        div.setAttribute('data-hex', hex );
        div.setAttribute('title', name );
        div.style.background = hex;

        li.appendChild( div );
      }

      fragment.appendChild( li );
    }

    this.container.appendChild( fragment );
  }

  clickHandler({ target }) {
    if( !target.classList.contains('color-item') ) return;

    const hex = target.getAttribute('data-hex');
    const name = target.getAttribute('data-name');
    this.pubsub.publish('change-color', { hex, name });
  }
}

export default Palette;
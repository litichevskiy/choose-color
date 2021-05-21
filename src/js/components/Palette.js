import colors from '../colors.json';

const QUANTITY_COLORS_IN_COL = 6;

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
    const length = colors.length;
    let counter = 0;

    while ( counter < length ) {

      const li = document.createElement('li');
      li.classList.add('color-column');

      for( let i = 0; i < QUANTITY_COLORS_IN_COL; i++ ) {

        const { name, hex } = colors[counter];
        const div = document.createElement('div');

        div.classList.add('color-item');
        div.setAttribute('data-name', name );
        div.setAttribute('data-hex', hex );
        div.setAttribute('title', name );
        div.style.background = hex;

        li.appendChild( div );
        counter++;

        if ( counter >= length ) break;
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
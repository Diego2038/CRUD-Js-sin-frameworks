import html from './render-modal.html?raw';
import './render-modal.css'; 

let modal, form;

export const closeModal = () => {
  modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
  modal?.classList.add('hide-modal');
  form?.reset();
}

/**
 *  
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = ( element, callback ) => {

  if ( modal ) return;
  if ( !callback) throw new Error(' callback parameter needs exist');

  modal = document.createElement('div');
  modal.innerHTML = html;
  modal.className = 'modal-container hide-modal';

  element.append( modal );

  form = modal.querySelector('form');

  modal.addEventListener('click', ( event ) => {
    // console.log( !event.target.classList.contains('modal-container') );
    if( !event.target.classList.contains('modal-container')) return;  
    hideModal();
  });

  form.addEventListener( 'submit', ( event ) => {
    event.preventDefault();

    const refForm = new FormData( form );

    const userLike = {};
    for (const [ key, value ] of refForm) {
      if ( key === 'balance' ) {
        userLike[key] = + value;
        continue;
      }
      if ( key === 'isActive' ) {
        userLike[key] = ( value === 'on' ) ? true : false;
        continue;
      }
      userLike[key] = value; 
    }
    // console.log( {userLike})
    
    callback( userLike );
    hideModal();
  })
}






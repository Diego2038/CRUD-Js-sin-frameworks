import html from './render-modal.html?raw';
import './render-modal.css';

let modal;

export const closeModal = () => {
  modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
  modal?.classList.add('hide-modal');
}

/**
 *  
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {

  if ( modal ) return;

  modal = document.createElement('div');
  modal.innerHTML = html;
  modal.className = 'modal-container hide-modal';

  element.append( modal );

  modal.addEventListener('click', ( event ) => {
    // console.log( !event.target.classList.contains('modal-container') );
    if( !event.target.classList.contains('modal-container')) return;  
    hideModal();
  })
}






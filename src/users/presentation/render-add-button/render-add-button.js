import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {() => any } callback
 */
export const renderAddButton = ( element, callback ) => {
  
  const fabButton = document.createElement( 'button' );
  fabButton.innerHTML = '+';
  fabButton.classList.add('fab-button');

  element.append( fabButton );

  // TODO: Implementar adición user
  fabButton.addEventListener('click', () => {
    if ( !callback ) return;
    callback();
  })
}
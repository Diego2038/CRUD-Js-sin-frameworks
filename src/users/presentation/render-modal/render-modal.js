import html from './render-modal.html?raw';
import { getUserById } from "../../use-cases/get-user-by-id";
import './render-modal.css'; 
import { User } from '../../models/user';

let modal, form;
let loadedUser = {};

export const showModal = async ( id ) => {
  modal?.classList.remove('hide-modal');
  loadedUser = {};
  
  if ( !id ) return;
  const user = await getUserById( id );
  setFormValues( user );
}

export const hideModal = () => {
  modal?.classList.add('hide-modal');
  form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = ( user ) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = user.isActive;
  loadedUser = user;
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

  // * NOTA: Este archivo se ejecuta sólo una vez, pero al ser event listeners quedan activos
  modal.addEventListener('click', ( event ) => {
    // console.log( !event.target.classList.contains('modal-container') );
    if( !event.target.classList.contains('modal-container')) return;  
    hideModal();
  });

  form.addEventListener( 'submit', ( event ) => {
    event.preventDefault();

    const refForm = new FormData( form );

    const userLike = { ...loadedUser};
    userLike['isActive'] = false; // ! Se pone este valor por defecto, porque
    // ! en el barrido del for of no toma en cuenta el check box si es false
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






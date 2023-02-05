import usersStore from '../../store/users-store';
import { deleteUserById } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';


let table; 

const createTable = () => {
  const table = document.createElement( 'table' );
  const tableHeaders = document.createElement( 'thead' );
  const tableBody = document.createElement( 'tbody' );
  tableHeaders.innerHTML =`
  <tr>
    <th>#ID</th>
    <th>Balance</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Active</th>
    <th>Actions</th>
  </tr>
  `;

  table.append( tableHeaders, tableBody );
  return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListenerUpdated = (event) => {
  const element = event.target.closest('.select-user');
  // console.log( element );   
  if( !element ) return;
  const id = element.getAttribute('data-id');
  showModal( id );
}

const tableSelectListenerDelete = async ( event ) => {
  const element = event.target.closest('.delete-user');
  if ( !element ) return;
  const id = element.getAttribute('data-id');
  try {
    
    await deleteUserById( id );
    await usersStore.reloadPage();
    document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
    renderTable(); 

  } catch (err) {
    console.log(err);
    alert('No se pudo eliminar');
  }
}

/**
 * 
 * @param {HTMLElement} element 
 */
export const renderTable = ( element ) => {

  const users = usersStore.getUsers();

  if ( !table ) {
    table = createTable();
    element.append( table );

    //TODO: Listeners en la tabla
    table.addEventListener('click', tableSelectListenerUpdated);

    table.addEventListener( 'click', tableSelectListenerDelete);
  }

  let tableHTML = '';

  users.map( user => {
    tableHTML += `
    <tr>
      <th>${ user.id }</th>
      <th>${ user.balance }</th>
      <th>${ user.firstName }</th>
      <th>${ user.lastName}</th>
      <th>${ user.isActive}</th>
      <th> 
        <a href="#" class="select-user" data-id="${ user.id }">Select </a> 
        |
        <a href="#" class="delete-user" data-id="${ user.id }">Delete</a> 
      </th>
    </tr>
    `;
  } );

  table.querySelector('tbody').innerHTML = tableHTML;
  
  // TODO: Listeners a table





}
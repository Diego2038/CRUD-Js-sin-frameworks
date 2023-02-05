import usersStore from '../../store/users-store';
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
const tableSelectListener = (event) => {
  const element = event.target.closest('.select-user');
  // console.log( element );   
  if( !element ) return;
  const id = element.getAttribute('data-id');
  showModal( id );
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
    table.addEventListener('click', tableSelectListener);
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
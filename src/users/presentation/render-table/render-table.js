import usersStore from '../../store/users-store';
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

const adjuntarUsers = ( user ) => { 
  const filaTabla = document.createElement( 'tr ');

  filaTabla.innerHTML = `
    <th>${ user.id }</th>
    <th>${ user.balance }</th>
    <th>${ user.firstName }</th>
    <th>${ user.LastName}</th>
    <th>${ user.isActive}</th>
    <th> <a href="#">Select</a> | <a href="#">Delete</a> </th>
  `;
  table.querySelector('tbody').innerHTML= 'xddd'; 
  
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
  }

  let tableHTML = '';

  users.map( user => {
    tableHTML += `<tr>
      <th>${ user.id }</th>
      <th>${ user.balance }</th>
      <th>${ user.firstName }</th>
      <th>${ user.lastName}</th>
      <th>${ user.isActive}</th>
      <th> <a href="#">Select</a> | <a href="#">Delete</a> </th>
      </tr>
    `;
  } );

  table.querySelector('tbody').innerHTML = tableHTML;
  
  // TODO: Listeners a table





}
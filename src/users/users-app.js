import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore  from "./store/users-store";

/**
 * Función que plasma toda la aplicación en el HTML.
 * @param {HTMLDivElement} element Elemento HTML
 */
export const UsersApp = async ( element ) => {
  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();
  element.innerHTML = '';
  // console.log( 'users del store: ',usersStore.getUsers() );

  renderTable( element );
  renderButtons( element );
}
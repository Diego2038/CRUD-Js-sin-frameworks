import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { showModal, renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore  from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

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
  renderAddButton( element, showModal );
  renderModal( element, async ( userLike) => {
    const user = await saveUser( userLike );
    usersStore.onUserChanged( user );
    renderTable();
  } );
}
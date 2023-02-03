import usersStore  from "./store/users-store";

/**
 * Función que plasma toda la aplicación en el HTML.
 * @param {HTMLDivElement} element Elemento HTML
 */
export const UsersApp = async ( element ) => {
  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();

  console.log( 'users del store: ',usersStore.getUsers() );
}
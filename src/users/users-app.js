import usersStore  from "./store/users-store";

/**
 * Función que plasma toda la aplicación en el HTML.
 * @param {HTMLDivElement} element Elemento HTML
 */
export const UsersApp = ( element ) => {
  element.innerHTML = 'Loading...';
  usersStore.loadNextPage();
}
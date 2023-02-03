
/**
 * Función que carga un arreglo de usuarios según
 * la página que se especifique.
 * @param {Number} page Página que se quiera cargar
 * @returns {Array<Object>}
 */
export const loadUsersByPage = async ( page ) => {
  const resp = await fetch(`${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`);
  return resp.json(); 
}
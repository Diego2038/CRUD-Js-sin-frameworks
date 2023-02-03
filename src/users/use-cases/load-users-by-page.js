import { localhostUserToModel } from "../mappers/localhost-user.mapper";
/**
 * Función que carga un arreglo de usuarios según
 * la página que se especifique.
 * @param {Number} page Página que se quiera cargar
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async ( page = 1 ) => { 
  const resp = await fetch(`${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`);

  const data = await resp.json()
  
  const users = data.map( localhostUserToModel ); 
  
  
  // console.log( data );
  // console.log( data.map(  user => localhostUserToModel( user ) ) );
  // console.log( data.map( localhostUserToModel ) ); // Es lo mismo 

  return users;
}
import { localhostUserToModel } from "../mappers/localhost-user.mapper";
/**
 * Función que carga un usuario según
 * la página que se especifique.
 * @param {Number} id Id del usuario
 * @returns { User }
 */
export const getUserById = async ( id ) => { 
  const resp = await fetch(`${ import.meta.env.VITE_BASE_URL }/users/${ id }`);

  const data = await resp.json()
  
  const user = localhostUserToModel( data ); 
  
  // console.log( user );

  return user;
}
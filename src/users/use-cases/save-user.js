import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userToLocalHost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

/**
 * Función que permite crear o actualizar el usuairo según si
 * el parámetros userLike tenga el id en sus atributos.
 * @param {Like<User>} userLike
 */
export const saveUser = async ( userLike ) => {

  if( !userLike.firstName && !userLike.lastName ) throw 'firstName and lastName are required😡😡😡';
  
  const user = new User( userLike ); 
  const userToSave = userToLocalHost(user); 

  let userUpdated;
  if ( userToSave.id ) {  
    userUpdated = await updateUser( userToSave );
  } else {
    userUpdated = await createUser( userToSave ); 
  }

  return localhostUserToModel( userUpdated ) ;
}

const createUser = async ( user ) => {
  const url = `${ import.meta.env.VITE_BASE_URL }/users`;
  const res = await fetch( url, {
    method: 'POST',
    body: JSON.stringify( user ),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const newUser = await res.json();
  console.log( {newUser});
  return newUser;
}


const updateUser = async ( user ) => {
  const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`; 
  const res = await fetch( url, {
    method: 'PATCH', // También puede ser PUT, todo depende del backend
    body: JSON.stringify( user ),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const updatedUser = await res.json();
  console.log( { updatedUser});
  return updatedUser;
}

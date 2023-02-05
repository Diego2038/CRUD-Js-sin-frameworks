import { userToLocalHost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userLike
 */
export const saveUser = async ( userLike ) => {

  if( !userLike.firstName && !userLike.lastName ) throw 'firstName and lastName are required😡😡😡';
  
  const user = new User( userLike ); 
  const userToSave = userToLocalHost(user);

  if ( user.id ) {
    throw 'No implementada actualización';
  }

  const updatedUser = await createUser( userToSave );
  
  return updatedUser;
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

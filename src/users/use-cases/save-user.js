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

  console.log('1', {user});
  console.log('2', {userToSave});

  if ( userLike.id ) { 
    console.log('¿¿¿¿')
    return await updateUser( userToSave );
  }

  return await createUser( userToSave ); 
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
  console.log(url );
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

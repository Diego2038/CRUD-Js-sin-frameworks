import { User } from "../models/user";


/**
 * Mapper que transforma un objeto de la clase usuario
 * a un objeto literal para ser guardado en el servidor
 * backend.
 * @param {User} user 
 * @returns {Like<User>} 
 */
export const userToLocalHost = ( user ) => {
  const {
    avatar,     
    balance,    
    firstName,  
    gender,     
    id,         
    isActive,   
    lastName,   
  } = user;

  return {      
    balance,    
    first_name: firstName,  
    // gender,     
    // id,         
    isActive,   
    last_name: lastName, 
  }

} 
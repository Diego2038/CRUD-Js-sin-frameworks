import { User } from "../models/user";


/**
 * Mapper que transforma un objeto de la clase usuario
 * a un objeto literal para ser guardado en el servidor
 * backend.
 * @param {User} user Objeto de clase User que se quiere guardar en el servidor
 * @returns {Like<User>} Objeto literal para ser enviado al servidor backend.
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
import { User } from "../models/user";


/**
 * Mapper que transforma los datos JSON en un los atributos
 * de un objeto de clase User
 * @param {Like<User>} data JSON parecido a la clase User
 * @returns { User }
 */
export const localhostUserToModel = ( data ) => {

  const { id, 
          isActive, 
          balance, 
          avatar, 
          first_name , 
          last_name , 
          gender 
      } = data;

  return new User( {
          id, 
          isActive, 
          balance, 
          avatar, 
          firstName : first_name, 
          lastName : last_name, 
          gender
  });



}
 
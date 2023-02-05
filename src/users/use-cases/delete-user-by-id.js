


/**
 * Función que elimina un usuario
 * @param {Number|String} id 
 */
export const deleteUserById = async ( id ) => {
  const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
  const resp = await fetch( url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await resp.json();
} 
import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
  users: [],
  currentPage: 0,
}

const loadNextPage = async () => {
  const users = await loadUsersByPage( state.currentPage + 1 ); 
  if ( users.length === 0 ) {
    return;
  }
  state.currentPage += 1;
  state.users = users; 
}

const loadPreviousPage = async () => {
  throw new Error('No implementado aún');
}

const onUserChanged =  () => {
  throw new Error('No implementado aún');
}

const reloadPage = async () => {
  throw new Error('No implementado aún');
}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   * Retorna arreglo de usuarios
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  /**
   * Retorna página actual
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
  
}
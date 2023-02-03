import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
  users: [],
  currentPage: 0,
}

const loadNextPage = async () => {
  const datos = await loadUsersByPage( state.currentPage + 1 ); 
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

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
  
}
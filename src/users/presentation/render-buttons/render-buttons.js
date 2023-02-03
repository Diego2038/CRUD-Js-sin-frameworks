import './render-buttons.css'
import usersStore from "../../store/users-store";
import { renderTable } from '../render-table/render-table';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

  const prevButton = document.createElement( 'button');
  prevButton.innerHTML = '< Prev';

  const currentPageLabel = document.createElement( 'span' );
  currentPageLabel.innerHTML = usersStore.getCurrentPage();
  currentPageLabel.id = 'current-page';

  const nextButton = document.createElement( 'button');
  nextButton.innerHTML = 'Next >';

  element.append( prevButton, currentPageLabel, nextButton );

  nextButton.addEventListener( 'click', async () => {
    await usersStore.loadNextPage(); // ! OJO, estos son promesas, si no haces un await, el cambio no se verá reflejado hasta el siguiente evento (sin esto pareciera que estás haciendo un evento atrasado).
    renderTable( element );
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
  });

  prevButton.addEventListener( 'click', async () => {
    await usersStore.loadPreviousPage(); // ! OJO, estos son promesas, si no haces un await, lo mismo que se describió arriba
    renderTable( element );
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
  });

}
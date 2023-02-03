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
    usersStore.loadNextPage();
    renderTable( element );
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
  });

  prevButton.addEventListener( 'click', async () => {
    usersStore.loadPreviousPage();
    renderTable( element );
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
  });

}
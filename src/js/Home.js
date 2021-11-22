import * as pages from './pagesVariebles';

export default function home() {
  pages.settingsBtn.addEventListener('click', () => {
    pages.settingsPage.classList.toggle('hide');
    pages.startPage.classList.toggle('hide');
  });

  pages.artistsCategoriesPage.addEventListener('click', () => {
    pages.categoriesPageArtists.classList.toggle('hide');
    pages.startPage.classList.toggle('hide');
  })

  pages.picturesCategoriesPage.addEventListener('click', () => {
    pages.categoriesPagePictures.classList.toggle('hide');
    pages.startPage.classList.toggle('hide');
  })
}
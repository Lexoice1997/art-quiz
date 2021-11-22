import * as pages from './pagesVariebles';

export default function pictures() {
  const categoriesPageContent = document.querySelector('.content-pictures'),
        btnHome = document.querySelectorAll('.btn-home'),
        btnScore = document.querySelector('.btn-score');

  const categoriesName = [
    'Portrait', 'Landscape', 'Still Life', 'Graphic',
    'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism',
    'Kitsch', 'Minimalism', 'Avangard', 'Industrial'
  ];

  for (let i = 0; i < 12; i++) {
    let item = `<div class="categories-page__content-item">
          <div class="item-header">
            <div class="item-title item-counter">${categoriesName[i]}</div>
            <div class="item-total">${i+1}</div>
          </div>
          <div class="item-picture item-picture__main filter" style="background-image: url('image-data-master/img/${(i+12)*10}.jpg')">

          </div>
        </div>`

    categoriesPageContent.innerHTML += item;
  }

  btnHome[1].addEventListener('click', () => {
    pages.categoriesPagePictures.classList.toggle('hide');
    pages.startPage.classList.toggle('hide');
  })

  // btnScore.addEventListener('click', () => {
  //   pages.artistsCategoriesPage.classList.toggle('hide');
  //   pages.startPage.classList.toggle('hide');
  // })
}
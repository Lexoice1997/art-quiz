import * as pages from './pagesVariebles';

export default function artists() {
  const categoriesPageContent = document.querySelector('.content-artists'),
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
            <div class="item-total">${i + 1}</div>
          </div>
          <div class="item-picture item-picture__main filter" style="background-image: url('image-data-master/img/${(i+1)*10}.jpg')">

          </div>
        </div>`

    categoriesPageContent.innerHTML += item;
  }

  btnHome[0].addEventListener('click', () => {
    pages.categoriesPageArtists.classList.toggle('hide');
    pages.startPage.classList.toggle('hide');
  })

  // btnScore.addEventListener('click', () => {
  //   pages.artistsCategoriesPage.classList.toggle('hide');
  //   pages.startPage.classList.toggle('hide');
  // })
}
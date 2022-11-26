import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryCards = document.querySelector('div.gallery');
const cards = createGalleryCards(galleryItems);

galleryCards.insertAdjacentHTML('beforeend', cards);

galleryCards.addEventListener('click', onCardClick);



function createGalleryCards() {
return galleryItems.map(({preview, original, description}) => {
    return`
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
})
.join('');
};
function onCardClick(event) {
    // console.log(event);
    console.log(event.target.dataset.source);
    // console.log(event.currentTarget)

    // const isCard = evt.target.classList.contains('gallery_image');
    // if(!isCard) {
    //     return;
    // }
    // console.log(evt.);
}


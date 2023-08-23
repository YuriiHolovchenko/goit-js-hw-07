import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCards = document.querySelector('div.gallery');
const cards = createGalleryCards(galleryItems);
let instance;

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
    event.preventDefault()
    instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);
    instance.show();
    galleryCards.addEventListener('keydown', onEscButton);
};
function onEscButton (event) {
    console.log('test');
    if (event.key === "Escape") {
        instance.close();
        galleryCards.removeEventListener('keydown', onEscButton);
    }
};

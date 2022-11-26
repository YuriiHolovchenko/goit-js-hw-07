import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCards = document.querySelector('.gallery');
const cards = createGalleryCards(galleryItems);
let lightbox;

galleryCards.insertAdjacentHTML('beforeend', cards);

lightbox = new SimpleLightbox('ul.gallery a', {
    captionsData: "alt", 
    captionDelay: 250,
    captionPosition: 'bottom'
});

function createGalleryCards() {
return galleryItems.map(({preview, original, description}) => {
    return`
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
})
.join('');
};




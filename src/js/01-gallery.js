// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

function galleryElMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a  class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" width="240" data-source="${original}" alt="${description}"></a></li>`})
    .join("");
}
    
galleryEl.insertAdjacentHTML('beforeend', galleryElMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});



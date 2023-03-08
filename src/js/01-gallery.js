// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


function createGalleryMarcup({ preview, original, description }) {
    return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
}

const galleryList = document.querySelector('.gallery')

const createGallery = galleryItems.map(createGalleryMarcup).join('');
galleryList.insertAdjacentHTML('beforeend', createGallery)


  
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
})
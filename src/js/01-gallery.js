import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refGallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}).join('');

refGallery.insertAdjacentHTML('beforeend', markup);

const lightBoxOptions = {
 captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
};

let lightbox = new SimpleLightbox('.gallery__item', lightBoxOptions);
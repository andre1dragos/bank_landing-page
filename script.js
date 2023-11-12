'use strict';

// html elements
const bodyEl = document.querySelector('html');
const mobileMenuEl = document.querySelector('#mobile-menu');
const openMenuBtn = document.querySelector('#open-mobile-menu');
const closeMenuBtn = document.querySelector('#close-mobile-menu');
const overlayEl = document.querySelector('.overlay');

openMenuBtn.addEventListener('click', () => {
  mobileMenuEl.classList.replace('hidden', 'flex-container');
  openMenuBtn.classList.add('hidden');
  closeMenuBtn.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  bodyEl.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenuEl.classList.replace('flex-container', 'hidden');
  closeMenuBtn.classList.add('hidden');
  openMenuBtn.classList.remove('hidden');
  overlayEl.classList.add('hidden');
  bodyEl.style.overflow = 'visible';
});

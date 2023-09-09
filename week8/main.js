import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
// import 'swiper/css/pagination';
import { Scrollbar } from 'swiper/modules';

const swiper = new Swiper(".swiper", {
    modules: [Scrollbar],
    spaceBetween: 24,
    slidesPerView: 2,
    // Scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true
    },
    mousewheel: true
  });
  
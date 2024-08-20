import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default function initBannerSlider() {
  const bannerSlider = document.querySelectorAll('.banner-section .swiper');

  bannerSlider.forEach((slider) => {
    const carousel = new Swiper(slider, {
      slidesPerView: 1,
      modules: [Navigation],
      speed: 1000,
      loop: false,
      watchSlidesProgress: false,
      autoHeight: false,
      centeredSlides: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
  });
}

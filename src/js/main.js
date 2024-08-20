// SCSS
import '../style/main.scss';

// Icons Library
import 'remixicon/fonts/remixicon.css';

// JS
import Project from './helpers/global-functions';
import AOS from 'aos';
import 'aos/dist/aos.css';

import initNavigation from './components/navigation';
import initScrollToTopButton from './components/back-to-top';
import initBannerSlider from './components/banner-slider';

Project.ready(() => {
  initNavigation();
  initScrollToTopButton();
  initBannerSlider();
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function () {
    AOS.init();
  }, 500);
});

export default function initNavigation() {
  const header = document.querySelector('header');

  if (!header) {
    return;
  }

  const hamburgerOpenButton = header.querySelector('.header__hamburger');
  const navWrapper = header.querySelector('.header__nav-wrapper');
  const menuItems = header.querySelectorAll(
    '.header__nav .menu-item-has-children'
  );

  if (!hamburgerOpenButton || !navWrapper || !menuItems) {
    return;
  }

  const moveToNavBlocks = document.querySelector('.header__move-to-nav');
  const desktopMoveContainer = document.querySelector(
    '.header__desktop-move-to'
  );

  const openMenu = (event) => {
    document.body.classList.add('header--mobile-is-open');
    navWrapper.classList.add('header__nav-wrapper--is-open');
    event.setAttribute('aria-expanded', 'true');
    event.setAttribute('aria-label', 'Zamknij menu');
  };

  const closeMenu = (event) => {
    document.body.classList.remove('header--mobile-is-open');
    navWrapper.classList.remove('header__nav-wrapper--is-open');
    event.setAttribute('aria-expanded', 'false');
    event.setAttribute('aria-label', 'Otwórz menu');
  };

  const toggleMenu = (e) => {
    if (e.target.getAttribute('aria-expanded') === 'false') {
      openMenu(e.target);
    } else {
      closeMenu(e.target);
    }
  };

  hamburgerOpenButton.addEventListener('click', toggleMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1025) {
      closeMenu(hamburgerOpenButton);

      if (desktopMoveContainer && moveToNavBlocks) {
        desktopMoveContainer.appendChild(moveToNavBlocks);
      }
    } else {
      if (navWrapper && moveToNavBlocks) {
        navWrapper
          .querySelector('.header__nav-wrapper nav')
          .appendChild(moveToNavBlocks);
      }
    }
  });

  if (window.innerWidth >= 1025) {
    if (desktopMoveContainer && moveToNavBlocks) {
      desktopMoveContainer.appendChild(moveToNavBlocks);
    }
  } else {
    if (navWrapper && moveToNavBlocks) {
      navWrapper
        .querySelector('.header__nav-wrapper nav')
        .appendChild(moveToNavBlocks);
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (e) => {
      menuItems.forEach((item) => {
        if (item !== e.target) {
          item.classList.remove('menu-item--open');
        }
      });

      if (!e.target.classList.contains('menu-item--open')) {
        e.target.classList.add('menu-item--open');
      } else {
        e.target.classList.remove('menu-item--open');
      }
    });

    menuItem.addEventListener('mouseenter', (e) => {
      menuItems.forEach((item) => {
        if (item !== e.target) {
          item.classList.remove('menu-item--open');
        }
      });

      if (!e.target.classList.contains('menu-item--open')) {
        e.target.classList.add('menu-item--open');
      }
    });

    menuItem.addEventListener('mouseleave', (e) => {
      if (e.target.classList.contains('menu-item--open')) {
        e.target.classList.remove('menu-item--open');
      }
    });
  });

  document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-item-has-children')) {
      menuItems.forEach((item) => {
        item.classList.remove('menu-item--open');
      });
    }

    if (e.target.closest('.header__pseudo-element')) {
      closeMenu(hamburgerOpenButton);
    }
  });
}

export default function initScrollToTopButton() {
  const scrollToTopButton = document.querySelector('.back-to-top');

  if (!scrollToTopButton) return;

  const backToTopElement = document.createElement('div');
  backToTopElement.id = 'header-scroll-to-top';
  document.body.insertBefore(backToTopElement, document.body.firstChild);

  const observerElement = backToTopElement;

  const activeClassToggle = (payload) => {
    const { isIntersecting } = payload[0];
    scrollToTopButton.classList.toggle('active', !isIntersecting);
  };

  const observer = new IntersectionObserver(activeClassToggle, {
    rootMargin: '200px',
  });

  observer.observe(observerElement);
}

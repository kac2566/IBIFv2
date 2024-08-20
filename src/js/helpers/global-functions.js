import { debounce } from './debounce';

const Project = {
  /**
   * @param callbackFunc - Funkcja zwrotna, która zostanie wywołana, gdy dokument będzie gotowy
   */
  ready(callbackFunc) {
    const readyFunction = () => {
      callbackFunc();
    };

    if (document.readyState !== 'loading') {
      // Dokument jest już gotowy, wywołaj funkcję zwrotną od razu
      readyFunction();
    } else if (document.addEventListener) {
      // Wszystkie nowoczesne przeglądarki rejestrują DOMContentLoaded
      document.addEventListener('DOMContentLoaded', readyFunction);
    } else {
      // Starsze przeglądarki IE
      document.attachEvent('onreadystatechange', () => {
        if (document.readyState === 'complete') {
          readyFunction();
        }
      });
    }
  },
  debounce,
};

export default Project;

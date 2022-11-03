export const headerActive = () => {
  const header = document.querySelector('.header');
  const body = document.querySelector('body');
  if (!!header) {
    const burger = header.querySelector('.header__content_burger');
    burger.onclick = () => {
      header.classList.contains('active') ? removeClass() : addClass();

      function addClass() {
        header.classList.add('active');
        body.style.overflow = 'hidden';
      }

      function removeClass() {
        header.classList.remove('active');
        body.style.overflow = '';
      }
    }
  }
}

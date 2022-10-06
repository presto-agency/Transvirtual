window.addEventListener('DOMContentLoaded', function () {
  if (window.screen.width < 1200) {
    headerActive()
  }
})

const headerActive = () => {
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

// const bg = () => {
//     document.querySelectorAll(".ibg").forEach(el => {
//         if (el.querySelector('img')) {
//             el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
//             el.querySelector('img').style.display = 'none';
//         }
//     });
// }

// const scrollPage = () => {
//     let scrollPosition;
//     const header = document.querySelector('.header');
//     const scrollChange = 1;

//     const addClass = () => header.classList.add("hide")
//     const removeClass = () => header.classList.remove("hide")

//     window.addEventListener('scroll', function () {
//         scrollPosition = window.scrollY;
//         if (scrollPosition >= scrollChange) { addClass() }
//         else { removeClass() }
//     })
// }






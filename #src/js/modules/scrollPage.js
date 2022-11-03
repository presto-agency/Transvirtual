export const scrollPage = () => {
  let scrollPosition;
  const header = document.querySelector('.header');
  const scrollChange = 1;

  const addClass = () => header.classList.add("hide")
  const removeClass = () => header.classList.remove("hide")

  window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;
    scrollPosition >= scrollChange ? addClass() : removeClass();
  })
}

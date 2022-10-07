window.addEventListener('DOMContentLoaded', function () {
  if (window.screen.width < 1200) {
    headerActive()
  }
  if (window.screen.width >= 1200) {
    scrollPage()
  }
  if (window.screen.width < 1200) {
    showSubmenu(document.querySelectorAll('.submenu-item-trigger'))
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

const scrollPage = () => {
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

const showSubmenu = (itemsLinks) => {

  function setHeight(itemsLinks) {
    if (itemsLinks.length > 0) {
      itemsLinks.forEach(item => {
        let itemLink = item.querySelector('a');
        if (!!itemLink) {
          itemLink.onclick = (e) => {
            e.preventDefault()
            let itemsMenu = item.querySelectorAll('.dropdown-menu>li');
            let submenuHeight = getHeight(itemsMenu)
            checkHeight(itemsMenu[0], submenuHeight)
            itemsMenu[0].parentNode.parentNode.classList.toggle('open')
          }
        }
      })
    }
  }

  function getHeight(items) {
    let subHeight = Array.from(items).reduce((sum, current) =>
      sum + current.offsetHeight, 0);
    return subHeight
  }

  function checkHeight(item, height) {
    item.parentNode.style.maxHeight = item.parentNode.style.maxHeight === height + 'px' ? '0' : height + 'px';
  }

  setHeight(itemsLinks)
}






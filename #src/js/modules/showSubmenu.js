export const showSubmenu = (itemsLinks) => {

  function setHeight(itemsLinks) {
    if (itemsLinks.length > 0) {
      itemsLinks.forEach(item => {
        item.onclick = () => {
          let itemsMenu = item.querySelectorAll('.dropdown-menu>li');
          let submenuHeight = getHeight(itemsMenu)
          checkHeight(itemsMenu[0], submenuHeight)
          item.classList.toggle('open')
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

import {headerActive} from "./modules/headerActive";
import {scrollPage} from "./modules/scrollPage";
import {showSubmenu} from "./modules/showSubmenu";

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
  if (!!document.querySelector(".questions")) {
    showSubmenu(document.querySelectorAll(".submenu-questions"))
  }
})





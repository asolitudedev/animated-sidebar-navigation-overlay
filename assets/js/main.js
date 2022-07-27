/*===== ELEMENT SELECTOR =====*/
const sidebar = document.getElementById('sidebar');
const buttonMenu = document.getElementById('btn-menu');
const buttonClose = document.getElementById('btn-close');
const navLinks = document.getElementsByClassName('nav-link');
const sections = document.getElementsByClassName('section');

/*===== SHOW/HIDE SIDEBAR ======*/
// OPEN
buttonMenu.addEventListener('click', () => {
  sidebar.classList.add('nav-show');
});
// CLOSE
buttonClose.addEventListener('click', () => {
  sidebar.classList.remove('nav-show');
});

// HIDE SIDEBAR WHEN CLICK ON MENU ITEM
Array.from(navLinks).forEach(navItem => {
  navItem.addEventListener('click', () => {
    sidebar.classList.remove('nav-show');
  });
});

/*===== SCROLL ACTION: ACTIVE MENU ITEM WHEN SCROLL TO SECTION =====*/
const scrollToActive = () => {
  const scrollY = window.pageYOffset;

  Array.from(sections).forEach(section => {
    const SECTION_GAP = 50;
    const sectionHeight = section.offsetHeight;
    const sectionPosition = section.offsetTop - SECTION_GAP;
    const sectionId = section.getAttribute('id');
    const menuItemElement = document.querySelector('.nav-item a[href*=' + sectionId + ']');

    // Handle when scroll to section area
    if (scrollY > sectionPosition && scrollY <= sectionPosition + sectionHeight) {
      menuItemElement.classList.add('active');
    } else {
      menuItemElement.classList.remove('active');
    }
  });
}

// Binding scrollToActive event
window.addEventListener('scroll', scrollToActive);

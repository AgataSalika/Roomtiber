const modal = document.querySelector('.modal__container');
const modalBtn = document.querySelector('.explore__btn');

modalBtn.addEventListener('click', () => {
    modal.classList.remove ('hidden')
})

modal.addEventListener('click', (event) => {
    modal.classList.add ('hidden')
    event.stopPropagation()
    event.preventDefault()

})

/*=============== SWIPER===============*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1000,
    },
    slidesPerView:3,
    spaceBetween:10,
    breakpoints:{
      300:{
        slidesPerView:1,
    },
      800:{
        slidesPerView:2,
      },
      1200:{
        slidesPerView:3,
      }
  },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /*=============== BURGER MENU===============*/
  const burgerMenu = document.querySelector('.burger');
  const burgerMenuContainer = document.querySelector('.burgerMenu__container')
  const btnCloseOpen = document.querySelector('.burger__container')

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle ('active')
    burgerMenuContainer.classList.toggle ('hidden')
    if (!burgerMenuContainer.classList.contains ('hidden'))
      btnCloseOpen.style.position = 'fixed'
    else {
      btnCloseOpen.style.position = 'absolute'
    }


})



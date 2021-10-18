const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute("placeholder", "통합검색");
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
})

// Badge
const badgeEl = document.querySelector('.badges')

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'

    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));


// Visual

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
});

// notice swiper

new Swiper('.notice-left-text .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop:true,
 spaceBetween:30,
 slidesPerView:5,
 navigation: {
  prevEl: '.awards .swiper-prev',
  nextEl: '.awards .swiper-next'
}
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  if (isHidePromotion) {
    //보임 처리!
    promotionEl.classList.remove('hide');
  } else {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  }
  isHidePromotion = !isHidePromotion;
});



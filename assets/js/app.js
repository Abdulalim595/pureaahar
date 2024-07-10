
$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").removeClass("active");
    
  });
  
  // $(".vision__slider").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   margin: 8,
  //   nav: false,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //     1200: {
  //       items: 4,
  //     },
  //   },
  // });

  $(".category__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".produsele__cards2").owlCarousel({
    items: 1,
    loop: true,
    margin: 12,
    nav: true,
    navText: [
      '<span><i class="fa-regular fa-angle-left"></i></span>',
      '<span><i class="fa-regular fa-angle-right"></i></span>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".viva__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 22,
    nav: true,
    navText: [
      '<span><i class="fa-regular fa-angle-left"></i></span>',
      '<span><i class="fa-regular fa-angle-right"></i></span>',
    ],
    dots: true
  });
  
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header__area").removeClass("scroll-header");
    } else {
      $(".header__area").addClass("scroll-header");
    }
  });
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  
});

function add(x){
  x.classList.toggle("add")
}

function titleRepairs(){
  let booking1 = document.querySelector('.booking1');
  let sell1 = document.querySelector('.sell1');
  let serviceListDetail1 = document.querySelector('.service__list__detail1');
  let repairsImgs = document.querySelector('.repairs-imgs');
  let bookNow = document.querySelector('.bookNow');
  let serviceRepair2 = document.querySelector('.service__repair2');
  let arrowDown = document.querySelector('.arrows-downs');
  booking1.classList.toggle("bookingShow");
  sell1.classList.toggle("sellActive");
  serviceListDetail1.classList.toggle("service__list__detailActive");
  repairsImgs.classList.toggle("repairs-imgActive");
  bookNow.classList.toggle("bookNowActive");
  serviceRepair2.classList.toggle("serviceRepairActive");
  arrowDown.classList.toggle("arrowDownActive");
}

function titleRepairs2(){
  let booking1 = document.querySelector('.booking2');
  let sell1 = document.querySelector('.sell2');
  let serviceListDetail1 = document.querySelector('.service__list__detail2');
  let repairsImgs = document.querySelector('.repairs-imgs2');
  let bookNow = document.querySelector('.bookNow2');
  let serviceRepair2 = document.querySelector('.service__repair3');
  let arrowDown = document.querySelector('.arrows-downs2');
  booking1.classList.toggle("bookingShow");
  sell1.classList.toggle("sellActive");
  serviceListDetail1.classList.toggle("service__list__detailActive");
  repairsImgs.classList.toggle("repairs-imgActive");
  bookNow.classList.toggle("bookNowActive");
  serviceRepair2.classList.toggle("serviceRepairActive");
  arrowDown.classList.toggle("arrowDownActive");
}


// let login = document.querySelector('.login');
// let accountCard = document.querySelector('.account-card');
// login.addEventListener('click', () => {
//   accountCard.classList.toggle('shows')
// })

function moreOffers(){
  let cartCardList = document.querySelector('.cart-card-list')
  cartCardList.classList.toggle('cartList')
}

function paymentBtn(){
  let paymentMethodCard = document.querySelector('.payment__method__card');
  paymentMethodCard.classList.toggle("paymentActive")
}

function searchItem(){
  let searchID =document.getElementById('searchID');
  let mostSearch = document.querySelector('.most__search');
  let screenOverlay = document.querySelector('.screen__overlay');
  let login = document.querySelector('.login');
  let accountCard = document.querySelector('.account-card');
  
  login.addEventListener('click', () => {
    accountCard.classList.toggle('shows')
    mostSearch.classList.remove('searchActive');
  })
  
  searchID.addEventListener('click', () => {
    mostSearch.classList.toggle('searchActive');
    accountCard.classList.remove('shows')
  })
  
  
}

searchItem()
let checkCard = document.querySelectorAll('.subscription__single__card');
let checkInput = document.querySelector('.meal_check');
// let checkCard = document.querySelectorAll('.meal-check');
checkCard.forEach(x => {
  x.addEventListener('click',() => {
    if(x.classList.add('checkActive') && checkInput.classList.add('mealCheck')){
      x.classList.remove('checkActive')
      checkInput.classList.remove('mealCheck')
    }else {
      x.classList.add('checkActive')
      checkInput.classList.add('mealCheck')
    }

    checkCard.forEach((e) => {
      if (e !== x) {
        e.classList.remove("checkActive");
        checkInput.classList.remove('mealCheck')
      }
    });
  })
});

let plus = document.querySelector('.plus');
let count = document.querySelector('.count');
let minus = document.querySelector('.minus');

let a = 0;
plus.addEventListener('click',() => {
  a++;
  a =(a > 5) ? a : a;
  count.innerText = a;
})
minus.addEventListener('click',() => {
  if(a > 1){
    a--;
    a = (a < 5) ? a : a;
    count.innerText = a;
  }
})




$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").removeClass("active");
    
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



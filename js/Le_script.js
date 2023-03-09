window.onscroll = function () { downHill() };

function downHill() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("con").className = "Topbar"
    }
    else {
        document.getElementById("con").className = "fixed_con"
    }
}

const main_banner = document.querySelector('.banner');
const List = document.querySelector('.ban_list');
const _banner = document.querySelectorAll('.ban');
let currentIndex = 0;

_banner.forEach((ban) => {
    ban.style.width = `${main_banner.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
  })

const buttonLeft = document.querySelector('.ban_btn1');
const buttonRight = document.querySelector('.ban_btn2');


buttonLeft.addEventListener('click', () => {
    currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
    List.style.marginLeft = `-${main_banner.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  });
  
  buttonRight.addEventListener('click', () => {
    currentIndex++;
    currentIndex = currentIndex >= _banner.length ? _banner.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
    List.style.marginLeft = `-${main_banner.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  });



  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 2,
    observer: true,
    observeParents: true,
    spaceBetween: 50,
    // Optional parameters
    // 너비 비례 slidesPerView가 많으면 루프 작동 안함
    loop: true,
    

    autoplay: {     //자동슬라이드 (false-비활성화)
      delay: 1000, // 시간 설정
      disableOnInteraction: true, // false-스와이프 후 자동 재생
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

  var mySwiper = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    slidesPerGroup: 2,
   
    spaceBetween: 50,
    // Optional parameters
    // 너비 비례 slidesPerView가 많으면 루프 작동 안함
    loop: true,
    

    autoplay: {     //자동슬라이드 (false-비활성화)
      delay: 1000, // 시간 설정
      disableOnInteraction: true, // false-스와이프 후 자동 재생
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


const badgeEL = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 600) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);: 에니메이션
      gsap.to(badgeEL, 0.6, {
        opacity: 0,
        display: 'none'
      });
      // 버튼 보이기!
      gsap.to(toTopEl, .2, {
        x: 0
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEL, 0.6, {
        opacity: 1,
        display: 'block'
      });
      // 버튼 숨기기!
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
  }, 300)
);
// _.throttle(함수, 시간m s)

// 버튼 클릭시 스크롤 맨 위로 올라가는 코드
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // index 값은 숫자0부터 시작하므로 +1 을 해줘야함.
    delay: (index + 1) * .7,
    opacity: 1
  });

});

// new Swiper(선택자, 옵션); -> 자동으로 움직이는 공지사항란
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기 
  loop: true,
  autoplay: {
    delay: 4000 
    // 3000(3초)이 기본
  },
  pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    // 사용자의 페이지 번호 요소 실제로 눌러서 제어할 수 있는지 가능 여부
    clickable: true 
  },
  navigation: {
    // 이전 슬라이드 보는 버튼, 다음 슬라이드 보는 버튼
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리! -> isHidePromotion이 TRUE가되면 
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y:size,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: random(0, delay)
  });
}

// floatingObject (selector, delay, size-위아래 움직이는 범위)
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면 0.8 지점을 넘어갈때 show 클래스 추가
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


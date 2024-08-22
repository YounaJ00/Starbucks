// 공통 부분 js 파일 

// search icon 클릭시 검색창 늘어나는 event
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 올해가 몇 년도 인지 자동 계산 후 출력하는 코드
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

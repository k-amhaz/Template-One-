let backToTop = document.querySelector(".back-to-top");
let theIcon = document.querySelector(".back-to-top > i");
let theBody = document.body;

window.onscroll = function () {
  this.scrollY > 800
    ? backToTop.classList.add("show")
    : backToTop.classList.remove("show");
};

// backToTop.onclick = function () {
//   window.scrollTo(0, 0);
// };
theIcon.onclick = function () {
  window.scrollTo(0, 0);
};

let fun = function () {
  window.scrollTo(0, 0);
};
backToTop.addEventListener("click", fun);

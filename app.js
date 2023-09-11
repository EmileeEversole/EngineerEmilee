const toggle = document.querySelectorAll('.input-toggle');
const navLogo = document.querySelectorAll('.nav-logo');
let darkMode = localStorage.getItem('dark-mode');
const twinkle = document.querySelector('.twinkle');
const daySky = document.querySelectorAll('.day-sky');

const enableDarkMode = () => {

  toggle.forEach((btn) => {
    btn.checked = true;
  });

  navLogo.forEach((logo) => {
    logo.src = "images/white-logo.svg";
  });

  document.body.classList.add("dark");
  document.getElementById('customized').src = "images/customized-w.svg";
  document.getElementById('mobile-dev').src = "images/mobile-dev-w.svg";
  document.getElementById('hand-coded').src = "images/hand-coded-w.svg";
  document.getElementById('scalability').src = "images/scalability-w.svg";
  twinkle.style.animationPlayState = "running";

  localStorage.setItem('dark-mode', "enabled");
}

const disableDarkMode = () => {

  toggle.forEach((btn) => {
    btn.checked = false;
  });

  navLogo.forEach((logo) => {
    logo.src = "images/blue-logo.svg";
  });

  document.body.classList.remove("dark");
  document.getElementById('customized').src = "images/customized.svg";
  document.getElementById('mobile-dev').src = "images/mobile-dev.svg";
  document.getElementById('hand-coded').src = "images/hand-coded.svg";
  document.getElementById('scalability').src = "images/scalability.svg";
  twinkle.style.animationPlayState = "paused";

  localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === "enabled") {
  enableDarkMode();
}

toggle.forEach((btn) => { 
  btn.addEventListener('click', () => {
    darkMode = localStorage.getItem("dark-mode");
    if(darkMode === "disabled") {
        enableDarkMode();
    }
    else {
      disableDarkMode();
    }
  });
});

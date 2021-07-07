'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const languageProgress = document.querySelectorAll('.language__progress');
  const skillsProgress = document.querySelectorAll('.skills__progress');
  const anchors = document.querySelectorAll('a[href*="#"]');

  drawProgress(languageProgress);
  drawProgress(skillsProgress);

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();
      
      const blockID = anchor.getAttribute('href').substr(1);
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  }

  function drawProgress (progress) {
    [...progress].forEach(item => {
      const percent = item.querySelector('span');
      percent.classList.add('progress-width');
      percent.style.width = percent.textContent;
    });
  }
});
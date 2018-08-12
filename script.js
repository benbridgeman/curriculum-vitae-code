// On page load display main content
const main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    main.classList.remove("hide");
  }, 200);
  setTimeout(function () {
    main.classList.add("opacity");
  }, 700);
});


// Add all section tags to array and remove the last section (reference)
const sections = Array.from(document.getElementsByTagName('section'));
sections.pop();

// Loop sections and add 'dropdown' functionality
sections.forEach(function (section) {
  section.addEventListener('click', function () {
    const div = section.querySelector('div');
    section.firstElementChild.classList.toggle('rotate');
    div.classList.toggle('hide');
  });
});

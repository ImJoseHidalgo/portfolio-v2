const mainContainer = document.querySelector(".main-container");
const menuButton = document.querySelector(".menu-button");
const sectionOne = document.querySelector(".section-one");

const sectionOneOptions = {
  threshold: 1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      mainContainer.classList.add("active");
      menuButton.classList.add("show");
    } else {
      mainContainer.classList.remove("active");
      menuButton.classList.remove("show");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

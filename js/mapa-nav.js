document.addEventListener("DOMContentLoaded", () => {

  const menuLinks = document.querySelectorAll(".nav-list > li > a");
  const sections = document.querySelectorAll("section[id]");

  function setActiveLink() {
    const scrollPos = document.body.scrollTop + 140;

    let currentSectionId = null;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.id;
      }
    });

    menuLinks.forEach(link => {
      link.classList.remove("active");

      const href = link.getAttribute("href");

      if (href === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }

  document.body.addEventListener("scroll", setActiveLink);
  setActiveLink();



  // =========================
  // UNDERLINE DOS TÍTULOS
  // =========================

  const sectionTitles = document.querySelectorAll('.section-title');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, { threshold: 0.6 });

  sectionTitles.forEach(title => observer.observe(title));

});

/* =========================================================
   MAPA DE NAVEGAÇÃO — SCROLL SPY (BODY SCROLL)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menuLinks = document.querySelectorAll(".nav-list > li > a");
  const sections = document.querySelectorAll("section[id]");

  function setActiveLink() {
    const scrollPos = body.scrollTop + 140;

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

      // HOME
      if (href === "#home" && currentSectionId === "home") {
        link.classList.add("active");
      }

      // COOKIES engloba categorias
      if (
        href === "#cookies" &&
        (currentSectionId === "cookies" ||
         currentSectionId === "classicos")
      ) {
        link.classList.add("active");
      }

      // OUTROS
      if (href === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    // ---- FORÇA CONTATO QUANDO CHEGAR NO FIM DA PÁGINA ----
const scrollBottom =
  body.scrollTop + window.innerHeight >= body.scrollHeight - 5;

if (scrollBottom) {
  menuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#contato") {
      link.classList.add("active");
    }
  });
}

  }

  body.addEventListener("scroll", setActiveLink);
  setActiveLink(); // estado inicial
});

// =========================
// MENU MOBILE — ACTIVE POR CLIQUE
// =========================
document.querySelectorAll(".nav-list > li > a").forEach(link => {
  link.addEventListener("click", () => {
    // remove active de todos
    document.querySelectorAll(".nav-list > li > a")
      .forEach(l => l.classList.remove("active"));

    // ativa somente o clicado
    link.classList.add("active");
  });
});


/* =========================
   UNDERLINE TÍTULOS POR SCROLL
   ========================= */

const sectionTitles = document.querySelectorAll('.section-title');

const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  },
  {
    threshold: 0.6
  }
);

sectionTitles.forEach(title => titleObserver.observe(title));

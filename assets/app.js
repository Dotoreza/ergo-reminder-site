document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const links = document.querySelectorAll("[data-nav-link]");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
          const target = document.getElementById(href.slice(1));
          if (target) {
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
          }
        }
      });
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener("click", event => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    window.matchMedia("(min-width: 821px)").addEventListener("change", closeMenu);
  }

  const sectionLinks = [...links].filter(link => link.getAttribute("href").startsWith("#"));
  if (sectionLinks.length) {
    const sections = sectionLinks.map(link => document.getElementById(link.hash.slice(1)));
    let scheduled = false;
    const updateSection = () => {
      const threshold = (document.querySelector(".site-header")?.offsetHeight || 86) + 45;
      let active = -1;
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= threshold) active = index;
      });
      sectionLinks.forEach((link, index) => {
        link.classList.toggle("active", index === active);
        if (index === active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      scheduled = false;
    };
    window.addEventListener("scroll", () => {
      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(updateSection);
      }
    }, { passive: true });
    window.addEventListener("resize", updateSection);
    updateSection();
  }
});

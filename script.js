/* =========================================================
   TERRE DE PROVENCE — interactions (vanilla, sans librairie)
   ========================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nav : fond au scroll ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal au scroll (avec léger décalage) ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        // décalage doux entre éléments voisins d'une même grille
        const siblings = Array.from(el.parentElement.querySelectorAll(":scope > [data-reveal]"));
        const i = Math.max(0, siblings.indexOf(el));
        el.style.transitionDelay = Math.min(i * 90, 360) + "ms";
        el.classList.add("is-in");
        obs.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Parallax discret du hero ---------- */
  const heroImg = document.querySelector(".hero__img");
  if (heroImg && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImg.style.transform = "translate3d(0," + y * 0.18 + "px,0) scale(1.06)";
      }
      ticking = false;
    };
    heroImg.style.transform = "scale(1.06)";
    window.addEventListener("scroll", () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }

  /* ---------- Statut ouvert / fermé (7j/7, 7h–20h30) ---------- */
  (function () {
    const status = document.getElementById("openStatus");
    const dot = document.getElementById("openDot");
    const statusInfos = document.getElementById("openStatusInfos");
    const dotInfos = document.getElementById("openDotInfos");

    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const isOpen = minutes >= 7 * 60 && minutes < 20 * 60 + 30;

    const setDot = (el, open) => { if (el) el.classList.add(open ? "dot--open" : "dot--closed"); };

    if (isOpen) {
      if (status) status.textContent = "Ouvert maintenant · jusqu'à 20h30";
      if (statusInfos) statusInfos.textContent = "Ouvert maintenant";
    } else {
      if (status) status.textContent = "Fermé · ouvre à 7h00";
      if (statusInfos) statusInfos.textContent = "Fermé · ouvre à 7h00";
    }
    setDot(dot, isOpen);
    setDot(dotInfos, isOpen);
  })();

  /* ---------- Année footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

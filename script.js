/* =========================================================
   TERRE DE PROVENCE — interactions
   ========================================================= */

/* ---------- Images placeholder ----------
   Chaque visuel est une photo libre de droits (Unsplash).
   Pour mettre TES vraies photos : remplace simplement l'URL
   correspondante ci-dessous par "images/mon-fichier.jpg"
   (et dépose le fichier dans un dossier images/).
   Si une image ne charge pas, un fond coloré chaleureux reste affiché. */
const IMAGES = {
  market:    "images/devanture.png",   // devanture réelle du magasin (hero)
  fraises:   "images/fraises.jpg",      // étal de fraises
  peches:    "images/peches.jpg",       // pêches
  tomates:   "images/tomates.jpg",      // tomates & artichauts
  legumes:   "images/legumes.jpg",      // étal de légumes
  primeur:   "images/primeur.jpg",      // grand étal coloré
  epicerie:  "images/epicerie.jpg",     // rayons épicerie fine
  olives:    "images/olives.jpg",       // rayon olives
  producteurs:"images/producteurs.webp",// cagette / circuit court
  livraison: "images/livraison.jpg",    // panier livré (section livraison)
  devanture: "images/lieu.jpg"          // étal coloré (section "Le lieu")
};

/* Images affichées AU SURVOL (fondu enchaîné) — vraies photos du magasin */
const HOVER = {
  fraises: "images/cerises.jpg",        // cerises & clémentines
  peches:  "images/agrumes.jpg",        // agrumes
  tomates: "images/tomates-2.jpg",      // poivrons & légumes
  legumes: "images/legumes-2.jpg"       // haricots & asperges
};

document.querySelectorAll("[data-img]").forEach((el) => {
  const key = el.getAttribute("data-img");
  const url = IMAGES[key];
  if (url) {
    const img = new Image();
    img.onload = () => { el.style.backgroundImage = `url("${url}")`; };
    img.onerror = () => { /* on garde le fond coloré de secours défini en CSS */ };
    img.src = url;
  }

  // Couche de survol : si une image "hover" existe pour cette carte, on l'ajoute par-dessus
  const hurl = HOVER[key];
  if (hurl) {
    const layer = document.createElement("div");
    layer.className = "prod__imghover";
    el.insertAdjacentElement("afterend", layer);
    const himg = new Image();
    himg.onload = () => { layer.style.backgroundImage = `url("${hurl}")`; };
    himg.src = hurl;
  }
});

/* ---------- Nav : fond au scroll ---------- */
const nav = document.getElementById("nav");
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Reveal au scroll ---------- */
const revealTargets = [
  ".section__head", ".prod", ".duo__card", ".lieu__content",
  ".infos__panel", ".infos__map", ".footer__inner",
  ".perk", ".olives__inner", ".circuit__inner", ".livraison__inner"
];
const els = document.querySelectorAll(revealTargets.join(","));
els.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
els.forEach((el) => io.observe(el));

/* ---------- Statut ouvert / fermé (7j/7, 7h–20h30) ---------- */
(function () {
  const status = document.getElementById("openStatus");
  const dot = document.getElementById("openDot");
  if (!status || !dot) return;

  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const minutes = h * 60 + m;
  const open = 7 * 60;        // 07:00
  const close = 20 * 60 + 30; // 20:30

  if (minutes >= open && minutes < close) {
    status.textContent = "Ouvert maintenant · jusqu'à 20h30";
    dot.classList.add("dot--open");
  } else {
    status.textContent = "Fermé · ouvre à 7h00";
    dot.classList.remove("dot--open");
    dot.classList.add("dot--closed");
  }
})();

/* ---------- Année footer ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

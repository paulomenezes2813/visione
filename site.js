// Visione — progressive enhancement
// Scroll-reveal: só ativa se houver JS; sem JS, todo conteúdo já aparece.
(function () {
  var supportsIO = "IntersectionObserver" in window;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!supportsIO || reduce) return; // degrada para conteúdo sempre visível

  document.documentElement.classList.add("js-reveal");

  var els = document.querySelectorAll(".reveal");
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  els.forEach(function (el) { io.observe(el); });
})();

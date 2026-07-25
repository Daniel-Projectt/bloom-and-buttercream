/* =====================================================================
   Bloom & Buttercream — interactions
   Vanilla JS, no dependencies. Progressive enhancement:
   the site is fully usable with JS disabled.
   ---------------------------------------------------------------------
   1. Sticky header softens on scroll
   2. Mobile navigation toggle
   3. Scroll reveal (IntersectionObserver)
   4. Gallery filtering
   5. Lightbox (open / close / prev / next / keyboard)
   6. Footer year
   ===================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -----------------------------------------------------------------
     1. Sticky header softens on scroll
     ----------------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* -----------------------------------------------------------------
     2. Mobile navigation toggle
     ----------------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    var setNav = function (open) {
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("no-scroll", open);
    };
    toggle.addEventListener("click", function () {
      setNav(!links.classList.contains("is-open"));
    });
    // Close when a link is tapped
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setNav(false); });
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) setNav(false);
    });
  }

  /* -----------------------------------------------------------------
     3. Scroll reveal
     ----------------------------------------------------------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* -----------------------------------------------------------------
     4. Gallery filtering
     ----------------------------------------------------------------- */
  var filters = document.querySelectorAll(".filter");
  var tiles = document.querySelectorAll("[data-cat]");
  if (filters.length && tiles.length) {
    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filters.forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        var cat = btn.getAttribute("data-filter");
        tiles.forEach(function (tile) {
          var show = cat === "all" || tile.getAttribute("data-cat") === cat;
          tile.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* -----------------------------------------------------------------
     5. Lightbox
     ----------------------------------------------------------------- */
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector(".lightbox__img");
    var lbCap = lightbox.querySelector(".lightbox__cap");
    var openers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
    var current = 0;
    var lastFocused = null;

    var render = function () {
      var el = openers[current];
      var img = el.querySelector("img");
      var full = el.getAttribute("data-full") || (img ? img.src : "");
      var cap = el.getAttribute("data-caption") || (img ? img.alt : "");
      lbImg.src = full;
      lbImg.alt = cap;
      lbCap.textContent = cap;
    };
    var open = function (i) {
      current = i;
      lastFocused = document.activeElement;
      render();
      lightbox.classList.add("is-open");
      document.body.classList.add("no-scroll");
      lightbox.setAttribute("aria-hidden", "false");
      var closeBtn = lightbox.querySelector(".lightbox__close");
      if (closeBtn) closeBtn.focus();
    };
    var close = function () {
      lightbox.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
      lightbox.setAttribute("aria-hidden", "true");
      if (lastFocused) lastFocused.focus();
    };
    var step = function (dir) {
      current = (current + dir + openers.length) % openers.length;
      render();
    };

    openers.forEach(function (el, i) {
      el.addEventListener("click", function (e) { e.preventDefault(); open(i); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); }
      });
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
      var btn = e.target.closest("[data-lb]");
      if (!btn) return;
      var action = btn.getAttribute("data-lb");
      if (action === "close") close();
      if (action === "prev") step(-1);
      if (action === "next") step(1);
    });

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  /* -----------------------------------------------------------------
     6. Footer year
     ----------------------------------------------------------------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();

/* Portfolio Hichem Laroussi — comportements de page.
   Aucune dépendance externe. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- année du copyright ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---- email assemblé côté client (anti-aspiration) ---- */
  var mail = document.getElementById("mail");
  if (mail) {
    var address = mail.dataset.u + "@" + mail.dataset.d;
    mail.href = "mailto:" + address;
    mail.setAttribute("aria-label", "Écrire un email à " + address);
  }

  /* ---- bordure de la barre de navigation au scroll ---- */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- révélations au scroll ---- */
  var targets = document.querySelectorAll(".reveal");
  if (!reduced && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    targets.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
      io.observe(el);
    });
  } else {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- lien de nav actif selon la section visible ---- */
  /* Seuls les liens d'ancre alimentent le sommaire actif : sur les pages
     d'article, la navigation pointe vers "../index.html#..." et "./", qui ne
     sont pas des sélecteurs valides. */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav__links a[href^="#"]')
  );
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if (sections.length) {
    /* Une seule section active à la fois : celle dont le haut est le plus
       proche du tiers supérieur du viewport sans l'avoir dépassé.
       Au sommet de la page, aucun lien n'est actif. */
    var syncSpy = function () {
      var mark = window.scrollY + window.innerHeight * 0.34;
      var current = null;

      if (window.scrollY > 40) {
        sections.forEach(function (s) {
          if (s.offsetTop <= mark) current = s;
        });
      }

      links.forEach(function (a) {
        a.classList.toggle(
          "is-active",
          current !== null && a.getAttribute("href") === "#" + current.id
        );
      });
    };

    var spyTicking = false;
    var onSpyScroll = function () {
      if (spyTicking) return;
      spyTicking = true;
      window.requestAnimationFrame(function () {
        syncSpy();
        spyTicking = false;
      });
    };

    syncSpy();
    window.addEventListener("scroll", onSpyScroll, { passive: true });
    window.addEventListener("resize", onSpyScroll, { passive: true });
  }

  /* ---- parallaxe légère du téléphone ---- */
  var phone = document.getElementById("phone");
  if (phone && !reduced && window.matchMedia("(min-width: 821px)").matches) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var shift = Math.min(window.scrollY, 420) * 0.06;
        phone.style.transform = "translateY(" + shift + "px)";
        ticking = false;
      });
    }, { passive: true });
  }
})();

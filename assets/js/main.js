/* ============================================================
   Hughes Legal — landing page interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Header shadow on scroll ---- */
  var header = document.getElementById('header');
  var onScroll = function () {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile nav ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ---- People ----
     Single source of truth. To use a real headshot, set `photo` to a path,
     e.g. photo: 'assets/img/team/gerard-hughes.jpg'. Leave null for an
     initials avatar so the page stays presentable until photos arrive. */
  var team = [
    { name: 'Gerard Hughes',   role: 'Partner', email: 'gerard@hugheslegal.com.au', photo: null },
    { name: 'David Blunt',     role: 'Partner', email: 'david@hugheslegal.com.au',  photo: null },
    { name: 'Chris Hughes',    role: 'Partner', email: 'chris@hugheslegal.com.au',  photo: null },
    { name: 'James Marchesani',role: 'Partner', email: 'james@hugheslegal.com.au',  photo: null },
    { name: 'Vince Roccisano', role: 'Solicitor', email: 'vince@hugheslegal.com.au', photo: null },
    { name: 'Luke Di Lizio',   role: 'Solicitor', email: 'luke@hugheslegal.com.au',  photo: null },
    { name: 'Jesse Manunzio',  role: 'Senior Property Conveyancer', email: 'jesse@hugheslegal.com.au', photo: null }
  ];

  var avatarColors = [
    'linear-gradient(135deg,#15b89a,#0a5f51)',
    'linear-gradient(135deg,#1f7ae0,#16407a)',
    'linear-gradient(135deg,#e8843c,#b85a1f)',
    'linear-gradient(135deg,#3aa893,#0f9a80)',
    'linear-gradient(135deg,#5b6bd6,#33408f)',
    'linear-gradient(135deg,#d4722c,#8f4516)',
    'linear-gradient(135deg,#16a085,#0a5f51)'
  ];

  var initials = function (name) {
    return name.split(' ').map(function (w) { return w.charAt(0); }).join('').slice(0, 2).toUpperCase();
  };

  var grid = document.getElementById('peopleGrid');
  if (grid) {
    team.forEach(function (p, i) {
      var card = document.createElement('article');
      card.className = 'person';

      var avatar = '<div class="person__avatar"' +
        (p.photo ? ' style="background-image:url(\'' + p.photo + '\')"' : ' style="background:' + avatarColors[i % avatarColors.length] + '"') +
        '>' + (p.photo ? '' : initials(p.name)) + '</div>';

      card.innerHTML =
        avatar +
        '<h3 class="person__name">' + p.name + '</h3>' +
        '<p class="person__role">' + p.role + '</p>' +
        '<div class="person__links">' +
          '<a href="tel:+61393754226" aria-label="Call ' + p.name + '">Call</a>' +
          '<a href="mailto:' + p.email + '" aria-label="Email ' + p.name + '">Email</a>' +
        '</div>';
      grid.appendChild(card);
    });
  }

  /* ---- Enquiry form (client-side validation + friendly success) ---- */
  var form = document.getElementById('enquiryForm');
  if (form) {
    var success = document.getElementById('formSuccess');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      ['name', 'phone', 'email', 'matter'].forEach(function (id) {
        var el = document.getElementById(id);
        var ok = el && el.value.trim() !== '' && (el.type !== 'email' || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
        el.classList.toggle('invalid', !ok);
        if (!ok && valid) { el.focus(); }
        if (!ok) valid = false;
      });
      if (!valid) return;

      /* No backend wired yet — surface success and reset.
         Hook this up to email/CRM (e.g. Formspree, or POST to your endpoint). */
      form.querySelectorAll('input, select, textarea, button').forEach(function (el) { el.disabled = true; });
      if (success) { success.hidden = false; success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    });

    form.addEventListener('input', function (e) {
      if (e.target.classList.contains('invalid')) e.target.classList.remove('invalid');
    });
  }
})();

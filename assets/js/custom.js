/* ==========================================================================
   Custom JS — adapted from vinbhaskara.github.io
   Runs after main.min.js (jQuery already available)
   ========================================================================== */

(function ($) {
  'use strict';

  (function () {
    var sw = window.screen.width;
    var zoom = sw < 768 ? null : sw < 1600 ? '0.9' : '1.0';
    if (zoom !== null) {
      document.documentElement.style.zoom = zoom;
    }
  }());

  var $bar = $('<div id="reading-progress"></div>');
  $('body').prepend($bar);

  function updateProgress() {
    var zoomValue = window.getComputedStyle(document.documentElement).getPropertyValue('zoom');
    var zoomFactor = (zoomValue && !isNaN(parseFloat(zoomValue))) ? parseFloat(zoomValue) : 1;
    var scrollTop = Math.ceil($(window).scrollTop());
    var docH = zoomFactor < 1
      ? ($(document).height() * zoomFactor) - $(window).height()
      : $(document).height() - $(window).height();

    var pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
    $bar.css('width', Math.min(pct, 100) + '%');
  }

  $(window).on('scroll.progress', updateProgress);
  updateProgress();

  $(window).on('scroll.masthead', function () {
    $('.masthead').toggleClass('scrolled', $(this).scrollTop() > 20);
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.page__content h2, .page__content h3').forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });

    document.querySelectorAll('.page__content > p').forEach(function (el, i) {
      if (i < 4) {
        el.classList.add('reveal');
        el.style.transitionDelay = (i * 65) + 'ms';
        observer.observe(el);
      }
    });

    document.querySelectorAll('#project-table > tbody > tr').forEach(function (el, i) {
      if (el.textContent.trim().length > 10) {
        el.classList.add('reveal');
        el.style.transitionDelay = Math.min(i * 55, 400) + 'ms';
        observer.observe(el);
      }
    });
  }

  $(document).on('click', '.sidebar__top a', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('html, body').stop(true).animate({ scrollTop: 0 }, 250, 'swing');
  });
}(jQuery));

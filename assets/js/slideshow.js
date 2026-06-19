(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-slideshow]').forEach(function (root) {
    var slides = Array.from(root.querySelectorAll('img'));
    if (slides.length <= 1) return;

    // dots
    var dotsWrap = document.createElement('div');
    dotsWrap.className = 'slide-dots';
    slides.forEach(function (_, i) {
      var b = document.createElement('button');
      b.className = 'slide-dot' + (i === 0 ? ' is-active' : '');
      b.type = 'button';
      b.setAttribute('aria-label', 'Image ' + (i + 1));
      b.addEventListener('click', function (e) {
        e.preventDefault();
        go(i);
        restart();
      });
      dotsWrap.appendChild(b);
    });
    root.appendChild(dotsWrap);
    var dots = Array.from(dotsWrap.children);

    var idx = 0;
    var timer = null;
    var interval = parseInt(root.dataset.interval || '4000', 10);

    function go(next) {
      if (next === idx) return;
      slides[idx].classList.remove('is-active');
      dots[idx].classList.remove('is-active');
      idx = (next + slides.length) % slides.length;
      slides[idx].classList.add('is-active');
      dots[idx].classList.add('is-active');
    }

    function tick() { go(idx + 1); }

    function start() {
      if (reduceMotion) return;
      stop();
      timer = setInterval(tick, interval);
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    function restart() { stop(); start(); }

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { start(); } else { stop(); }
      });
    }, { threshold: 0.25 });
    io.observe(root);
  });
})();

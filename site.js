// Maria Navalha · comportamento do site
(function () {
  // Barra de progresso de leitura
  var barra = document.getElementById('progresso');
  if (barra) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var total = h.scrollHeight - h.clientHeight;
      barra.style.width = (total > 0 ? (h.scrollTop / total) * 100 : 0) + '%';
    }, { passive: true });
  }
  // Revelar blocos ao rolar
  var itens = document.querySelectorAll('.surge');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visivel'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    itens.forEach(function (el) { io.observe(el); });
  } else {
    itens.forEach(function (el) { el.classList.add('visivel'); });
  }
})();

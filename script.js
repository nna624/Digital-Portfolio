(function () {
  var root = document.documentElement, key = "theme";
  try { var t = localStorage.getItem(key); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.getElementById("theme"); if (!b) return;
    b.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") === "dark", n = dark ? "light" : "dark";
      root.setAttribute("data-theme", n);
      b.setAttribute("aria-label", dark ? "Switch to dark mode" : "Switch to light mode");
      try { localStorage.setItem(key, n); } catch (e) {}
    });
  });
})();

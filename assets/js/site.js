(function () {
  var root = document.documentElement;
  var savedLang = localStorage.getItem("ainoai-lang");
  var browserLang = navigator.language && navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
  var lang = savedLang || browserLang;

  function applyLang(nextLang) {
    lang = nextLang === "en" ? "en" : "ja";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    localStorage.setItem("ainoai-lang", lang);
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLang(button.getAttribute("data-set-lang"));
    });
  });

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  applyLang(lang);
})();

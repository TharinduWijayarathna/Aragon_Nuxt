(function (a, s, y, n, c, h, i, d, e) {
  s.className += " " + y;
  h.start = 1 * new Date();
  h.end = i = function () {
    s.className = s.className.replace(RegExp(" ?" + y), "");
  };
  (a[n] = a[n] || []).hide = h;
  setTimeout(function () {
    i();
    h.end = null;
  }, c);
  h.timeout = c;
})(window, document.documentElement, "async-hide", "dataLayer", 4000, {
  "GTM-K9BGS8K": true,
});

(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);
ga("create", "UA-46172202-22", "auto", {
  allowLinker: true,
});
ga("set", "anonymizeIp", true);
ga("require", "GTM-K9BGS8K");
ga("require", "displayfeatures");
ga("require", "linker");
ga("linker:autoLink", ["2checkout.com", "avangate.com"]);
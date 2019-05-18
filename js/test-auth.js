(function logReqeust() {
  $.getJSON('/server/log' + location.pathname + (location.search || ''));
}());
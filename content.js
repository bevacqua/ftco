'use strict';

var rprotocol = /^https?:\/\//;

document.addEventListener('mousedown', clicked, false);

function clicked (e) {
  var a = e.target.closest('a');
  if (a) {
    expand(a);
  }
}

function expand (a) {
  var expanded = a.getAttribute('data-expanded-url');
  if (expanded) {
    a.href = expanded;
    return;
  }
  var title = a.getAttribute('title');
  if (rprotocol.test(title)) {
    a.href = title;
  }
}

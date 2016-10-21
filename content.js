'use strict';

const rprotocol = /^https?:\/\//;
const tweetSelector = '.tweet';
const cardLinkSelector = '.twitter-timeline-link.u-hidden:last-child';

document.addEventListener('mousedown', clicked, false);

function clicked (e) {
  expand(e.target.closest('a'));
}
function expand (a, source = a) {
  if (!a) {
    return;
  }
  const expanded = source.dataset.expandedUrl;
  if (expanded) {
    a.href = expanded;
    return;
  }
  const full = source.dataset.fullUrl;
  if (full) {
    a.href = full;
    return;
  }
  const title = source.title;
  if (rprotocol.test(title)) {
    a.href = title;
    return;
  }
  if (window.frameElement) {
    expand(a, window.frameElement.closest(tweetSelector).querySelector(cardLinkSelector));
  }
}

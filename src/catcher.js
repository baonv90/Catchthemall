import { getHighlightedContent } from './utils/utils';

document.addEventListener('DOMContentLoaded', (evt) => {
  const target = document.getElementById('target');
  // FIXME: You implementation goes below
  target.setAttribute('spellcheck', false);
  let el = document.createElement('div');
  el.id = 'overlay';
  target.parentNode.insertBefore(el, target);
  target.addEventListener('input', handleInput);
  target.addEventListener('scroll', handleScroll);
  // End of implementation
});

// Array to store the top position of the markers
let markersTop = [];

// Handle the input events
const handleInput = (evt) => {
  const textarea = evt.target;
  const overlay = document.getElementById('overlay');
  const matches = getHighlightedContent(textarea.innerText);
  overlay.innerHTML = '';
  markersTop = [];
  // handle only the inline-text node
  const node = textarea.childNodes[0];
  let range = document.createRange();

  if (matches.length) {
    matches.forEach((match) => {
      range.setStart(node, match);
      range.setEnd(node, match + 8);
      const { height, top, left, right, width } = range.getBoundingClientRect();
      
      let marker = document.createElement("div");
      marker.className = 'marker';
      marker.setAttribute('style', `width: ${width}px; height: ${height}px; top: ${top}px; left: ${left}px; right: ${right}px`);
      
      overlay.append(marker);
      markersTop.push(top);
    });
  }
}

// Handle scroll events
const handleScroll = (evt) => {
  const overlay = document.getElementById('overlay');
  const scroll = evt.target.scrollTop;
  const { top } = evt.target.getBoundingClientRect();

  (overlay.childNodes || []).forEach((child, i) => {
    const markerPos = markersTop[i];
    child.style.top = `${markerPos - scroll}px`;
    child.style.display = markerPos - scroll + 18 < top ? 'none' : 'block';
  });
}

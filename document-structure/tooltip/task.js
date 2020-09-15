let links = document.querySelectorAll('.has-tooltip');
let linksArr = Array.from(links);

function createDiv(link) {
  let div = document.createElement('div');
  div.textContent = link.title;
  div.classList.add('tooltip');

  let coords = link.getBoundingClientRect();
  div.style.left = coords.left + 'px';
  div.style.top = coords.bottom + 'px';
  div.style.display = 'block';
  link.insertAdjacentElement('afterEnd', div);
}

linksArr.forEach((item) => {
  item.onclick = function() {
    let div = document.querySelector('div.tooltip');
    if (div) {
      if (div.textContent === item.title) {
        div.remove();
      } else {
        div.remove();
        createDiv(item);
      }
    } else {
      createDiv(item);
    }
    return false;
  }

  window.onscroll = () => {document.querySelector('div.tooltip').remove()};
});

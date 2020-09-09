let links = document.querySelectorAll('.has-tooltip');
let linksArr = Array.from(links);

function hideDiv() {
  divs = document.querySelectorAll('div.tooltip');
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].style.display === 'block') {
      divs[i].style.display = 'none';
    }
  }
}

linksArr.forEach((item) => {
  let div = document.createElement('div');
  div.textContent = item.title;
  div.classList.add('tooltip');

  item.onclick = function() {
    hideDiv();
    let coords = item.getBoundingClientRect();
    div.style.left = coords.left + 'px';
    div.style.top = coords.bottom + 'px';
    div.style.display = 'block';
    item.insertAdjacentElement('afterEnd', div);
    return false;
  }

  window.onscroll = hideDiv;
});

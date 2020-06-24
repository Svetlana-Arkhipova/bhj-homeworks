const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCounter = +dead.textContent;
let lostCounter = +lost.textContent;
//let field = [];

// for (let i = 0; i <= 8; i++) {
//   field[i] = getHole(i + 1);
// }
for (let i = 1; i <= 9; i++) {
  hole = getHole(i);
  if (hole.className.includes('hole_has-mole')) {
    hole.onclick = function() {
      deadCounter += 1;
      dead.textContent = deadCounter;
    }
  } else {
    hole.onclick = function() {
      lostCounter += 1;
      lost.textContent = lostCounter;
    }
  }
  if (deadCounter === 10) {
    alert('Вы выиграли!');
  }
}


function getHole(index) {
  return document.getElementById(`hole${index}`);
}

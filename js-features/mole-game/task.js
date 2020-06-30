const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCounter = +dead.textContent;
let lostCounter = +lost.textContent;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

  //hole = getHole(1);

  hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
      deadCounter += 1;
      dead.textContent = deadCounter;
    } else {
      lostCounter += 1;
      lost.textContent = lostCounter;
    }
    if (lostCounter === 5 || deadCounter === 10) {
      if (lostCounter === 5) {alert('Вы проиграли(((');}
      if (deadCounter === 10) {alert('Вы выиграли!');}
      lostCounter = 0;
      lost.textContent = lostCounter;
      deadCounter = 0;
      dead.textContent = deadCounter;
    }
  }




// for (let i = 1; i <= 9; i++) {
//   hole = getHole(i);
//   if (hole.className.includes('hole_has-mole')) {
//     hole.onclick = function() {
//       deadCounter += 1;
//       dead.textContent = deadCounter;
//     }
//   } else {
//     hole.onclick = function() {
//       lostCounter += 1;
//       lost.textContent = lostCounter;
//     }
//   }
//   if (deadCounter === 10) {
//     alert('Вы выиграли!');
//   }
// }

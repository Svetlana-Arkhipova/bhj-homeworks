let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();
request.responseType = 'json';

request.onload = () => {
  document.getElementById('poll__title').textContent = request.response.data.title;
  let answers = request.response.data.answers;
  let pollAnswers = document.getElementById('poll__answers');
  for (let i = 0; i < answers.length; i++) {
    let button = document.createElement('button');
    button.classList.add('poll__answer');
    button.textContent = answers[i];
    pollAnswers.insertAdjacentElement('beforeEnd', button);
  }

  let buttons = document.querySelectorAll('button.poll__answer');
  let buttonsArr = Array.from(buttons);
  buttonsArr.forEach((item) => {
    item.onclick = () => {
      alert('Спасибо, ваш голос засчитан!');
    }
  });
}

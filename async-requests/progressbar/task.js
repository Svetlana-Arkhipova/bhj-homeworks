let form = document.getElementById('form');
let progressElement = document.getElementById('progress');

form.addEventListener('submit', (event) => {
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  request.upload.onprogress = (e) => {
    progressElement.value = e.loaded / e.total;
  }
  request.upload.onload = () => {alert('Загрузка успешно завершена')}
  request.send(formData);
  event.preventDefault();
});

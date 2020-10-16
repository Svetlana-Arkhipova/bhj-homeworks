function addUserId(userId) {
  let greeting = document.getElementById('welcome');
  let userGreeting = document.getElementById('user_id');
  userGreeting.textContent = userId;
  greeting.classList.add('welcome_active');
}

if (localStorage.userId != undefined) {
  addUserId(localStorage.userId);
} else {
  let signin = document.getElementById('signin');
  signin.classList.add('signin_active');
  let signinForm = document.getElementById('signin__form');

  signinForm.onsubmit = () => {
    let signinFormData = new FormData(signinForm);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.send(signinFormData);
    request.responseType = 'json';

    request.onload = () => {
      let responseObj = request.response;
      if (!responseObj.success) {
        alert('Неверный логин/пароль');
      } else {
        userId = responseObj['user_id'];
        localStorage.userId = userId;
        signin.classList.remove('signin_active');
        addUserId(userId);
      }
    }
    return false;
  }
}

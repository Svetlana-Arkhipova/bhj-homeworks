let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

let modalSuccess = document.getElementById('modal_success');
let showSuccess = document.querySelector('.show-success');
showSuccess.onclick = function() {
  modalSuccess.classList.add('modal_active');
  modalMain.classList.remove('modal_active');
}

let closeModal = document.querySelectorAll('div.modal__close');
let closeArr = Array.from(closeModal);
closeArr.forEach(function(item){
  item.onclick = function() {
    item.closest('.modal_active').classList.remove('modal_active');
  };
});

let closeBtn = document.querySelector('div.modal__close');
closeBtn.onclick = () => {
  closeBtn.closest('div.modal_active').classList.remove('modal_active');
  document.cookie = 'modal=close;expires=Mon, 02 Nov 2020 00:00:00 GMT';
  //console.log(document.cookie);
}

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift(); }
}

let modalCookie = getCookie('modal');
if (!modalCookie) {
  closeBtn.closest('div.modal').classList.add('modal_active');
}

let editor = document.getElementById('editor');
//localStorage.clear();
editor.oninput = () => {
  localStorage.editorText = editor.value;
}
if (localStorage.editorText != undefined) {
  editor.value = localStorage.editorText;
}

//editor.value = localStorage.editorText;

let editor = document.getElementById('editor');
editor.oninput = () => {
  localStorage.editorText = editor.value;
}
editor.value = localStorage.editorText;

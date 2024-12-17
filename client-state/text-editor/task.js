const editor = document.getElementById('editor');
function restoreText(key) {
  return localStorage.getItem(key);
}
editor.value = restoreText('text');

function saveText(key, str) {
  localStorage.setItem(key, str);
}

editor.addEventListener('change', () => {
  saveText('text', editor.value);
});

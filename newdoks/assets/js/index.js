var search = document.getElementById('search-input');
if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}
function inputFocus(e) {
  if (e.ctrlKey && e.key === '/' ) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' ) {
    search.blur();
    //suggestions.classList.add('d-none');
  }
}
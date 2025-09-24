const startBttn = document.getElementById('startBttn');
const start = document.getElementById('start');
const mainPage = document.getElementById('mainPage');


startBttn.addEventListener('click', () => {
  // sembunyikan start screen
  start.style.display = 'none';
  // tunjukkan main page
  mainPage.style.display = 'block';
});
function loadPage(event, page) {

  
  event.preventDefault(); // halang link pergi direct
   const overlay = document.getElementById('overlay');
  const iframe = document.getElementById('myFrame');

   if (page === 'home') {
    overlay.style.display = 'none';
    iframe.src = '';
  } else {
    overlay.style.display = 'flex'; // tunjuk overlay + iframe di tengah
    iframe.src = page;
  }

}

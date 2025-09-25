const startBttn = document.getElementById('startBttn');
const start = document.getElementById('start');
const mainPage = document.getElementById('mainPage');

const bgMusic = new Audio('lagu.mp3'); // letak file lagu.mp3 sama folder
bgMusic.loop = true;     // ulang tanpa henti
bgMusic.volume = 0.5;    // set volume tetap (0.0 – 1.0)


startBttn.addEventListener('click', () => {
  // sembunyikan start screen
  start.style.display = 'none';
  // tunjukkan main page
  mainPage.style.display = 'block';
   bgMusic.play().catch(err => console.log('Autoplay block:', err));
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

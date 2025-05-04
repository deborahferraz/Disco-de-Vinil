let musica = document.getElementById('musicaRomantica');
let vinil = document.querySelector('.vinyl');
function abrirVideo() {
    window.open("https://youtu.be/lCIaAXy-MNw?si=BC5PJXS6kkzkuTNq", "_blank");
  }
  
  function tocarMusica() {
    const musica = document.getElementById('musicaRomantica');
    musica.volume = 0.6;
    musica.play();
  }
  
function pararMusica() {
  musica.pause();
  musica.currentTime = 0; // Volta para o início da música
}

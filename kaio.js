let musica = document.getElementById('musicaRomantica');
let vinil = document.querySelector('.vinyl');
function abrirVideo() {
    window.open("https://open.spotify.com/playlist/42vKE9WKKy8coTHVYiyW5e?si=PpBVBXq2RvC8iDrUljZKaA", "_blank");
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

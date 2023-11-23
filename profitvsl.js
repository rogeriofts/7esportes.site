const urlParams = new URLSearchParams(window.location.search);
const nameCaptured = urlParams.get('nome');
const chavePixCaptured = urlParams.get('chavePix');
const pixCaptured = urlParams.get('pix');

const nome = document.getElementById("nome")
const chavePix = document.getElementById("chavePix")
const pix = document.getElementById("pix")

nome.innerText = nameCaptured
chavePix.innerText = chavePixCaptured
pix.innerText = pixCaptured

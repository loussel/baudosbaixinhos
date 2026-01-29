function comprar() {
  window.location.href = "https://ig.me/m/baudosbaixinhos_";
}

function expandirImagem(img) {
  const modal = document.getElementById("modal-imagem");
  const modalImg = document.getElementById("img-expandida");

  if (!modal || !modalImg) return;

  modal.style.display = "block";
  modalImg.src = img.src;
}

function fecharImagem() {
  const modal = document.getElementById("modal-imagem");
  if (modal) modal.style.display = "none";
}

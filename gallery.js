function openModal(img) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
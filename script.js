function openModal(image) {
    var modal = document.getElementById("minhaModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = image.src;
}

function closeModal() {
    var modal = document.getElementById("minhaModal");
    modal.style.display = "none";
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openModal(imgSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imgSrc;
  document.getElementById("navbar").style.display = "none";

  document.addEventListener("keydown", handleKeyDown);
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.getElementById("navbar").style.display = "block";

  document.removeEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
  var modalImg = document.getElementById("modalImg");
  var currentImgSrc = modalImg.src;
  var imgs = Array.from(document.querySelectorAll(".gallery-img"));
  var currentIndex = imgs.findIndex((img) => img.src === currentImgSrc);

  switch (event.key) {
    case "ArrowLeft":
      if (currentIndex > 0) {
        modalImg.src = imgs[currentIndex - 1].src;
      }
      break;
    case "ArrowRight":
      if (currentIndex < imgs.length - 1) {
        modalImg.src = imgs[currentIndex + 1].src;
      }
      break;
    case "Escape":
      closeModal();
      break;
    default:
      break;
  }
}

function handleLeftArrowClick() {
  var modalImg = document.getElementById("modalImg");
  var imgs = Array.from(document.querySelectorAll(".gallery-img"));
  var currentImgSrc = modalImg.src;
  var currentIndex = imgs.findIndex((img) => img.src === currentImgSrc);

  if (currentIndex > 0) {
    modalImg.src = imgs[currentIndex - 1].src;
  }
}

function handleRightArrowClick() {
  var modalImg = document.getElementById("modalImg");
  var imgs = Array.from(document.querySelectorAll(".gallery-img"));
  var currentImgSrc = modalImg.src;
  var currentIndex = imgs.findIndex((img) => img.src === currentImgSrc);

  if (currentIndex < imgs.length - 1) {
    modalImg.src = imgs[currentIndex + 1].src;
  }
}

document
  .getElementById("leftArrow")
  .addEventListener("click", handleLeftArrowClick);
document
  .getElementById("rightArrow")
  .addEventListener("click", handleRightArrowClick);

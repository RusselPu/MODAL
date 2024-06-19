const modalTrigger = document.querySelector(".modal-trigger");
const modalWrap = document.querySelector(".modal-wrap");
const closeModal = document.querySelector(".close-modal");

modalTrigger.addEventListener("click", () => {
  modalWrap.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modalWrap.style.display = "none";
});

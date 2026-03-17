// script.js
document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("modal-container");
  const modalForm = document.getElementById("modal-form");
  const closeButton = document.getElementById("close-button");
  const submittedMessage = document.getElementById("submitted-message");
  // Guard: only wire up if elements exist (Home page only)
  if (!modalContainer || !modalForm || !closeButton || !submittedMessage) {
    return;
  }

  // Show the modal after delay
  setTimeout(() => {
    if (modalContainer) {
      modalContainer.style.display = "flex";
    }
  }, 5000);

  // Close the modal
  closeButton.addEventListener("click", () => {
    if (modalContainer) {
      modalContainer.style.display = "none";
    }
  });

  // Handle form submission (you can add your form handling logic here)
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submittedMessage.style.display = "block";
    modalForm.reset();
  });
});

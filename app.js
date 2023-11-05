(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const sentMessage = document.getElementById("message-sent");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear input field
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";

  // Display message sent
  sentMessage.style.display = "block";

  // Hide message after few seconds
  setTimeout(() => {
    sentMessage.style.display = "none";
  }, 2500);
});

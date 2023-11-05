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
const messageTextarea = document.getElementById("message");
const sentMessage = document.getElementById("message-sent");
const invalidInput = document.querySelectorAll(".invalid");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const validateForm = () => {
  // Check if the name input is empty
  if (nameInput.value.trim() === "") {
    nameInput.focus();
    return false;
  }

  // Check if the email input is valid
  if (!isEmailValid(emailInput.value)) {
    emailInput.focus();
    return false;
  }

  // Check if the subject input is empty
  if (subjectInput.value.trim() === "") {
    subjectInput.focus();
    return false;
  }

  // Check if the message textarea is empty
  if (messageTextarea.value.trim() === "") {
    messageTextarea.focus();
    return false;
  }

  // Clear input values
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageTextarea.value = "";

  // Display message sent
  sentMessage.style.display = "block";

  // Hide message after few seconds
  setTimeout(() => {
    sentMessage.style.display = "none";
  }, 3000);

  // All fields are valid
  return true;
};

const isEmailValid = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageTextarea = document.getElementById("message");
const sentMessage = document.getElementById("message-sent");
const messageNotSent = document.getElementById("message-not-sent");

form.addEventListener("submit", (e) => {
  e.preventDefault();

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

  (function () {
    emailjs.init("RufzSpwS3-irPP-HQ");
  })();

  const params = {
    sender_name: nameInput.value,
    sender_email: emailInput.value,
    subject: subjectInput.value,
    message: messageTextarea.value,
  };

  emailjs
    .send("service_z9r2xfr", "template_fdf6v7r", params)
    .then((res) => {
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
    })
    .catch(() => {
      messageNotSent.style.display = "block";

      setTimeout(() => {
        messageNotSent.style.display = "none";
      }, 3000);
    });
});

const isEmailValid = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const form = document.getElementById("login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const message = document.querySelector(".message");

function showMessage(text, kind) {
  message.textContent = text;
  message.classList.remove("hidden", "error", "success");
  message.classList.add(kind);
}

function markInvalid(input, isInvalid) {
  input.classList.toggle("invalid", isInvalid);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const usernameOk = username.length >= 3;
  const passwordOk = password.length >= 8;
  markInvalid(usernameInput, !usernameOk);
  markInvalid(passwordInput, !passwordOk);
  if (!usernameOk || !passwordOk) {
    showMessage("Please fix the errors above.", "error");
    return;
  }
  showMessage("Logged in successfully!", "success");
  form.reset();
  markInvalid(usernameInput, false);
  markInvalid(passwordInput, false);
});

usernameInput.addEventListener("input", function() {
  if (usernameInput.value.length >= 3) {
    markInvalid(usernameInput, false);
  }
});

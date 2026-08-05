const form = document.getElementById("login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const message = document.querySelector(".message");
const submitBtn = document.getElementById("submit-btn");

const AUTH_URL = "http://localhost:3000/auth/login";

function showMessage(text, kind) {
  message.textContent = text;
  message.classList.remove("hidden", "error", "success");
  message.classList.add(kind);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  submitBtn.disabled = true;
  showMessage("Logging in...", "info");

  try {
    const response = await fetch(AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameInput.value.trim(),
        password: passwordInput.value
      })
    });

    if (!response.ok) {
      const body = await response.json();
      showMessage(`Login failed: ${body.message}`, "error");
      return;
    }

    const data = await response.json();
    showMessage(data.accessToken.slice(0, 20) + "...", "success");

  } catch (err) {
    console.error("fetch() rejected:", err);
    showMessage("Network error — could not reach the login service.", "error");
  } finally {
    submitBtn.disabled = false;
  }
});

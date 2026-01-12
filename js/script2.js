
/*====================================
FORM VALIDATION
======================================
*/

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const eyeOpen = document.getElementById("eyeOpen");
const eyeSlash = document.getElementById("eyeSlash");

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";

  eyeOpen.style.display = isHidden ? "block" : "none";
  eyeSlash.style.display = isHidden ? "none" : "block";
});

/*====================================
PASSWORD CHECK
=======================================
*/
const form = document.querySelector("form");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const errorText = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  if (newPassword.value !== confirmPassword.value) {
    e.preventDefault();
    errorText.style.display = "block";
    confirmPassword.focus();
  } else {
    errorText.style.display = "none";
  }
});

document.querySelectorAll(".toggle-password").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const input = document.getElementById(toggle.dataset.target);

    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});


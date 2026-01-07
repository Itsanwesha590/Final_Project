
/*====================================
FORM VALIDATION
======================================
*/
document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!email.value.match(emailPattern)) {
      email.classList.add("is-invalid");
      email.focus();
      return;
    } else {
      email.classList.remove("is-invalid");
    }

    
    if (password.value.length < 6) {
      password.classList.add("is-invalid");
      password.focus();
      return;
    } else {
      password.classList.remove("is-invalid");
    }

    alert("✅ Login form validated successfully!");
  });

  document.getElementById("togglePassword").addEventListener("click", function () {
    const password = document.getElementById("password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  });

  
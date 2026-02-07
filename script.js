// Login form
const loginForm = document.querySelector(".login-form");

// Password field
const passwordInput = loginForm.querySelector("input[type='password']");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if password is entered
    if (passwordInput.value !== "") {
        // blink the login form itself
        loginForm.classList.add("blink");

        // redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    }
});

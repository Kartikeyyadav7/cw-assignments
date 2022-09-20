const form = document.querySelector("form");
const togglePassword = document.querySelector("#togglePassword");
const toggleConfPassword = document.querySelector("#toggleConfPassword")
const password = document.querySelector("#password");
const userName = document.querySelector("#userName")
const confirmPassword = document.querySelector("#ConfirmPassword")
const modal = document.getElementById("signupModal");
const submitBtn = document.getElementById("submit");
const closeBtn = document.querySelector(".close");
const changingContent = document.querySelector(".dynamic")
const instructions_username = document.querySelector(".instructions_username")
const instructions_password = document.querySelector(".instructions_password")
const instructions_confirmPassword = document.querySelector(".instructions_confirmPassword")
const instructions_email = document.querySelector(".instructions_email")
const emailInput = document.querySelector("#email")

const checkUserName = (username) => {
    if (username.value.length > 25 || username.value.length < 3) {
        return false;
    } else {
        return true
    }
}

const checkConfirmPassword = (password, confirmPassword) => {
    if (password.value === confirmPassword.value) {
        return true;
    } else {
        return false;
    }
}

const checkPassword = (password) => {
    if (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) != null) {
        return true
    } else {
        return false
    }
}

userName.addEventListener("input", () => {
    console.log("hellos")
    if (userName.value.length < 25 || userName.value.length > 3) {
        instructions_username.style.display = "none"
    }
})


emailInput.addEventListener("input", () => {
    if (userName.value.length > 25 || userName.value.length < 3) {
        instructions_username.style.display = "block"
    }
})

password.addEventListener("input", () => {
    if (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) != null) {
        instructions_password.style.display = "none"
    } else {
        console.log("out")
    }
})


confirmPassword.addEventListener("input", () => {
    if (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) == null) {
        instructions_password.style.display = "block"
    } else {
        console.log("out")
    }
})



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkUserName(userName) === false) {
        instructions_username.style.display = "block"
        return
    } else if (checkConfirmPassword(password, confirmPassword) === false) {
        instructions_confirmPassword.style.display = "block"
        return
    } else if (checkPassword(password) === false) {
        instructions_password.style.display = "block"
        return
    } else if (emailInput.value.length == 0) {
        instructions_email.style.display = "block"
        return
    }
    else if (checkUserName(userName) && checkConfirmPassword(password, confirmPassword)) {
        modal.style.display = "block";
        changingContent.innerHTML = "You are signedIn"
        form.reset()
    }
    else {
        modal.style.display = "block";
        changingContent.innerHTML = "Invalid username or password"
    }
});

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("fa-eye");
});

toggleConfPassword.addEventListener("click", function () {
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);
    this.classList.toggle("fa-eye");
});


closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
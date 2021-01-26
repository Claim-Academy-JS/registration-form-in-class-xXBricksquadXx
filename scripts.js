const toggleBtn = document.querySelector("#toggle-Btn");
const submitBtn = document.querySelector('button[type="submit"]');
const toggledInputs = document.querySelectorAll("input:not(#uname, #pass)");

for (let i = 0; i < toggledInputs.length; i += 1) {
  toggledInputs[i].classList.add("is-hidden");
}

toggleBtn.addEventListener("click", function () {
  if (this.innerText === "Already have an account") {
    this.innerText = "Need to create an account?";
    submitBtn.innerText = "Login!";
  } else {
    this.innerText = "Already have an account?";
    submitBtn.innerText = "Register!";
  }
});

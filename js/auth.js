const statusText = document.getElementById("status");
const otpBox = document.querySelector(".otp");

function sendOTP() {
  statusText.innerText = "OTP sent (demo mode)";
  otpBox.classList.remove("hidden");
}

function verifyOTP() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "app.html";
}

import { app } from "./firebase.js";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const auth = getAuth(app);

const statusText = document.getElementById("status");
const otpBox = document.querySelector(".otp");

// Setup invisible reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(
  "recaptcha-container",
  { size: "invisible" },
  auth
);

window.sendOTP = function () {
  const phoneNumber = document.getElementById("phone").value;

  if (!phoneNumber.startsWith("+91")) {
    statusText.innerText = "Use format: +91XXXXXXXXXX";
    return;
  }

  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      statusText.innerText = "OTP sent to your phone";
      otpBox.classList.remove("hidden");
    })
    .catch((error) => {
      statusText.innerText = error.message;
    });
};

window.verifyOTP = function () {
  const code = document.getElementById("otp").value;

  window.confirmationResult.confirm(code)
    .then(() => {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "app.html";
    })
    .catch(() => {
      statusText.innerText = "Invalid OTP";
    });
};

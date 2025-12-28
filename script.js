const form = document.getElementById("umbForm");
const response = document.getElementById("response");

/* PASTE YOUR GOOGLE APPS SCRIPT /exec URL HERE */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqGRlrBfnvFan7YOZLy7537p-bz9TFg6W9CH2phh3Pm4nH0WSU6OEzdi50z8HEnCa3/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    email: document.getElementById("email").value.trim(),
    support: document.getElementById("support").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  response.style.color = "#333";
  response.textContent = "Submitting your message...";

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "no-cors"
  })
  .then(() => {
    response.style.color = "green";
    response.innerHTML = `
      Thank you for speaking out 🤍<br><br>
      <strong>Team UMB dey for you.</strong><br>
      Kindly remember to vote <b>Umar Mariam Boresa</b> as SRC President —
      the leader students can trust 💙
    `;
    form.reset();
  })
  .catch(() => {
    response.style.color = "red";
    response.textContent = "Submission failed. Please try again.";
  });
});
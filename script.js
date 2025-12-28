const form = document.getElementById("supportForm");
const responseMessage = document.getElementById("responseMessage");

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqGRlrBfnvFan7YOZLy7537p-bz9TFg6W9CH2phh3Pm4nH0WSU6OEzdi50z8HEnCa3/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email: document.getElementById("email").value.trim(),
    support: document.getElementById("support").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  responseMessage.style.color = "#333";
  responseMessage.textContent = "Submitting your message...";

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const result = await res.json();

    if (result.status === "duplicate") {
      responseMessage.style.color = "red";
      responseMessage.textContent =
        "This email has already submitted a response.";
    } else {
      responseMessage.style.color = "green";
      responseMessage.innerHTML = `
        Thank you for speaking out 🤍<br><br>
        <strong>Team UMB dey for you.</strong><br>
        Kindly remember to vote <b>Umar Mariam Boresa</b> as SRC President —
        the leader students can trust 💙
      `;
      form.reset();
    }

  } catch (err) {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Network error. Please try again.";
  }
});
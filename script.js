// 1. Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else {
    alert(`Thanks ${name}, your message has been sent!`);
    this.reset();
  }
});

// 2. Button color change on click
const sendBtn = document.querySelector("button");

sendBtn.addEventListener("click", function () {
  sendBtn.style.backgroundColor = "#28a745"; // green
  sendBtn.textContent = "Sent!";
  setTimeout(() => {
    sendBtn.style.backgroundColor = "#007BFF";
    sendBtn.textContent = "Send Message";
  }, 2000);
});

// 3. Hover effect on project boxes
const projects = document.querySelectorAll(".project-item");

projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.style.backgroundColor = "#d0e7ff";
  });
  project.addEventListener("mouseleave", () => {
    project.style.backgroundColor = "#e6f0ff";
  });
});

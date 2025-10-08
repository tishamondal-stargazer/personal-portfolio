document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();
  const response = document.getElementById('responseMessage');

  // Basic validation
  if (!name || !email || !message) {
    response.textContent = "Please fill out all fields.";
    response.style.color = "red";
    return;
  }

  // Simulate loading
  response.textContent = "Sending your message...";
  response.style.color = "blue";

  // Simulate form submission
  setTimeout(() => {
    window.location.href = 'thankyou.html';
  }, 1500);
});
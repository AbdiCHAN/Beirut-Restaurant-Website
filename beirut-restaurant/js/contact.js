// Contact form handling
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name && email && subject && message){
    // Here you could integrate with backend API
    formMessage.style.color = "green";
    formMessage.textContent = `Thank you ${name}, your message has been sent!`;
    
    // Reset form
    contactForm.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
  }
});

// Reservation Form Handling
const reservationForm = document.getElementById("reservationForm");
const reservationMessage = document.getElementById("reservationMessage");

reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  if(name && email && phone && date && time && guests){
    // Simulate API call for reservation
    reservationMessage.style.color = "green";
    reservationMessage.textContent = `Thank you ${name}! Your table for ${guests} guests on ${date} at ${time} has been reserved.`;
    
    reservationForm.reset();
  } else {
    reservationMessage.style.color = "red";
    reservationMessage.textContent = "Please fill in all fields correctly.";
  }
});

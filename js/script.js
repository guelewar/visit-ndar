document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("responseMessage").textContent = "Merci, " + name + " ! Votre message a été envoyé.";
    document.getElementById("responseMessage").style.color = "green";
    // Réinitialiser le formulaire
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("responseMessage").textContent = "Veuillez remplir tous les champs.";
    document.getElementById("responseMessage").style.color = "red";
  }
});

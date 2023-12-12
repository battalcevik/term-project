// app.js

// Create a Function for Get In Touch Form validation
function validateForm() {
  // Validate firstName and lastName
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;

  if (!isValidName(firstName) || !isValidName(lastName)) {
      alert('Please enter a valid name with a minimum length of two characters and only alpha characters. (A-Z and a-z)');
      return false;
  }

  // Validate facilitator
  var facilitator = document.getElementById('facilitator').value;
  var validFacilitators = ["Jen", "Behdad", "Chris", "Christian", "Josh"];

  if (!validFacilitators.includes(facilitator)) {
      alert('Please enter a valid facilitator name as showed! "Jen", "Behdad", "Chris", "Christian", "Josh"');
      return false;
  }

  return true;
}

function isValidName(name) {
  return /^[A-Za-z]{2,}$/.test(name);
}

// Create a Function for subscription form validation
function validateSubscriptionForm() {
  // Validate first name and last name
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;

  if (!isValidName(firstName) || !isValidName(lastName)) {
      alert('Please enter a valid name with a minimum length of two characters and only alpha characters.');
      return false;
  }

  // Validate email
  var email = document.getElementById('email').value;
  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  return true;
}

// Validate email pattern
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

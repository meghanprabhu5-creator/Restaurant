// ============================================================
//  script.js — Spice Garden Restaurant JavaScript
// ============================================================


// ============================================================
// 1. LOGIN FUNCTION
//    Called when the login form is submitted on login.html
// ============================================================
function handleLogin(event) {
  event.preventDefault(); // Stop the form from refreshing the page

  // Get the values typed by the user
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple check: correct username and password
  if (username === 'admin' && password === '1234') {
    // If correct, save login status and go to home page
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    // If wrong, show error message
    document.getElementById('errorMsg').style.display = 'block';
  }
}


// ============================================================
// 2. CONTACT FORM FUNCTION
//    Called when the contact form is submitted on contact.html
// ============================================================
function handleContact(event) {
  event.preventDefault(); // Stop form from refreshing

  // Show success message
  const successBox = document.getElementById('contactSuccess');
  successBox.classList.remove('d-none');

  // Hide the success message after 4 seconds
  setTimeout(() => {
    successBox.classList.add('d-none');
  }, 4000);
}


// ============================================================
// 3. PROFILE SAVE FUNCTION
//    Called when "Save Changes" is clicked on profile.html
// ============================================================
function saveProfile() {
  // Show success message
  const successBox = document.getElementById('profileSuccess');
  successBox.classList.remove('d-none');

  // Hide the success message after 3 seconds
  setTimeout(() => {
    successBox.classList.add('d-none');
  }, 3000);
}

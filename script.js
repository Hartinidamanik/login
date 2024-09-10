const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Basic validation
  if (usernameInput.value === '' || passwordInput.value === '') {
    errorMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // You can add more complex validation here, e.g., checking password strength

  // Simulate successful login (replace with actual login logic)
  if (usernameInput.value === 'user' && passwordInput.value === 'password') {
    errorMessage.textContent = 'Login successful!';
    // Redirect to the desired page
    window.location.href = 'dashboard.html';
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }
});

const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (usernameInput.value === '' || passwordInput.value === '') {
    errorMessage.textContent = 'Please fill in all fields.';
    return;
  }

  if (usernameInput.value === 'user' && passwordInput.value === 'password') {
    errorMessage.textContent = 'Login successful!';
    window.location.href = 'dashboard.html';
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }
});

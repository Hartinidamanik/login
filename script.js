function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const statusMessage = document.getElementById('statusMessage');

  if (name === '' || email === '' || message === '') {
    statusMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Basic email validation (you can add more complex validation)
  if (!isValidEmail(email)) {
    statusMessage.textContent = 'Invalid email address.';
    return;
  }

  const mailtoLink = `mailto:hartinidamanik12@gmail.com?subject=Form Submission&body=Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Use a library like formspree for more robust email sending
  // formspree.submit('your_form_id', {
  //   name: name,
  //   email: email,
  //   message: message
  // })
  // .then(response => {
  //   statusMessage.textContent = 'Email sent successfully!';
  // })
  // .catch(error => {
  //   statusMessage.textContent = 'Error sending email.';
  // });

  // For a basic implementation without a library:
  window.location.href = mailtoLink;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

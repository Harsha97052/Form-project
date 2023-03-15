const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === '' || password.value === '') {
    alert('Please enter a username and password');
  } else {
    // Send form data to server for validation
  }
});

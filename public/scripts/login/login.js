document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('loginError');
 
    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }
 
    // AJAX request to login
    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard'; // Redirect on success
        } else {
            errorMessage.textContent = data.message;
            errorMessage.style.display = 'block';
        }
    })
    .catch(error => {
        errorMessage.textContent = 'An error occurred. Please try again.';
        errorMessage.style.display = 'block';
    });
 });
 
 document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
 
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const registerErrorMessage = document.getElementById('registerError');
 
    // Simple validation
    if (newUsername === '' || newPassword === '') {
        registerErrorMessage.textContent = 'Please fill in all fields.';
        registerErrorMessage.style.display = 'block';
        return;
    }
 
    // AJAX request to register
    fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/login'; // Redirect on success
        } else {
            registerErrorMessage.textContent = data.message;
            registerErrorMessage.style.display = 'block';
        }
    })
    .catch(error => {
        registerErrorMessage.textContent = 'An error occurred. Please try again.';
        registerErrorMessage.style.display = 'block';
    });
 });
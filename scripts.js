document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const token = document.getElementById('token').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'ganzostudio' && password === 'WahyuGanzo' && token === '12345678') {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';
        window.location.href = 'Beranda/beranda.html';
    } else {
        errorMessage.textContent = 'Invalid username, password, or token.';
    }
});

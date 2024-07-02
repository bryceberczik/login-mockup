//  logging each login info into the console in its own array
let loginInfo = [];

console.log('Console log loginInfo for the array of login information.');
console.log('See the local storage tab in the developer tools to see the login information stored in the browser.');
document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    loginInfo.push({username: username, password: password});

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));

    console.log(`New login detected`);
});

document.getElementById('forgot-password').addEventListener('click', function() {
    alert('Forgot Password clicked. Implement the functionality as needed.');
});

document.getElementById('sign-up').addEventListener('click', function() {
    alert('Sign Up clicked. Implement the functionality as needed.');
});


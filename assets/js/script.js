let loginInfo = [];

document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    loginInfo.push({username: username, password: password});

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    console.log(`New login: Username: ${username}, Password: ${password}`);

})


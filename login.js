console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});


function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const message = document.getElementById('signupMessage');

    if (name === '' || email === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
        return;
    }

    if (localStorage.getItem(email)) {
        message.textContent = 'Email already exists.';
        message.style.color = 'red';
    } else {
        const user = { name, password };
        localStorage.setItem(email, JSON.stringify(user));
        message.textContent = 'Signup successful!';
        message.style.color = 'green';
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    if (email === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
        return;
    }

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
            window.location.href = 'index.html';    
        } else {
            message.textContent = 'Invalid password.';
            message.style.color = 'red';
        }
    } else {
        message.textContent = 'User does not exist.';
        message.style.color = 'red';
    }
}

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.getElementById('loginForm');
const dashboard = document.getElementById('dashboard');
const secretAudio = document.getElementById('secretAudio');

let audioPlayed = false;

// Sliding Transition logic (From Video Animation)
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Hardcoded Authentication Setup
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUsername').value;
    const pass = document.getElementById('loginPassword').value;

    if (user === 'admin' && pass === '999') {
        wrapper.style.display = 'none';
        dashboard.style.display = 'flex';
    } else {
        alert('Invalid Username or Password! (Use admin & 999)');
    }
});

// Screen tap voice audio trigger
window.addEventListener('click', () => {
    if (dashboard.style.display === 'flex' && !audioPlayed) {
        secretAudio.play().then(() => {
            audioPlayed = true;
        }).catch(err => {
            console.log("Autoplay waiting for direct user interaction:", err);
        });
    }
});

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.getElementById('loginForm');
const dashboard = document.getElementById('dashboard');
const backBtn = document.getElementById('backBtn');
const secretAudio = document.getElementById('secretAudio');

let audioPlayed = false;

// Sliding Transitions (Matching Video)
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
});

// Admin Authentication (admin & 999)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUsername').value;
    const pass = document.getElementById('loginPassword').value;

    if (user === 'admin' && pass === '999') {
        wrapper.style.display = 'none';
        dashboard.style.display = 'flex';
        startMatrix();
    } else {
        alert('Invalid Credentials! (Username: admin | Password: 999)');
    }
});

// Back Button Action
backBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dashboard.style.display = 'none';
    wrapper.style.display = 'block';
    secretAudio.pause();
    secretAudio.currentTime = 0;
    audioPlayed = false;
});

// Voice Trigger Action
dashboard.addEventListener('click', () => {
    if (!audioPlayed) {
        secretAudio.play().then(() => {
            audioPlayed = true;
        }).catch(err => {
            console.log("Audio waiting for interaction:", err);
        });
    }
});

// Terminal Matrix Hacker Rain Effect
function startMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

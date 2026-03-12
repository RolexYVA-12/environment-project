// --- SCROLL FUNCTION ---
function scrollToAction() {
    document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
}

// --- DAILY ECO TIPS (The 'Human' Touch) ---
const tips = [
    "Switching to cold water for laundry saves 90% of the energy used by a washing machine.",
    "Parsippany has great local parks—join a cleanup to help protect our local runoff!",
    "Unplugging your Chromebook charger when not in use stops 'vampire' energy drain.",
    "Over 8 million tons of plastic enter the ocean every year. Every bottle counts!"
];

function showRandomTip() {
    const tipElement = document.getElementById('eco-tip');
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipElement.innerText = "Did you know? " + tips[randomIndex];
}

// --- ANIMATED COUNTER ---
function animateCounter(id, target) {
    let count = 0;
    const speed = 200; // The lower the slower
    const increment = target / speed;

    const updateCount = () => {
        const targetNum = +target;
        count += increment;

        if (count < targetNum) {
            document.getElementById(id).innerText = Math.ceil(count).toLocaleString();
            setTimeout(updateCount, 10);
        } else {
            document.getElementById(id).innerText = targetNum.toLocaleString();
        }
    };
    updateCount();
}

// --- RUN EVERYTHING ON LOAD ---
window.onload = () => {
    showRandomTip();
    animateCounter('plastic-count', 8000000);
    
    // Form Alert
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thanks for signing up! Check your school email for the first EcoPulse newsletter.");
        form.reset();
    });
};
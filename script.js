function updateClock() {
    const selectedTimezone = document.getElementById('timezone-select').value;
    const now = moment().tz(selectedTimezone);
    
    const hours = now.format('hh');
    const minutes = now.format('mm');
    const seconds = now.format('ss');
    const ampm = now.format('A');
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    document.getElementById('clock').textContent = timeString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// Add event listener to update clock when timezone is changed
document.getElementById('timezone-select').addEventListener('change', updateClock);

// Fireworks animation
function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    firework.appendChild(explosion);
    document.querySelector('.fireworks').appendChild(firework);
    
    setTimeout(() => {
        firework.remove();
    }, 1000);
}

// Create fireworks periodically
setInterval(createFirework, 300);

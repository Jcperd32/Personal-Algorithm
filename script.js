function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ''; 
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            document.getElementById('continue-btn').style.display = 'inline-block';
        }
    }
    type();
}

window.onload = function() {
    const riddleText = "Your riddle goes here... Each letter will appear one by one.";
    typeWriter(riddleText, 'riddle-text', 60); 
}

function continueToNext() {
    document.getElementById('welcome-section').classList.remove('active');
}

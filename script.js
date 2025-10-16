function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ''; 
    
    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(type, speed);
        } else {
            document.getElementById('continue-btn').style.display = 'inline-block';
        }
    }
    type();
}

window.onload = function() {
    const riddleText = `Welcome to this project. This is a test style page, but don't worry you don't have to study. It is more about how you are feeling.
    

        It might seem a bit conceited on my part for thinking anything I write is worth reading, but I wasn't sure how to get any feedback honestly, and I was unsure if I was going to share this anyway. But here it is.
        
        
        Enter your name, just your first name. Whether I know you or not is fine, and make sure to leave some feedback at the end.
        
        
        Hopefully this riddle keeps you thinking for the rest of the time you are here:
        
        
        I'm a cache with no processor,
        
        A library with no shelves.
        
        I'm recalled but not forgotten,
        
        And fragmented over time.
        
        What am I?`;
    typeWriter(riddleText, 'riddle-text', 60); 
}

function continueToNext() {
    document.getElementById('welcome-section').classList.remove('active');
}

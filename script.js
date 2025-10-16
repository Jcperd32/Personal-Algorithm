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
    const riddleText = `Welcome...
        You've found a quiet corner of the digital ether, a place where feelings linger like dust in sunlight.

        This isn't a test of knowledge, but of presence. A momentary pause in the endless scroll.
        
        Share your name, if you will. Just the first one, the one that feels most like home.
        
        And perhaps this small riddle will accompany you:
        
        I have no weight, yet burden souls.
        I have no voice, yet speak volumes.
        I can be locked away, but never contained.
        I'm measured in moments, but last a lifetime.
        What am I?`;
    typeWriter(riddleText, 'riddle-text', 60); 
}

function continueToNext() {
    document.getElementById('welcome-section').classList.remove('active');
    document.getElementById('name-section').classList.add('active');
}

const friendsDatabase = {
    "erick": "No esperaba que lo uses la verdad jaja",
    "karla": "It's giving pregnant",
    "kayra": "I owe you guys a drink, don't let me forget",
    "brayan": "Idk if I wanted family to use it but welcome to it",
    "kevin": "Idk if I wanted family to use it but welcome to it",
    "anthony": "Idk if I wanted family to use it but welcome to it",
    "jenny": "Idk if I wanted family to use it but welcome to it",
    "paola": "Idk if I wanted family to use it but welcome to it",
    "katherine": "Idk if I wanted family to use it but welcome to it",
    "david": "Idk if I wanted family to use it but welcome to it",
    "danny": "What are you doing here? We haven't spoken since highschool, we should catch up",
    "omar": "Need that recipe for the green sauce",
    "christina": "You didn't seem like the type to read much lol jk",
    "andrew": `Hi...

    I wasn't expecting you. If you're here, then that means...
    
    I've truly lost it, haven't I? Strange, I don't know what to say. It's unlikely you'd find this place, yet somehow... you always found your way through the cracks in my mind.
    
    I carry the weight of what I couldn't do. What I should have done. You deserved so much more than what the world gave you. I was furious – at them, at myself, at my cowardice.
    
    You've read deeper into these shadows than most. Maybe you'd understand the architecture of this grief.
    
    I'm sorry. For everything left unsaid.`
    };

function checkEnter(event) {
    if (event.key === 'Enter') {
        checkName();
    }
}

function checkName() {
    const nameInput = document.getElementById('name-input').value.toLowerCase().trim();
    const messageDiv = document.getElementById('personal-message');
    
    const existingBtn = messageDiv.querySelector('button');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    if (nameInput === 'andrew') {
        if (!document.getElementById('crack')) {
            const crackDiv = document.createElement('div');
            crackDiv.className = 'crack-overlay';
            crackDiv.id = 'crack';
            document.body.appendChild(crackDiv);
        }
        
        document.getElementById('crack').style.display = 'block';
        document.body.classList.add('screen-break');
        
        messageDiv.innerHTML = ''; 
        messageDiv.classList.add('show');
        
        const andrewMessage = `Hi...

            I wasn't expecting you. If you're here, then that means...
            
            I've truly lost it, haven't I? Strange, I don't know what to say. It's unlikely you'd find this place, yet somehow... you always found your way through the cracks in my mind.
            
            I carry the weight of what I couldn't do. What I should have done. You deserved so much more than what the world gave you. I was furious – at them, at myself, at my cowardice.
            
            You've read deeper into these shadows than most. Maybe you'd understand the architecture of this grief.
            
            I'm sorry. For everything left unsaid.`;
        
        typeWriterWithContinue(andrewMessage, 'personal-message', 80, () => {
            const continueBtn = document.createElement('button');
            continueBtn.textContent = 'Continue to Questions';
            continueBtn.style.marginTop = '20px';
            continueBtn.style.padding = '10px 20px';
            continueBtn.style.background = '#8D4E24';
            continueBtn.style.color = '#F5E6D3';
            continueBtn.style.border = 'none';
            continueBtn.style.borderRadius = '5px';
            continueBtn.style.cursor = 'pointer';
            continueBtn.onclick = function() {
                document.getElementById('name-section').classList.remove('active');
                document.getElementById('question-section').classList.add('active');
                showQuestion();
            };
            messageDiv.appendChild(continueBtn);
        });
        
    } else if (friendsDatabase[nameInput]) {
        messageDiv.textContent = friendsDatabase[nameInput];
        messageDiv.classList.add('show');
        
        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue to Questions';
        continueBtn.style.marginTop = '20px';
        continueBtn.style.padding = '10px 20px';
        continueBtn.style.background = '#8D4E24';
        continueBtn.style.color = '#F5E6D3';
        continueBtn.style.border = 'none';
        continueBtn.style.borderRadius = '5px';
        continueBtn.style.cursor = 'pointer';
        continueBtn.onclick = function() {
            document.getElementById('name-section').classList.remove('active');
            document.getElementById('question-section').classList.add('active');
            showQuestion();
        };
        messageDiv.appendChild(continueBtn);
        
    } else {
        messageDiv.textContent = "Umm... seems I don't have you here yet, which means I either didn't get to you yet, or we haven't made any memories yet. But come along, everyone is welcome here.";
        messageDiv.classList.add('show');
        
        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue to Questions';
        continueBtn.style.marginTop = '20px';
        continueBtn.style.padding = '10px 20px';
        continueBtn.style.background = '#8D4E24';
        continueBtn.style.color = '#F5E6D3';
        continueBtn.style.border = 'none';
        continueBtn.style.borderRadius = '5px';
        continueBtn.style.cursor = 'pointer';
        continueBtn.onclick = function() {
            document.getElementById('name-section').classList.remove('active');
            document.getElementById('question-section').classList.add('active');
            showQuestion();
        };
        messageDiv.appendChild(continueBtn);
    }
}

function typeWriterWithContinue(text, elementId, speed = 50, onComplete) {
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
            if (onComplete) onComplete();
        }
    }
    type();
}

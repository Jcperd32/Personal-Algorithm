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

const questions = [
    {
        question: "When you wake tomorrow, what kind of silence will greet you?",
        subtext: "The one that feels like peace, or the one that feels like waiting?",
        leftLabel: "Heavy quiet",
        rightLabel: "Gentle stillness"
    },
    {
        question: "How many versions of yourself do you carry in your pockets?",
        subtext: "The person for work, for family, for strangers—do they feel like costumes or layers of the same skin?",
        leftLabel: "Many masks",
        rightLabel: "One face"
    },
    {
        question: "When was the last time a memory surprised you by how much it still hurt?",
        subtext: "Not the big tragedies, but the small moments that shouldn't matter anymore",
        leftLabel: "Recently",
        rightLabel: "Long ago"
    },
    {
        question: "How much of your kindness comes from genuine warmth versus learned obligation?",
        subtext: "The difference between giving because you want to, and giving because you should",
        leftLabel: "Mostly duty",
        rightLabel: "Mostly heart"
    },
    {
        question: "What percentage of your thoughts feel truly yours versus borrowed from others?",
        subtext: "The opinions you adopted, the fears you inherited, the dreams someone else planted",
        leftLabel: "Mostly borrowed",
        rightLabel: "Mostly mine"
    },
    {
        question: "How often do you find yourself performing happiness for an audience?",
        subtext: "The smile that's more about their comfort than your actual feeling",
        leftLabel: "Often",
        rightLabel: "Rarely"
    },
    {
        question: "When you're completely alone, what person emerges that others rarely see?",
        subtext: "The unedited version without witnesses",
        leftLabel: "Stranger to me",
        rightLabel: "My true self"
    },
    {
        question: "How many conversations do you have with people who aren't there anymore?",
        subtext: "The arguments you replay, the things you wish you'd said",
        leftLabel: "Many ghosts",
        rightLabel: "Present moments"
    },
    {
        question: "What's the ratio between the love you give and the love you allow yourself to receive?",
        subtext: "The imbalance we rarely admit to ourselves",
        leftLabel: "Give more",
        rightLabel: "In balance"
    },
    {
        question: "When you look at your life from a distance, what pattern emerges that you can't see up close?",
        subtext: "The recurring theme you keep walking in circles around",
        leftLabel: "Lost in details",
        rightLabel: "Clear pattern"
    }
];


let currentQuestion = 0;
let userScores = [];

function showQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById('current-question').innerHTML = `
            <div class="main-question">${q.question}</div>
            <div class="subtext">${q.subtext}</div>
        `;
        document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        
        document.getElementById('left-label').textContent = q.leftLabel;
        document.getElementById('right-label').textContent = q.rightLabel;
        
        document.querySelectorAll('.scale-btn').forEach(btn => {
            btn.style.background = '#F5E6D3';
            btn.style.color = '#3E2723';
        });
    } else {
        showResults();
    }
}

function selectAnswer(score) {
    userScores[currentQuestion] = score;

    document.querySelectorAll('.scale-btn').forEach(btn => {
        btn.style.background = '#F5E6D3';
        btn.style.color = '#3E2723';
    });
    

    event.target.style.background = '#8D4E24';
    event.target.style.color = '#F5E6D3';
    
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 800);
}

function showResults() {
    const totalScore = userScores.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    
    let message = "";https://github.com/Jcperd32/Personal-Algorithm/tree/main
    if (percentage >= 80) {
        message = "Your quiet seems to be your own, your faces familiar in the mirror. The patterns you see are ones you chose to draw.";
    } else if (percentage >= 60) {
        message = "Some silences are heavier than others, some masks still wait in pockets. But more often than not, you recognize the hand in the mirror.";
    } else if (percentage >= 40) {
        message = "The ghosts speak loudly sometimes, the performances feel necessary. But between the borrowed thoughts, your own voice still finds its way through.";
    } else {
        message = "The weight of other people's expectations, the echoes of old conversations—they leave little room for anything else. But even heavy quiet eventually breaks for morning.";
    }
    
    document.getElementById('question-section').innerHTML = `
        <div class="question-box">
            <h2>The Reflection Complete</h2>
            <div class="intro-text">${message}</div>
            <div class="progress">Final score: ${totalScore} out of ${maxScore}</div>
            <p style="margin-top: 30px; font-style: italic; color: #5D4037;">
                Thank you for trusting me with these quiet answers.
            </p>
        </div>
    `;
}

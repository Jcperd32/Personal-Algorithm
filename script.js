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
    
    let message = "";
    let storyKey = "";
    
    // 8 different ranges covering 10-50 points
    if (totalScore >= 45) {
        message = "Your quiet seems to be your own, your faces familiar in the mirror. The patterns you see are ones you chose to draw.";
        storyKey = "content_45_50";
    } else if (totalScore >= 40) {
        message = "Most silences are comfortable, most masks feel like choices rather than necessities. You recognize yourself in the reflection.";
        storyKey = "content_40_44";
    } else if (totalScore >= 35) {
        message = "Some silences are heavier than others, some masks still wait in pockets. But more often than not, you recognize the hand in the mirror.";
        storyKey = "content_35_39";
    } else if (totalScore >= 30) {
        message = "The performances happen less often, the borrowed thoughts feel more like temporary guests than permanent residents.";
        storyKey = "content_30_34";
    } else if (totalScore >= 25) {
        message = "The ghosts speak loudly sometimes, the performances feel necessary. But between the borrowed thoughts, your own voice still finds its way through.";
        storyKey = "content_25_29";
    } else if (totalScore >= 20) {
        message = "The weight of expectations feels heavy, the echoes of old conversations fill much of the space. But there are moments of clear air.";
        storyKey = "content_20_24";
    } else if (totalScore >= 15) {
        message = "The masks feel permanent, the silences overwhelming. The patterns seem drawn by hands you don't recognize.";
        storyKey = "content_15_19";
    } else {
        message = "The weight of other people's expectations, the echoes of old conversations—they leave little room for anything else. But even heavy quiet eventually breaks for morning.";
        storyKey = "content_10_14";
    }
    
    document.getElementById('question-section').innerHTML = `
        <div class="question-box">
            <h2>The Reflection Complete</h2>
            <div class="intro-text">${message}</div>
            <div class="progress">Your score: ${totalScore} out of 50</div>
            <button id="view-story-btn" onclick="showStory('${storyKey}')" 
                    style="margin-top: 30px; padding: 12px 30px; background: #8D4E24; color: #F5E6D3; border: none; border-radius: 5px; cursor: pointer;">
                Continue to Your Story
            </button>
        </div>
    `;
}

function showStory(storyKey) {
    const stories = {
        "content_10_14": {
            story: `<h3 style="text-align: center; color: #5D4037; margin-bottom: 30px;">What Was Left in the Fridge</h3>
                
                <p>There was a time when his world was warm. When the smell of warm food met him at the door, and his mother would be there, tired from work but always with a smile. They drank hot chocolate with too many marshmallows, the steam fogging up the cold windowpanes. She taught him to play chess on a board with two missing pawns they replaced with bottle caps. At night, they read together. They traveled to places they knew were not real, to planets with little princes and forests where wild things rumpused, and they did not care. They dreamed of seeing the ocean and of building a house with a sliding ladder in the library. They had a list of these dreams taped to the fridge.</p>
                
                <p>Her voice was the soundtrack to it all. And then, one day, it was the only part he had left.</p>
                
                <p>She was working late, as always. The voicemail she left that afternoon was still on his phone.</p>
                
                <p>"Hey, my love. Just got to work, gonna be a bit late tonight. Left you some pasta in the fridge, just warm it up. Do not forget your project is due tomorrow! We have that new chapter to read tonight, I am excited. I love you. Have a good day."</p>
                
                <p>She never came home. A hit and run, the police said. They never found who did it.</p>
                
                <p>At her funeral, a few distant relatives shuffled in. They did not look at him. They looked at her few things, her small television, her simple jewelry, and found nothing of value. No one offered him a home. The only person who stood with him was Leo, a quiet boy from his class who did not say a word, just stood there until it was over.</p>
                
                <p>The small checks from the father who had left them for another family stopped coming. He was evicted from their apartment. He finished high school living on couches, in temporary rooms, his life packed into a single backpack. Leo's family would sometimes feed him. He was always hungry, but the hunger in his chest was louder than the one in his stomach. The only thing that filled it was the sound of her voice. He listened to the message every night. He saved it on an old hard drive. It was the most important thing he owned.</p>
                
                <p>In a final, desperate act, he tried to find out what happened to her. He called the police station, looked at old news reports. He found nothing. He was just a kid chasing a ghost.</p>
                
                <p>One evening, walking home from the library, thinking of her, of the cold case file, he stepped off the curb without looking. It was quick. The city took him the same way it took her suddenly, and without any meaning.</p>
                
                <p>Leo's parents were left to clean out his single room. They found the old phone and the hard drive. Taped to it was a note that said, "For Leo. Please save this. It is my mom."</p>
                
                <p>Leo's father looked at the old technology. He shrugged. "It is junk, son. The kid was clinging to ghosts."</p>
                
                <p>He took the phone and the hard drive to a pawn shop. The man behind the counter offered him ten dollars for the lot. Leo's father took the money.</p>
                
                <p>The phone was placed in a bin with other broken devices. Later that week, it was wiped clean, its memory scoured back to zero, ready to be sold for parts. The last recording of her voice, the pasta in the fridge, the promise of a new chapter, the "I love you" all of it was gone. The silence that followed was the same silence that had been waiting for him all along.</p>`,
            quote: "The quote that helped you during this time"
        },
        "content_15_19": {
            story: "Your story for scores 15-19 goes here...",
            quote: "The quote that helped you during this time"
        },
        "content_20_24": {
        story: `<h3 style="text-align: center; color: #5D4037; margin-bottom: 30px;">The Bench at the Center of the World</h3>
                
                <p>The best bench on the 14th Street platform is the one right in the middle. It's not the most comfortable, but it's the only one where you can feel the wind from both directions, a preview of the uptown and downtown 6 trains before they even arrive. I got here a little later than usual today. The guy at the bodega was fighting with his second toaster, so the line for the one working one was snaking past the cold drinks. I almost gave up on my cinnamon raisin bagel, but I'd already paid, so I waited. By the time it was toasted, slathered with peanut butter and jelly, and wrapped in that thin paper, the 8:05 express was long gone. It's fine. The early trains are always too crowded anyway.</p>
    
                <p>I settled onto my bench. First things first: Wordle. I got it in four today. The first guess is always a prayer, the second a process of elimination. By the third, you're either hopeful or resigned. Today, I was hopeful. A good omen, maybe.</p>
    
                <p>The platform filled around me. A river of suits and backpacks. A kid in a dinosaur backpack stared at me until his mother pulled him along. I opened my chess app. I'm working my way through a bot named "Nelson," set to a difficulty that lets me feel clever about half the time. I made a move, captured a pawn, and then looked up.</p>
    
                <p>A flock of fashion students descended, all black clothes and dramatic silhouettes, talking loudly about some designer I'd never heard of. They were a living exhibit. On the opposite bench, a man with kind eyes and a worn-out satchel was grading papers, his red pen moving in quick, decisive slashes. I wondered what story he was failing. A tourist asked me for directions to the High Line, and I pointed them toward the stairs, my voice sounding raspy from disuse.</p>
    
                <p>By midday, the rhythm changed. The frantic energy of being late was replaced by the purpose of lunch breaks and errands. I switched to a sudoku book, the kind with the cheap paper that smudges. The numbers were a quiet comfort. The fruit vendor, an older woman with a permanent, tired smile, nodded at me. I bought a cup of mango and some fruits. It's cheaper than the delis and keeps the hunger at bay. Down on the tracks, a large, glossy rat emerged from a shadow and dragged a forgotten piece of a breakfast sandwich back into the darkness. A small, brutal victory.</p>
    
                <p>In the afternoon, I started my book. Before the Coffee Gets Cold. A novel about a café where you can time travel, but you have to finish your coffee before it gets cold or you're stuck. It's a book about regrets and second chances. I read a chapter, then watched the people living out their own versions. A woman clutching a single yellow flower, her eyes scanning every opening door. A first date. Her hope was a physical thing, bright and fragile.</p>
    
                <p>As evening set in, the station lights flickered on, casting a harsh, honest glow. The crowd softened. People were going home now. Ties were loosened, comfortable shoes replaced heels. The woman with the flower was gone. I hoped it went well for her.</p>
    
                <p>I closed my book. The last of the long-distance trains were due. This is when I pay the most attention. My phone was dead, my sudoku book filled, the story finished. There was nothing left to do but wait. Really wait.</p>
    
                <p>I watched the downtown local pull in. The doors hissed open. A few people got off. A man with a guitar case. A group of friends laughing. A woman struggling with two large grocery bags.</p>
    
                <p>No one else.</p>
    
                <p>The doors closed with a final, rubbery thud. The train pulled away, its red lights disappearing into the tunnel's mouth. The station felt vast and suddenly very quiet. The attendant who mops the floors gave me a small, familiar nod as he started his rounds. He's seen me here enough to know the routine.</p>
    
                <p>I stood up, my knees protesting. It's okay. There's always tomorrow. The trains will run again. The promise was someday, and someday is a date that never appears on a schedule, which means it could be any day. It could be tomorrow.</p>
    
                <p>I turned my collar up against the chill and walked out toward the stairs. The city above was settling into its night sounds. Somewhere out there, his train is still coming. I'm sure of it. Tomorrow, I'll be back on that bench. Tomorrow, the doors will open, and he'll be there, smiling that same smile, and he'll say he's finally home.</p>
            `,
            quote: "The promise was someday, and someday is a date that never appears on a schedule, which means it could be any day."
        },
        "content_30_34": {
            story: "Your story for scores 30-34 goes here...",
            quote: "The quote that helped you during this time"
        },
        "content_35_39": {
            story: "Your story for scores 35-39 goes here...",
            quote: "The quote that helped you during this time"
        },
        "content_40_44": {
            story: "Your story for scores 40-44 goes here...",
            quote: "The quote that helped you during this time"
        },
        "content_45_50": {
            story: "Your story for scores 45-50 goes here...",
            quote: "The quote that helped you during this time"
        }
    };
    
    const content = stories[storyKey];
    
    document.getElementById('question-section').innerHTML = `
        <div class="question-box">
            <h2>A Story From This Place</h2>
            <div class="story-content" style="text-align: left; line-height: 1.6; margin: 30px 0;">
                ${content.story}
            </div>
            <div class="quote" style="font-style: italic; color: #5D4037; margin: 40px 0; padding: 20px; border-left: 3px solid #8D4E24;">
                "${content.quote}"
            </div>
            <button onclick="showVisitorLog()" 
                    style="padding: 12px 30px; background: #8D4E24; color: #F5E6D3; border: none; border-radius: 5px; cursor: pointer;">
                Continue to Visitor's Log
            </button>
        </div>
    `;
}

function showVisitorLog() {
    document.getElementById('question-section').innerHTML = `
        <div class="question-box">
            <h2>Visitor's Log</h2>
            <p class="intro-text">Leave your mark before you go</p>
            
            <div style="margin: 30px 0;">
                <input type="text" id="visitor-name" placeholder="Your name (optional)" 
                       style="width: 80%; padding: 12px; margin: 10px 0; border: 2px solid #8D4E24; border-radius: 5px; background: #F5E6D3;">
                <textarea id="visitor-message" placeholder="Your thoughts, feedback, or anything you'd like to leave here..." 
                          style="width: 80%; height: 120px; padding: 12px; margin: 10px 0; border: 2px solid #8D4E24; border-radius: 5px; background: #F5E6D3; font-family: Georgia, serif;"></textarea>
            </div>
            
            <button onclick="submitVisitorLog()" 
                    style="padding: 12px 30px; background: #8D4E24; color: #F5E6D3; border: none; border-radius: 5px; cursor: pointer; margin-right: 15px;">
                Submit
            </button>
            <button onclick="skipVisitorLog()" 
                    style="padding: 12px 30px; background: transparent; color: #8D4E24; border: 2px solid #8D4E24; border-radius: 5px; cursor: pointer;">
                Skip
            </button>
        </div>
    `;
}


function skipVisitorLog() {
    showFinalMessage();
}

function submitVisitorLog() {
    const name = document.getElementById('visitor-name').value.trim() || 'Anonymous';
    const message = document.getElementById('visitor-message').value.trim();
    const score = userScores.reduce((a,b)=>a+b,0);
    
    console.log('=== VISITOR LOG ===');
    console.log('Name:', name);
    console.log('Message:', message);
    console.log('Score:', score);
    console.log('Timestamp:', new Date().toLocaleString());
    console.log('==================');
    
    alert(`Thank you, ${name}! Your message has been recorded.`);
    
    showFinalMessage();
}

function showFinalMessage() {
    document.getElementById('question-section').innerHTML = `
        <div class="question-box">
            <h2>Thank You</h2>
            <div class="intro-text">
                Your presence here has been noted in the quiet archives of this digital space.
            </div>
            <p style="margin-top: 30px; font-style: italic; color: #5D4037;">
                The museum remains open, should you wish to return.
            </p>
        </div>
    `;
}

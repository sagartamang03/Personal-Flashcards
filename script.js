// Data for all flashcard topics
const data = {
growthMindset: [
  {
    front: "You totally bombed a presentation. What’s the growth mindset way to react?",
    back: "Instead of spiraling, take a breath, ask what you can learn from it, get feedback, and try again better next time."
  },
  {
    front: "Your friend says, “I’m just bad at math.” How would you gently reframe that?",
    back: "Try: “Maybe you just haven’t found the way that works best for *you* yet. Want help figuring it out?”"
  },
  {
    front: "What’s a small daily habit that builds a growth mindset?",
    back: "Celebrate effort, not just results. Like telling yourself, 'Nice! I stuck with it even when it got tricky.'"
  },
  {
    front: "You're jealous of someone who's way ahead of you. Growth mindset response?",
    back: "Flip it: 'What can I learn from them?' Their success doesn't block yours — it can fuel it."
  },
  {
    front: "What’s something you're 'not good at...yet'?",
    back: "Pick one thing. Say it out loud with a 'yet' — then break it into steps you *can* do today."
  }
],
designThinking: [
  {
    front: "You want to help a friend who's stressed. What’s the ‘Empathize’ move?",
    back: "Put yourself in their shoes — ask how they’re really doing, listen fully, no fixing yet."
  },
  {
    front: "Your team keeps solving the wrong problem. What stage might you be skipping?",
    back: "‘Define’ — you need to slow down and get clear on what *actually* needs solving."
  },
  {
    front: "You’re stuck in your head with the same old ideas. What’s the move?",
    back: "Ideate like you’re 7 years old — silly, weird, whatever. Quantity first. You can sort later."
  },
  {
    front: "You have a cool idea but don’t know if it’ll work. What’s a quick test?",
    back: "Make a scrappy version — a sketch, a demo, a roleplay — just enough to get feedback fast."
  },
  {
    front: "Your solution didn’t work. Should you panic?",
    back: "Nope. Testing isn’t failure — it’s learning. Use what didn’t work to shape what might."
  }
],
stoicism: [
  {
    front: "You spill coffee on yourself right before a meeting. Stoic move?",
    back: "Shrug, change your shirt if you can, laugh if not. It's outside your control. Keep going."
  },
  {
    front: "You’re obsessing over what someone *might* be thinking about you. What would a Stoic say?",
    back: "You can’t control their thoughts. Focus on your own actions and intentions. Let the rest go."
  },
  {
    front: "Life threw a curveball you didn’t ask for. How do you practice 'Amor Fati' here?",
    back: "Say: 'Okay, this is happening. How do I turn this into something useful or meaningful?'"
  },
  {
    front: "You’re stuck in traffic, fuming. How do you zoom out, Stoic-style?",
    back: "Imagine looking down at Earth from space — tiny you in a tiny car. Does this moment still matter?"
  },
  {
    front: "You want to waste less time. What’s a Stoic way to remind yourself?",
    back: "Whisper 'Memento Mori' — not as doom, but as a nudge: life is short. What matters right now?"
  }
]
};

function showTopic(topic) {
    const flashcardContainer = document.getElementById("flashcards");
    const topicSelection = document.getElementById("topic-selection");
    const backButton = document.getElementById("back-to-topics");

    // Clear any existing cards
    flashcardContainer.innerHTML = "";

    // Hide topic buttons and show the back button
    topicSelection.style.display = "none";
    backButton.style.display = "block";

    // Create and append a card for each item in the selected topic
    data[topic].forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        // The inner element is used for the 3D flip
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <strong>${item.front}</strong>
                </div>
                <div class="card-back">
                    ${item.back}
                </div>
            </div>
        `;

        // Add click event listener to flip the card
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        flashcardContainer.appendChild(card);
    });
}

/**
 * Hides the flashcards and shows the main topic selection screen.
 */
function goBackToTopics() {
    const flashcardContainer = document.getElementById("flashcards");
    const topicSelection = document.getElementById("topic-selection");
    const backButton = document.getElementById("back-to-topics");

    // Clear the flashcards
    flashcardContainer.innerHTML = "";

    // Show topic buttons and hide the back button
    topicSelection.style.display = "flex";
    backButton.style.display = "none";
}

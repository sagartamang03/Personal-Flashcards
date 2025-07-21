// Data for all flashcard topics
const data = {
growthMindset: [
  {
    front: "You gave a bad presentation. What should you do?",
    back: "Don't give up. Think about what went wrong. Try again next time, but better."
  },
  {
    front: "Your friend says, “I’m just bad at math.” What can you say?",
    back: "“Maybe you just need more time or a new way to learn it.”"
  },
  {
    front: "You made a mistake in front of people. What now?",
    back: "It’s okay. Everyone messes up. Learn from it and keep going."
  },
  {
    front: "You feel jealous of someone better than you. What’s a better way to see it?",
    back: "Think: ‘I can learn from them.’ Their success shows what’s possible."
  },
  {
    front: "You’re not good at something. What can you say to yourself?",
    back: "‘I’m not good at this yet. But I can get better if I keep trying.’"
  },
   {
    front: "You feel like quitting something hard. What can you tell yourself?",
    back: "‘It’s hard now, but if I keep going, I’ll get better.’"
  },
  {
    front: "Your friend learns something faster than you. What do you do?",
    back: "Everyone learns at a different speed. Keep going your way."
  },
  {
    front: "You keep making the same mistake. What can help?",
    back: "Ask for help. Try a new way. Keep trying."
  },
  {
    front: "You didn’t reach your goal. What now?",
    back: "Look at what worked and what didn’t. Try again with a new plan."
  },
  {
    front: "You feel embarrassed after messing up. What would a growth mindset say?",
    back: "‘Mistakes help me learn. Everyone makes them.’"
  }
]
,
designThinking: [
  {
    front: "Your friend is sad. What do you do first?",
    back: "Listen. Don’t try to fix it right away. Just understand how they feel."
  },
  {
    front: "You keep fixing the wrong thing. What should you ask?",
    back: "‘What is the real problem?’ Start there."
  },
  {
    front: "You have no ideas. What can you try?",
    back: "Write down every idea, even silly ones. One of them might help."
  },
  {
    front: "You have an idea but don’t know if it works. What can you do?",
    back: "Make a small version. Test it with someone. See what they say."
  },
  {
    front: "Your idea didn’t work. What now?",
    back: "Don’t quit. Learn what didn’t work. Try again in a new way."
  },
    {
    front: "Your friend keeps forgetting their keys. What’s a good first step?",
    back: "Watch what they do each day. Try to understand the real problem."
  },
  {
    front: "Your idea doesn’t work for others. What can you do?",
    back: "Ask them what they need. Make changes based on that."
  },
  {
    front: "You want to help people eat healthier. What’s a good way to start?",
    back: "Talk to them. Ask about their habits and struggles first."
  },
  {
    front: "Your team has too many ideas. What can help?",
    back: "Pick a few to test. Don’t try everything at once."
  },
  {
    front: "You made a small version of your idea. What now?",
    back: "Show it to people. See what works and what doesn’t."
  }
]
,
stoicism: [
  {
    front: "You spill coffee on yourself. What should you do?",
    back: "Clean it up. Don’t get mad. These things happen."
  },
  {
    front: "You worry what others think of you. What can help?",
    back: "You can’t control their thoughts. Just do your best."
  },
  {
    front: "Something bad happened. What now?",
    back: "You can’t change it. But you can choose how to act next."
  },
  {
    front: "You’re angry in traffic. What can help you calm down?",
    back: "Breathe. Remember, this moment is small in your whole life."
  },
  {
    front: "You’re wasting time online. What can you ask yourself?",
    back: "‘Is this how I want to spend my time?’"
  },
  {
    front: "You had a bad day. What can help you deal with it?",
    back: "It’s just one day. Tomorrow is a new start. Let it pass."
  },
  {
    front: "Someone is rude to you. What can you control?",
    back: "You can’t control them. But you can choose to stay calm."
  },
  {
    front: "You're nervous before something big. What would help?",
    back: "Focus on what *you* can do. Let go of the rest."
  },
  {
    front: "You’re stuck in a boring task. What’s a better way to see it?",
    back: "Try to do it well anyway. It builds patience and strength."
  },
  {
    front: "You're upset about something from the past. What’s a Stoic way to think?",
    back: "You can’t change the past. But you can choose how to move forward now."
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

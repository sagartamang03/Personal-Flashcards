// Data for all flashcard topics
const data = {
    growthMindset: [
        {
            front: "What is a growth mindset?",
            back: "The belief that abilities and intelligence can be developed through dedication, effort, and learning."
        },
        {
            front: "Growth mindset vs. fixed mindset (how do they view failure?)",
            back: "Growth: Failure is an opportunity to learn and grow. Fixed: Failure is a sign that you're not capable."
        },
        {
            front: "How would a growth mindset respond to failing a test?",
            back: "By reflecting on what went wrong, adjusting study strategies, seeking help, and trying again with a new approach."
        },
        {
            front: "Reframe Prompt: “I’m just not good at this.”",
            back: "Growth Mindset version: “I’m not good at this yet, but I can improve with practice and effort.”"
        },
        {
            front: "What does neuroscience say about learning and effort?",
            back: "The brain is malleable. When you learn and practice, your brain forms new neural connections—a process called neuroplasticity."
        }
    ],
    designThinking: [
        {
            front: "What is the first stage of Design Thinking?",
            back: "Empathize: Understand the human needs involved by observing, engaging, and immersing yourself in their experiences."
        },
        {
            front: "What is the 'Define' stage?",
            back: "Define: Analyze your observations from the empathize stage to define the core problems you and your team have identified."
        },
        {
            front: "What happens during the 'Ideate' stage?",
            back: "Ideate: Brainstorm a wide range of creative solutions. It's about quantity over quality at this stage."
        },
        {
            front: "What is a 'Prototype'?",
            back: "An inexpensive, scaled-down version of the product or feature, used to test and explore solutions before investing heavily."
        },
        {
            front: "What is the final stage, 'Test'?",
            back: "Test: Share your prototype with users to get feedback. This feedback is then used to refine the solution or redefine the problem."
        }
    ],
    stoicism: [
        {
            front: "What is the 'Dichotomy of Control'?",
            back: "The idea that some things are within our control (our thoughts, judgments, actions) and some are not (external events, other people)."
        },
        {
            front: "What does 'Memento Mori' mean?",
            back: "“Remember that you must die.” A Stoic practice of reflecting on mortality to create perspective and urgency."
        },
        {
            front: "What is 'Amor Fati'?",
            back: "“A love of fate.” The practice of embracing and making the best of everything that happens, both good and bad."
        },
        {
            front: "What is the 'View from Above'?",
            back: "A meditation exercise where you visualize events from a cosmic, detached perspective to see how small your problems are."
        },
        {
            front: "Who was Marcus Aurelius?",
            back: "A Roman Emperor and Stoic philosopher, famous for his private writings now known as 'Meditations'."
        }
    ]
};

/**
 * Displays the flashcards for a selected topic.
 * @param {string} topic - The key for the selected topic in the data object.
 */
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

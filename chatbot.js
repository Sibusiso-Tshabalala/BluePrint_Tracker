// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotBox = document.getElementById('chatbotBox');
    const closeChat = document.getElementById('closeChat');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatbotMessages = document.getElementById('chatbotMessages');

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbotBox.classList.add('active');
    });

    closeChat.addEventListener('click', () => {
        chatbotBox.classList.remove('active');
    });

    // Send message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Process and generate bot response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(`${sender}-message`);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Generate bot response based on user input
    function generateResponse(input) {
        const lowerInput = input.toLowerCase();
        
        // Greeting responses
        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello! How can I assist you with the Barrier Blueprint Tracker today?";
        }
        
        // Help request
        if (lowerInput.includes('help')) {
            return "I'm here to help! You can ask me about navigating the system, understanding features, or getting assistance with specific tasks.";
        }
        
        // Thank you responses
        if (lowerInput.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with regarding the Barrier Blueprint Tracker?";
        }

        // About the system
        if (lowerInput.includes('what') && lowerInput.includes('system')) {
            return "The Barrier Blueprint Tracker is a platform for managing and tracking innovative ideas and projects, helping to scale impactful solutions.";
        }

        // Ideas questions
        if (lowerInput.includes('idea') || lowerInput.includes('repository')) {
            return "The Idea Repository contains all submitted innovative ideas. You can browse different ideas and see their progress stages.";
        }

        // Dashboard questions
        if (lowerInput.includes('dashboard') || lowerInput.includes('stats')) {
            return "The Dashboard shows your key metrics: total ideas, AI-linked ideas, and scaled projects. You can also see charts breaking down ideas by category.";
        }

        // AI Insights questions
        if (lowerInput.includes('ai') && lowerInput.includes('insight')) {
            return "AI Insights provides analytics and intelligent reports about your ideas and their potential impact.";
        }
        
        // Default response
        return "I understand you're asking about '" + input + "'. I'm here to help you navigate the Barrier Blueprint Tracker system. Feel free to ask about specific features or how to use them.";
    }

    // Event listeners for sending messages
    sendBtn.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
// Chatbot functionality - ENHANCED VERSION
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotBox = document.getElementById('chatbotBox');
    const closeChat = document.getElementById('closeChat');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatbotMessages = document.getElementById('chatbotMessages');

    // Initialize AI Analyzer
    const aiAnalyzer = new SimpleAIAnalyzer();

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbotBox.classList.add('active');
    });

    closeChat.addEventListener('click', () => {
        chatbotBox.classList.remove('active');
    });

    // Enhanced Send Message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Process and generate AI-powered response
        setTimeout(() => {
            const response = generateAIResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }

    // Enhanced response generator with AI analysis
    function generateAIResponse(input) {
        const lowerInput = input.toLowerCase();
        const analysis = aiAnalyzer.analyzeIdea(input);
        
        // Greeting responses
        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello! I'm your AI assistant for the Barrier Blueprint Tracker. I can analyze ideas, suggest stakeholders, and provide AI insights!";
        }
        
        // Idea analysis request
        if (lowerInput.includes('analyze') || lowerInput.includes('what about') || lowerInput.includes('think about')) {
            return `🤖 AI Analysis: "${input}" 
Category: ${analysis.category}
AI Potential: ${analysis.aiScore}%
Scalability: ${analysis.scalability}
Suggested Timeline: ${analysis.timeline}
Key Stakeholders: ${analysis.suggestedStakeholders.join(', ')}`;
        }
        
        // Help request
        if (lowerInput.includes('help')) {
            return "I can: 📊 Analyze ideas for AI potential | 🤝 Suggest stakeholders | 📈 Assess scalability | 🎯 Provide strategic insights | 💡 Recommend next steps";
        }
        
        // AI-specific questions
        if (lowerInput.includes('ai') && (lowerInput.includes('how') || lowerInput.includes('can'))) {
            return "AI can enhance African entrepreneurship through: 1) Smart market analysis 2) Automated stakeholder matching 3) Predictive success scoring 4) Resource optimization 5) Impact measurement";
        }
        
        // Thank you responses
        if (lowerInput.includes('thank')) {
            return "You're welcome! Remember, I can analyze any idea - just say 'analyze [your idea]' and I'll provide AI-powered insights!";
        }

        // Default AI-powered response
        if (analysis.aiScore > 60) {
            return `🎯 This idea has strong AI potential (${analysis.aiScore}%)! Consider: ${analysis.category} focus. I suggest connecting with: ${analysis.suggestedStakeholders.slice(0,2).join(', ')}`;
        }
        
        return `I understand: "${input}". This aligns with ${analysis.category}. AI Score: ${analysis.aiScore}%. Want me to analyze it deeper?`;
    }

    // Add message to chat (existing function)
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(`${sender}-message`);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Event listeners for sending messages
    sendBtn.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add AI analysis examples to initial message
    setTimeout(() => {
        addMessage("Try asking me: 'Analyze AI funding platform for entrepreneurs' or 'How can AI help African startups?'", 'bot');
    }, 3000);
});
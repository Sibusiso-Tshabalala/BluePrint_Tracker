// Sidebar navigation - YOUR EXISTING CODE
const navItems = document.querySelectorAll(".nav li");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    item.classList.add("active");
    const target = item.getAttribute("data-page");
    document.getElementById(target).classList.add("active");
  });
});

// Chart.js Data - YOUR EXISTING CODE
const barCtx = document.getElementById("barChart");
const pieCtx = document.getElementById("pieChart");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Idea", "Pilot", "Scaled"],
    datasets: [{
      label: "Ideas",
      data: [3, 2, 3],
      backgroundColor: ["#d4af37", "#c8b16a", "#072e21"]
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

new Chart(pieCtx, {
  type: "doughnut",
  data: {
    labels: ["Idea", "Pilot", "Scaled"],
    datasets: [{
      data: [3, 2, 3],
      backgroundColor: ["#d4af37", "#c8b16a", "#072e21"]
    }]
  },
  options: {
    plugins: { legend: { position: "bottom" } }
  }
});

// ==================== NEW AI ENHANCEMENTS ====================

// AI Idea Analysis Engine
class SimpleAIAnalyzer {
    analyzeIdea(ideaText) {
        const analysis = {
            category: this.predictCategory(ideaText),
            aiScore: this.calculateAIScore(ideaText),
            scalability: this.assessScalability(ideaText),
            suggestedStakeholders: this.suggestStakeholders(ideaText),
            timeline: this.estimateTimeline(ideaText)
        };
        return analysis;
    }

    predictCategory(text) {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('ai') || lowerText.includes('artificial') || lowerText.includes('machine')) 
            return 'AI & Technology';
        if (lowerText.includes('fund') || lowerText.includes('invest') || lowerText.includes('money')) 
            return 'Funding & Finance';
        if (lowerText.includes('train') || lowerText.includes('educate') || lowerText.includes('skill')) 
            return 'Education & Training';
        if (lowerText.includes('market') || lowerText.includes('customer') || lowerText.includes('access')) 
            return 'Market Access';
        return 'General Innovation';
    }

    calculateAIScore(text) {
        let score = 50; // Base score
        const aiKeywords = ['ai', 'artificial intelligence', 'machine learning', 'algorithm', 'data', 'automate'];
        aiKeywords.forEach(keyword => {
            if (text.toLowerCase().includes(keyword)) score += 15;
        });
        return Math.min(score, 100);
    }

    assessScalability(text) {
        const scalableTerms = ['platform', 'scale', 'continental', 'africa', 'digital', 'mobile'];
        let count = scalableTerms.filter(term => text.toLowerCase().includes(term)).length;
        return count > 2 ? 'High' : count > 1 ? 'Medium' : 'Low';
    }

    suggestStakeholders(text) {
        const stakeholders = [];
        if (text.toLowerCase().includes('fund') || text.includes('money')) {
            stakeholders.push('African Development Bank', 'VC Firms', 'Angel Investors');
        }
        if (text.includes('AI') || text.includes('tech')) {
            stakeholders.push('Google Africa', 'Microsoft Africa', 'AI Startups');
        }
        if (text.includes('education') || text.includes('train')) {
            stakeholders.push('Andela', 'African Universities', 'Training Institutes');
        }
        return stakeholders.slice(0, 3);
    }

    estimateTimeline(text) {
        const length = text.length;
        if (length < 100) return '3-6 months';
        if (length < 200) return '6-12 months';
        return '12-18 months';
    }
}

// Initialize AI Analyzer
const aiAnalyzer = new SimpleAIAnalyzer();

// Enhanced Idea Repository with AI Analysis
function enhanceIdeaRepository() {
    const ideaItems = document.querySelectorAll('.idea-item');
    
    ideaItems.forEach(item => {
        const title = item.querySelector('h3').textContent;
        const analysis = aiAnalyzer.analyzeIdea(title);
        
        // Add AI analysis badge
        const aiBadge = document.createElement('div');
        aiBadge.className = 'ai-analysis-badge';
        aiBadge.innerHTML = `
            <span class="ai-score">AI Score: ${analysis.aiScore}%</span>
            <span class="ai-category">${analysis.category}</span>
        `;
        item.appendChild(aiBadge);
        
        // Add hover tooltip with full analysis
        item.setAttribute('data-ai-analysis', JSON.stringify(analysis));
    });
}

// Enhanced Dashboard with AI Metrics
function addAIMetricsToDashboard() {
    const statsContainer = document.querySelector('.stats');
    
    const aiMetricCard = document.createElement('div');
    aiMetricCard.className = 'stat-card ai-metric';
    aiMetricCard.innerHTML = `
        <h2>78%</h2>
        <p>AI Readiness Score</p>
        <div class="ai-progress">
            <div class="ai-progress-bar">
                <div class="ai-progress-fill" style="width: 78%"></div>
            </div>
        </div>
    `;
    
    statsContainer.appendChild(aiMetricCard);
}

// Initialize enhancements when page loads
document.addEventListener('DOMContentLoaded', function() {
    enhanceIdeaRepository();
    addAIMetricsToDashboard();
});
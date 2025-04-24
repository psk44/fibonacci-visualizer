// frontend/static/js/main.js
class FibonacciVisualizer {
    constructor() {
        this.chart = null;
        this.initializeElements();
        this.addEventListeners();
        this.updateVisualization();
    }

    initializeElements() {
        this.termsInput = document.getElementById('terms');
        this.visualType = document.getElementById('visualType');
        this.updateBtn = document.getElementById('updateBtn');
        this.chartCanvas = document.getElementById('fibChart');
        this.spiralContainer = document.getElementById('spiralContainer');
        this.sequenceDisplay = document.getElementById('sequenceNumbers');
        this.ratioDisplay = document.getElementById('ratioNumbers');
    }

    addEventListeners() {
        this.updateBtn.addEventListener('click', () => this.updateVisualization());
        this.visualType.addEventListener('change', () => this.updateVisualization());
    }

    async fetchFibonacciData() {
        const terms = this.termsInput.value;
        try {
            const response = await fetch(`http://localhost:5000/api/fibonacci?n=${terms}`);
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        }
    }

    updateSequenceDisplay(sequence) {
        this.sequenceDisplay.innerHTML = sequence
            .map(num => `<span class="number-box">${num}</span>`)
            .join('');
    }

    updateRatioDisplay(ratios) {
        this.ratioDisplay.innerHTML = ratios
            .map(ratio => `<span class="number-box">${ratio}</span>`)
            .join('');
    }

    createChart(sequence) {
        if (this.chart) {
            this.chart.destroy();
        }

        const ctx = this.chartCanvas.getContext('2d');
        this.chart = new Chart(ctx, {
            type: this.visualType.value === 'line' ? 'line' : 'bar',
            data: {
                labels: sequence.map((_, index) => index + 1),
                datasets: [{
                    label: 'Fibonacci Sequence',
                    data: sequence,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // 
drawSpiral(sequence) {
    const container = this.spiralContainer;
    container.innerHTML = '';
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "600");
    svg.setAttribute("height", "600");
    
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", "translate(300,300)");
    
    let x = 0;
    let y = 0;
    let angle = 0;
    
    // Scale factor to make the spiral visible
    const scale = 600 / Math.max(...sequence);
    
    // Create the path
    let pathD = `M ${x} ${y}`;
    
    sequence.forEach((num, i) => {
        if (i < 2) return; // Skip first two numbers
        
        const radius = num * scale;
        angle += Math.PI / 2;
        
        x = radius * Math.cos(angle);
        y = radius * Math.sin(angle);
        
        pathD += ` L ${x} ${y}`;
    });
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("stroke", "#3498db");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");
    
    g.appendChild(path);
    svg.appendChild(g);
    container.appendChild(svg);
}

// Initialize the visualizer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FibonacciVisualizer();
});
// frontend/static/js/mathInsights.js
class MathematicalInsights {
    constructor(container) {
        this.container = container;
    }

    calculateProperties(sequence) {
        const goldenRatio = 1.618034;
        const lastRatio = sequence[sequence.length - 1] / sequence[sequence.length - 2];
        const ratioError = Math.abs(goldenRatio - lastRatio);

        return {
            goldenRatio,
            lastRatio,
            ratioError,
            sequenceSum: sequence.reduce((a, b) => a + b, 0),
            maxTerm: Math.max(...sequence)
        };
    }

    render(sequence) {
        const props = this.calculateProperties(sequence);
        
        this.container.innerHTML = `
            <div class="math-insights">
                <h3>Mathematical Insights</h3>
                <div class="insight-grid">
                    <div class="insight-card">
                        <h4>Golden Ratio Approximation</h4>
                        <p>${props.lastRatio.toFixed(6)}</p>
                        <small>Error: ${props.ratioError.toFixed(6)}</small>
                    </div>
                    <div class="insight-card">
                        <h4>Sequence Sum</h4>
                        <p>${props.sequenceSum}</p>
                    </div>
                    <div class="insight-card">
                        <h4>Maximum Term</h4>
                        <p>${props.maxTerm}</p>
                    </div>
                </div>
            </div>
        `;
    }
}
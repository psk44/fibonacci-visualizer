// frontend/static/js/main.js
class EnhancedFibonacciVisualizer {
    constructor() {
        this.cache = new CacheManager();
        this.loadingState = new LoadingState();
        this.mathInsights = new MathematicalInsights(
            document.getElementById('mathInsights')
        );
        this.initializeComponents();
        this.API_BASE_URL = 'http://localhost:5050'; // Updated port
    }

    async fetchFibonacciData() {
        const terms = this.termsInput.value;
        try {
            const response = await fetch(`${this.API_BASE_URL}/api/fibonacci?n=${terms}`);
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

    async fetchData(terms) {
        const cacheKey = `fib-${terms}`;
        const cachedData = this.cache.get(cacheKey);
        
        if (cachedData) {
            return cachedData;
        }

        this.loadingState.show();
        try {
            const data = await super.fetchFibonacciData();
            this.cache.set(cacheKey, data);
            return data;
        } catch (error) {
            ErrorHandler.handleApiError(error);
            throw error;
        } finally {
            this.loadingState.hide();
        }
    }

    async updateVisualization() {
        try {
            const data = await this.fetchData(this.termsInput.value);
            await super.updateVisualization(data);
            this.mathInsights.render(data.sequence);
        } catch (error) {
            ErrorHandler.handleApiError(error);
        }
    }
}
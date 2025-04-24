// frontend/static/js/errorHandler.js
class ErrorHandler {
    static showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        document.body.appendChild(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    }

    static handleApiError(error) {
        console.error('API Error:', error);
        this.showError(`Error: ${error.message}`);
    }
}


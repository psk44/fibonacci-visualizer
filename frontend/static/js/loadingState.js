// frontend/static/js/loadingState.js
class LoadingState {
    constructor() {
        this.loadingElement = this.createLoadingElement();
    }

    createLoadingElement() {
        const div = document.createElement('div');
        div.className = 'loading-spinner';
        div.innerHTML = `
            <div class="spinner"></div>
            <p>Loading...</p>
        `;
        return div;
    }

    show() {
        document.body.appendChild(this.loadingElement);
    }

    hide() {
        this.loadingElement.remove();
    }
}
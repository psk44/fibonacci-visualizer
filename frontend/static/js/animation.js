// Add this method to the FibonacciVisualizer class
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
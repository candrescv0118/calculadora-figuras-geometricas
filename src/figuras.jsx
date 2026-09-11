// Funciones para calcular áreas de figuras geométricas

/**
 * Calcula el área de un triángulo
 * Fórmula: (base × altura) / 2
 */
function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        alert('Por favor ingresa valores positivos');
        return null;
    }
    return (base * height) / 2;
}

/**
 * Calcula el área de un rectángulo
 * Fórmula: base × altura
 */
function calculateRectangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        alert('Por favor ingresa valores positivos');
        return null;
    }
    return base * height;
}

/**
 * Calcula el área de un cuadrado
 * Fórmula: lado²
 */
function calculateSquareArea(side) {
    if (side <= 0) {
        alert('Por favor ingresa un valor positivo');
        return null;
    }
    return side * side;
}

// Event Listeners para los botones de figuras
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-figure');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const figure = this.dataset.figure;
            
            // Remover clase active de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Ocultar todos los formularios
            document.querySelectorAll('.form-section').forEach(form => {
                form.classList.remove('active');
            });
            
            // Mostrar el formulario correspondiente
            if (figure === 'triangle') {
                document.getElementById('triangleForm').classList.add('active');
                document.getElementById('triangleBase').focus();
            } else if (figure === 'rectangle') {
                document.getElementById('rectangleForm').classList.add('active');
                document.getElementById('rectangleBase').focus();
            } else if (figure === 'square') {
                document.getElementById('squareForm').classList.add('active');
                document.getElementById('squareSide').focus();
            }
            
            // Ocultar resultado anterior
            document.getElementById('resultContainer').classList.remove('show');
        });
    });

    // Permitir Enter para calcular
    document.getElementById('triangleBase').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateTriangle();
    });
    document.getElementById('triangleHeight').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateTriangle();
    });
    document.getElementById('rectangleBase').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateRectangle();
    });
    document.getElementById('rectangleHeight').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateRectangle();
    });
    document.getElementById('squareSide').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateSquare();
    });
});

// Funciones globales para los botones de cálculo
window.calculateTriangle = function() {
    const base = parseFloat(document.getElementById('triangleBase').value);
    const height = parseFloat(document.getElementById('triangleHeight').value);
    
    if (!base || !height || base <= 0 || height <= 0) {
        alert('Por favor ingresa valores válidos y positivos');
        return;
    }
    
    const area = calculateTriangleArea(base, height);
    
    if (area !== null) {
        displayResult(area, `Fórmula: (${base} × ${height}) / 2 = ${area}`);
    }
};

window.calculateRectangle = function() {
    const base = parseFloat(document.getElementById('rectangleBase').value);
    const height = parseFloat(document.getElementById('rectangleHeight').value);
    
    if (!base || !height || base <= 0 || height <= 0) {
        alert('Por favor ingresa valores válidos y positivos');
        return;
    }
    
    const area = calculateRectangleArea(base, height);
    
    if (area !== null) {
        displayResult(area, `Fórmula: ${base} × ${height} = ${area}`);
    }
};

window.calculateSquare = function() {
    const side = parseFloat(document.getElementById('squareSide').value);
    
    if (!side || side <= 0) {
        alert('Por favor ingresa un valor válido y positivo');
        return;
    }
    
    const area = calculateSquareArea(side);
    
    if (area !== null) {
        displayResult(area, `Fórmula: ${side}² = ${area}`);
    }
};

/**
 * Muestra el resultado en la pantalla
 */
function displayResult(area, formula) {
    const resultContainer = document.getElementById('resultContainer');
    const resultValue = document.getElementById('resultValue');
    const resultFormula = document.getElementById('resultFormula');
    
    resultValue.textContent = area.toFixed(2) + ' unidades²';
    resultFormula.textContent = formula;
    
    resultContainer.classList.add('show');
}

// Exportar funciones para posible uso en componentes React
export { calculateTriangleArea, calculateRectangleArea, calculateSquareArea };

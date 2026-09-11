import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedFigure, setSelectedFigure] = useState('triangle');
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    triangleBase: '',
    triangleHeight: '',
    rectangleBase: '',
    rectangleHeight: '',
    squareSide: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTriangle = () => {
    const base = parseFloat(formData.triangleBase);
    const height = parseFloat(formData.triangleHeight);
    
    if (!base || !height || base <= 0 || height <= 0) {
      alert('Por favor ingresa valores válidos y positivos');
      return;
    }
    
    const area = (base * height) / 2;
    setResult({
      area: area.toFixed(2),
      formula: `(${base} × ${height}) / 2 = ${area.toFixed(2)}`
    });
  };

  const calculateRectangle = () => {
    const base = parseFloat(formData.rectangleBase);
    const height = parseFloat(formData.rectangleHeight);
    
    if (!base || !height || base <= 0 || height <= 0) {
      alert('Por favor ingresa valores válidos y positivos');
      return;
    }
    
    const area = base * height;
    setResult({
      area: area.toFixed(2),
      formula: `${base} × ${height} = ${area.toFixed(2)}`
    });
  };

  const calculateSquare = () => {
    const side = parseFloat(formData.squareSide);
    
    if (!side || side <= 0) {
      alert('Por favor ingresa un valor válido y positivo');
      return;
    }
    
    const area = side * side;
    setResult({
      area: area.toFixed(2),
      formula: `${side}² = ${area.toFixed(2)}`
    });
  };

  const handleFigureChange = (figure) => {
    setSelectedFigure(figure);
    setResult(null);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-content">
          <span className="navbar-brand">📐 Calculadora Geométrica</span>
        </div>
      </nav>

      <div className="container-main">
        <div className="card">
          <div className="card-header">
            <h2>📊 Calcular Áreas de Figuras Geométricas</h2>
          </div>
          <div className="card-body">
            <div className="info-section">
              <h5>ℹ️ Instrucciones</h5>
              <p>Selecciona una figura geométrica, ingresa los valores requeridos y haz clic en "Calcular" para obtener el área.</p>
            </div>

            <div className="btn-group-custom">
              <button 
                className={`btn-figure ${selectedFigure === 'triangle' ? 'active' : ''}`}
                onClick={() => handleFigureChange('triangle')}
              >
                ▶ Triángulo
              </button>
              <button 
                className={`btn-figure ${selectedFigure === 'rectangle' ? 'active' : ''}`}
                onClick={() => handleFigureChange('rectangle')}
              >
                ⬜ Rectángulo
              </button>
              <button 
                className={`btn-figure ${selectedFigure === 'square' ? 'active' : ''}`}
                onClick={() => handleFigureChange('square')}
              >
                ⬛ Cuadrado
              </button>
            </div>

            {selectedFigure === 'triangle' && (
              <div className="form-section active">
                <h5 className="form-title">▶ Triángulo</h5>
                <div className="input-group-custom">
                  <label className="form-label">Base (unidades)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="triangleBase"
                    value={formData.triangleBase}
                    onChange={handleInputChange}
                    placeholder="Ingresa la base del triángulo" 
                    min="0" 
                    step="0.01"
                  />
                </div>
                <div className="input-group-custom">
                  <label className="form-label">Altura (unidades)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="triangleHeight"
                    value={formData.triangleHeight}
                    onChange={handleInputChange}
                    placeholder="Ingresa la altura del triángulo" 
                    min="0" 
                    step="0.01"
                  />
                </div>
                <button className="btn-calculate" onClick={calculateTriangle}>Calcular Área del Triángulo</button>
              </div>
            )}

            {selectedFigure === 'rectangle' && (
              <div className="form-section active">
                <h5 className="form-title">⬜ Rectángulo</h5>
                <div className="input-group-custom">
                  <label className="form-label">Base (unidades)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="rectangleBase"
                    value={formData.rectangleBase}
                    onChange={handleInputChange}
                    placeholder="Ingresa la base del rectángulo" 
                    min="0" 
                    step="0.01"
                  />
                </div>
                <div className="input-group-custom">
                  <label className="form-label">Altura (unidades)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="rectangleHeight"
                    value={formData.rectangleHeight}
                    onChange={handleInputChange}
                    placeholder="Ingresa la altura del rectángulo" 
                    min="0" 
                    step="0.01"
                  />
                </div>
                <button className="btn-calculate" onClick={calculateRectangle}>Calcular Área del Rectángulo</button>
              </div>
            )}

            {selectedFigure === 'square' && (
              <div className="form-section active">
                <h5 className="form-title">⬛ Cuadrado</h5>
                <div className="input-group-custom">
                  <label className="form-label">Lado (unidades)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="squareSide"
                    value={formData.squareSide}
                    onChange={handleInputChange}
                    placeholder="Ingresa el lado del cuadrado" 
                    min="0" 
                    step="0.01"
                  />
                </div>
                <button className="btn-calculate" onClick={calculateSquare}>Calcular Área del Cuadrado</button>
              </div>
            )}

            {result && (
              <div className="result-container show">
                <div className="result-label">✓ Resultado:</div>
                <div className="result-value">{result.area} unidades²</div>
                <div className="result-formula">Fórmula: {result.formula}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Calculadora de Figuras Geométricas | Proyecto de Desarrollo Web</p>
      </footer>
    </div>
  );
};

export default App;
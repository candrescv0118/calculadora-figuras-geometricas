# Calculadora de Figuras Geométricas

## Descripción del Proyecto

Este es un proyecto React que permite calcular el área de tres figuras geométricas:
- **Triángulo**: Calcula el área usando la fórmula (base × altura) / 2
- **Rectángulo**: Calcula el área usando la fórmula base × altura
- **Cuadrado**: Calcula el área usando la fórmula lado²

## Características

✅ Interfaz intuitiva y responsive con Bootstrap  
✅ Uso de React Hooks (useState) para gestionar el estado  
✅ Validación de entrada de datos  
✅ Cálculo instantáneo de áreas  
✅ Diseño uniforme y profesional  
✅ Animaciones suaves y transiciones  

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir la interfaz
- **Hooks (useState)**: Para gestionar el estado de los formularios
- **Bootstrap 5**: Para el diseño responsive y estilos CSS
- **Vite**: Herramienta de build moderna para React
- **Font Awesome**: Iconos personalizados

## Estructura del Proyecto

```
calculadora-figuras-geometricas/
├── public/
│   └── index.html
├── src/
│   ├── figuras.jsx
│   └── App.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y Uso

### Requisitos
- Node.js (v14 o superior)
- npm o yarn

### Pasos para ejecutar

1. Clonar el repositorio:
```bash
git clone https://github.com/candrescv0118/calculadora-figuras-geometricas.git
cd calculadora-figuras-geometricas
```

2. Instalar las dependencias:
```bash
npm install
```

3. Ejecutar el proyecto en desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

## Cómo Usar

1. **Selecciona una figura geométrica**: Haz clic en uno de los botones (Triángulo, Rectángulo o Cuadrado)
2. **Ingresa los valores**: Completa los campos con las dimensiones requeridas
3. **Calcula el área**: Haz clic en el botón "Calcular"
4. **Visualiza el resultado**: El área se mostrará con la fórmula utilizada

## Funcionalidades

### Triángulo
- Requiere: Base y Altura
- Fórmula: (base × altura) / 2

### Rectángulo
- Requiere: Base y Altura
- Fórmula: base × altura

### Cuadrado
- Requiere: Lado
- Fórmula: lado²

## Archivos Principales

- **public/index.html**: Archivo HTML principal con Bootstrap CDN y estilos personalizados
- **src/figuras.jsx**: Componente con la lógica de cálculo de áreas
- **src/App.jsx**: Componente principal de la aplicación
- **package.json**: Configuración del proyecto y dependencias

## Validación

El proyecto incluye validación de:
- ✓ Valores no negativos
- ✓ Campos obligatorios
- ✓ Formato numérico correcto
- ✓ Precisión de hasta 2 decimales

## Estilo y Diseño

- Interfaz moderna con gradientes
- Responsive para dispositivos móviles
- Animaciones suaves
- Tema de colores profesional
- Iconos intuitivos

## Autor

Estudiante de Desarrollo Web

## Licencia

Este proyecto está bajo licencia MIT

## Captura de Pantalla

El proyecto se ejecuta en un navegador web moderno y muestra:
- Una barra de navegación con el título
- Botones para seleccionar la figura geométrica
- Formularios interactivos para ingresar datos
- Sección de resultados con fórmula utilizada
- Diseño responsivo que se adapta a cualquier pantalla

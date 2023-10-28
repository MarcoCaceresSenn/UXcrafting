import React, { useState } from 'react';

function CategorySelector({ onSetCategory, onSetPercentage, onAddCategory }) {
    const [category, setCategory] = useState('');
    const [percentage, setPercentage] = useState('');

    const handleAddCategory = () => {
        if (category && percentage && !isNaN(percentage) && percentage >= 0) {
            onAddCategory(category, parseFloat(percentage));
            setCategory('');
            setPercentage('');
        }
    };

    return (
        <div>
            <label>Selecciona una categoría:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <label>Porcentaje de gasto:</label>
            <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
            <button onClick={handleAddCategory}>Agregar Categoría</button>
        </div>
    );
}

export default CategorySelector;

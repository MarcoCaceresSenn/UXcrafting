import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import UserSelector from '../component/user-selector/user.selector';
import ExpenseMessage from '../component/expense-message/expense.message';

const usersData = require('../infraestructura/mocks/users.json');
const users = usersData.users;

const categories = ["comida", "alcohol", "ocio", "familia", "otros"];

function ExpenseAnalyzerView() {
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPercentage, setSelectedPercentage] = useState("");
    const [categoryData, setCategoryData] = useState({});
    const [gastoPorcentaje, setGastoPorcentaje] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [warningMessage, setWarningMessage] = useState("");

    useEffect(() => {
        // Calcula el porcentaje de gasto
        if (selectedUser) {
            const user = users.find((user) => user.nombre === selectedUser);
            const totalGasto = user.ingresosPorMes.reduce((acc, mes) => acc + mes.gasto, 0);
            const totalIngreso = user.ingresosPorMes.reduce((acc, mes) => acc + mes.ingreso, 0);
            const porcentaje = (totalGasto / totalIngreso) * 100;
            setGastoPorcentaje(porcentaje);
        } else {
            setGastoPorcentaje(0);
        }
    }, [selectedUser]);

    const handleAddCategory = () => {
        if (selectedUser && selectedCategory && selectedPercentage !== "") {
            const percentage = parseFloat(selectedPercentage);
            const existingPercentage = categoryData[selectedCategory] || 0;
            const totalPercentage = Object.values(categoryData).reduce((acc, val) => acc + val, 0);

            if (percentage <= 100 && totalPercentage + percentage <= 100) {
                setCategoryData({
                    ...categoryData,
                    [selectedCategory]: existingPercentage + percentage,
                });
                setSelectedCategory("");
                setSelectedPercentage("");
                setErrorMessage("");
            } else {
                setErrorMessage("La suma de los porcentajes no puede superar el 100%.");
            }
        } else {
            setErrorMessage("Selecciona una categoría y un porcentaje.");
        }
    };

    const handleResetCategories = () => {
        setCategoryData({});
        setErrorMessage("");
    };

    useEffect(() => {
        const totalCategoryPercentage = Object.values(categoryData).reduce((acc, val) => acc + val, 0);

        if (totalCategoryPercentage >= 50 && totalCategoryPercentage < 75) {
            setWarningMessage("CUIDADO CON LOS GASTOS HORMIGA");
        } else if (totalCategoryPercentage >= 75) {
            setWarningMessage("ESTAS DESPILFARRANDO TU DINERO");
        } else {
            setWarningMessage("");
        }
    }, [categoryData]);

    return (
        <Container>
            <h1 className="mt-4">Analizador de Gastos</h1>
            <Row className="mt-4">
                <Col sm={6}>
                    <UserSelector users={users} selectedUser={selectedUser} onSelectUser={setSelectedUser} />
                    <ExpenseMessage gastoPorcentaje={gastoPorcentaje} />
                </Col>
                <Col sm={6}>
                    <Form.Group controlId="categoryDropdown">
                        <Form.Label>Selecciona una categoría</Form.Label>
                        <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="">Selecciona una categoría</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="percentageInput">
                        <Form.Label>Porcentaje</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            value={selectedPercentage}
                            onChange={(e) => setSelectedPercentage(e.target.value)}
                        />
                    </Form.Group>
                    <div className='mt-4'>
                        <Button variant="primary" onClick={handleAddCategory}>
                            Agregar Categoría
                        </Button>
                        <Button variant="danger" className="ms-2" onClick={handleResetCategories}>
                            Resetear Porcentajes
                        </Button>
                    </div>

                    {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
                    {warningMessage && <p className="text-warning mt-2">{warningMessage}</p>}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3>Categorías y Porcentajes:</h3>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>
                                {category}: {categoryData[category] || 0}%
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default ExpenseAnalyzerView;

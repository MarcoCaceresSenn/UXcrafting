import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignalComponent from '../component/signal-component/signal.component'
import './expense.css'

import UserSelector from '../component/user-selector/user.selector';

import Pies from '../component/graph-component/piechart';
import ButtonComponentBCP from '../component/button-for-signal-component/button.signal.component'

const usersData = require('../infraestructura/mocks/users.json');
const users = usersData.users;

const categories = ["comida", "alcohol", "ropa", "taxis", "otros"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function ExpenseAnalyzerView() {
    const [selectedUser, setSelectedUser] = useState('');
    const [gastoPorcentaje, setGastoPorcentaje] = useState(0);
    const [selectedStartMonth, setSelectedStartMonth] = useState("");
    const [selectedEndMonth, setSelectedEndMonth] = useState("");
    const [totalIngresos, setTotalIngresos] = useState(0);
    const [totalGastos, setTotalGastos] = useState(0);
    const [totalCategorias, setTotalCategorias] = useState({});
    const [zeroPercentageCategories, setZeroPercentageCategories] = useState([]);
    const [savings, setSavings] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        if (selectedUser) {
            const user = users.find((user) => user.nombre === selectedUser);
            const totalGasto = user.ingresosPorMes.reduce((acc, mes) => acc + mes.gasto, 0);
            const totalIngreso = user.ingresosPorMes.reduce((acc, mes) => acc + mes.ingreso, 0);
            const porcentaje = (totalGasto / totalIngreso) * 100;
            setGastoPorcentaje(porcentaje);
        }
    }, [selectedUser]);

    const calculateSavings = () => {
        const filteredCategories = categories.filter(category => !zeroPercentageCategories.includes(category));

        const totalSavings = filteredCategories.reduce((acc, category) => {
            const categoryGasto = totalCategorias[category] || 0;

            console.log("acc se refiere al valor acumulado de la suma de los gastos de las categorías seleccionadas:", acc)
            return acc + categoryGasto;
        }, 0);
        console.log("total savings se refiere a la suma de los gastos de las categorías seleccionadas:", totalSavings)
        return totalSavings;
    };

    const handleZeroPercentageCategoriesChange = (selectedCategories) => {
        setZeroPercentageCategories(selectedCategories);
        // Actualiza selectedCategory con la primera categoría seleccionada, si existe.
        if (selectedCategories.length > 0) {
            setSelectedCategory(selectedCategories[0]);
        }
        const savings = calculateSavings();
        setSavings(savings);
    };

    const handleFilterMonths = () => {
        if (!selectedUser) {
            console.log("No se ha seleccionado un usuario. La acción se ha detenido.");
            return;
        }

        const user = users.find((user) => user.nombre === selectedUser);

        if (!user) {
            console.log("Usuario no encontrado. La acción se ha detenido.");
            return;
        }

        if (!selectedStartMonth || !selectedEndMonth) {
            console.log("No se han seleccionado meses de inicio o fin. La acción se ha detenido.");
            return;
        }
        const startMonthIndex = months.indexOf(selectedStartMonth);
        const endMonthIndex = months.indexOf(selectedEndMonth);

        if (startMonthIndex === -1 || endMonthIndex === -1 || startMonthIndex > endMonthIndex) {
            console.log("Meses seleccionados inválidos o rango incorrecto. La acción se ha detenido.");
            return;
        }

        const filteredMonths = user.ingresosPorMes.filter((mes) => {
            const currentMonthIndex = months.indexOf(mes.mes);
            return currentMonthIndex >= startMonthIndex && currentMonthIndex <= endMonthIndex;
        });

        const totalIngresosFiltered = filteredMonths.reduce((acc, mes) => acc + mes.ingreso, 0);
        const totalGastosFiltered = filteredMonths.reduce((acc, mes) => acc + mes.gasto, 0);

        const categoriasTotales = {};

        filteredMonths.forEach((mes) => {
            for (const categoria in mes.categoriaPorcentaje) {
                const categoriaGasto = (mes.categoriaPorcentaje[categoria] * mes.gasto) / 100;
                categoriasTotales[categoria] = (categoriasTotales[categoria] || 0) + categoriaGasto;
            }
        });

        console.log("Total de ingresos filtrados:", totalIngresosFiltered);
        console.log("Total de Gastos filtrados:", totalGastosFiltered);
        console.log("Categorías totales:", categoriasTotales);

        setTotalIngresos(totalIngresosFiltered);
        setTotalGastos(totalGastosFiltered);
        setTotalCategorias(categoriasTotales);
    };

    return (
        <Container>
            <h1 className="mt-4 border-bottom">Analizador de Gastos</h1>
            <Row className="mt-4">
                <Col sm={6}>
                    <UserSelector users={users} selectedUser={selectedUser} onSelectUser={setSelectedUser} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3>Filtrar por Meses:</h3>
                    <Form.Group controlId="startMonth">
                        <Form.Label>Mes de Inicio</Form.Label>
                        <Form.Select className='w-50' value={selectedStartMonth} onChange={(e) => setSelectedStartMonth(e.target.value)}>
                            <option value="">Selecciona un mes</option>
                            {users[0].ingresosPorMes.map((mes, index) => (
                                <option key={index} value={mes.mes}>
                                    {mes.mes}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="endMonth">
                        <Form.Label>Mes de Término</Form.Label>
                        <Form.Select className='w-50' value={selectedEndMonth} onChange={(e) => setSelectedEndMonth(e.target.value)}>
                            <option value="">Selecciona un mes</option>
                            {users[0].ingresosPorMes.map((mes, index) => (
                                <option key={index} value={mes.mes}>
                                    {mes.mes}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button className='mt-3 bg-button' onClick={handleFilterMonths}>
                        Filtrar Meses
                    </Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3>Resultados del Filtro:</h3>
                    <p>Total de Ingresos: {totalIngresos}</p>
                    <p>Total de Gastos: {totalGastos}</p>
                    <Form.Group controlId="zeroPercentageCategories">
                        <Form.Label>Seleccione categoría para simular cuánto dinero hubiese ahorrado si no tenía gastos:</Form.Label>
                        <Form.Control
                            as="select"
                            multiple
                            onChange={(e) => handleZeroPercentageCategoriesChange(Array.from(e.target.selectedOptions, (option) => option.value))}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <p>Total de dinero ahorrado: {savings}</p>
                </Col>
                <div className='w-50'>
                    <Pies data={{ totalIngresos, totalGastos }} />
                </div>
            </Row>
            <div>
                <SignalComponent gasto={savings} categoria={selectedCategory} />
            </div>
            <div className='text-center'>
                <ButtonComponentBCP />
            </div>
        </Container>
    );
}

export default ExpenseAnalyzerView;

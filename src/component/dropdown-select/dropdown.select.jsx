import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Progressbar from '../progressbar-component/progressbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import userData from '../../infraestructura/mocks/users.json';

const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function DropdownSelect() {
    const [mesSeleccionado, setMesSeleccionado] = useState('');
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    const handleMonthChange = (event) => {
        setMesSeleccionado(event.target.value);
    };

    const handleUserChange = (event) => {
        const userId = event.target.value;
        setSelectedUserId(userId);
        setSelectedUser(userData.users[userId]);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="w-25 mb-3">
                <Form.Select
                    value={mesSeleccionado}
                    onChange={handleMonthChange}
                    aria-label="Select a month"
                >
                    <option value="">Selecciona un mes</option>
                    {meses.map((mes, index) => (
                        <option key={index} value={mes}>
                            {mes}
                        </option>
                    ))}
                </Form.Select>
            </div>
            <div className="w-50 mb-3">
                <Form.Select
                    value={selectedUserId}
                    onChange={handleUserChange}
                    aria-label="Select a user"
                >
                    <option value="">Selecciona un usuario</option>
                    {userData.users.map((user, index) => (
                        <option key={index} value={index}>
                            {user.nombre}
                        </option>
                    ))}
                </Form.Select>
            </div>
            <div className="w-50">
                <Progressbar mesSeleccionado={mesSeleccionado} valor={selectedUser ? selectedUser.ingreso : 0} />
            </div>
            <div className="w-50">
                <Progressbar mesSeleccionado={mesSeleccionado} valor={selectedUser ? selectedUser.gasto : 0} />
            </div>
        </div>
    );
}

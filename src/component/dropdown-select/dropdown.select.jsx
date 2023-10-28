import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Progressbar from "../progressbar-component/progressbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import userData from "../../infraestructura/mocks/users.json";

const usuarios = userData.users;

export default function DropdownSelect() {
  const [mesSeleccionado, setMesSeleccionado] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleMonthChange = (event) => {
    setMesSeleccionado(event.target.value);
  };

  const handleUserChange = (event) => {
    const userId = event.target.value;
    setSelectedUserId(userId);
    setSelectedUser(usuarios[userId]);
    // Reiniciar la selección de mes cuando se cambia de usuario
    setMesSeleccionado("");
  };

  return (
    <div className="mt-5">
      <div className="d-flex flex-column align-items-center">
        <div className="w-25 mb-3">
          <Form.Select
            value={mesSeleccionado}
            onChange={handleMonthChange}
            aria-label="Select a month"
            disabled={!selectedUser} // Deshabilitar si no hay usuario seleccionado
          >
            <option value="">Selecciona un mes</option>
            {selectedUser &&
              selectedUser.ingresosPorMes.map((mes, index) => (
                <option key={index} value={mes.mes}>
                  {mes.mes}
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
            {usuarios.map((user, index) => (
              <option key={index} value={index}>
                {user.nombre}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="w-50">
          <Progressbar
            mesSeleccionado={mesSeleccionado}
            valor={selectedUser ? getIngresoForMes(selectedUser, mesSeleccionado) : 0}
          />
        </div>
        <div className="w-50">
          <Progressbar
            mesSeleccionado={mesSeleccionado}
            valor={selectedUser ? getGastoForMes(selectedUser, mesSeleccionado) : 0}
          />
        </div>
      </div>
    </div>
  );
}

// Función para obtener ingreso de un mes
function getIngresoForMes(user, mes) {
  const ingresosPorMes = user.ingresosPorMes;
  const mesSeleccionado = ingresosPorMes.find((m) => m.mes === mes);
  return mesSeleccionado ? mesSeleccionado.ingreso : 0;
}

// Función para obtener gasto de un mes
function getGastoForMes(user, mes) {
  const ingresosPorMes = user.ingresosPorMes;
  const mesSeleccionado = ingresosPorMes.find((m) => m.mes === mes);
  return mesSeleccionado ? mesSeleccionado.gasto : 0;
}

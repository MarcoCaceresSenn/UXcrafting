import React from 'react';

function UserSelector({ users, selectedUser, onSelectUser }) {
    return (
        <div>
            <label>Selecciona un usuario:</label>
            <select value={selectedUser} onChange={(e) => onSelectUser(e.target.value)}>
                <option value="">Selecciona un usuario</option>
                {users.map((user, index) => (
                    <option key={index} value={user.nombre}>
                        {user.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default UserSelector;

import User from '../../core/entities/user';

class UserController {
    constructor(users) {
        this.users = users;
    }

    selectUser(nombre) {
        return this.users.find((user) => user.nombre === nombre);
    }
}

export default UserController;

const UserDAO = require("../models/UserDAO");

class UserService {
  constructor() {
    this.userDao = new UserDAO();
  }

  // Retorna todos os usuários
  getAllUsers() {
    return this.userDao.getAll();
  }

  // Retorna usuário por ID
  getUserById(id) {
    return this.userDao.getById(id);
  }

  // Cria um novo usuário
  createUser(user) {
    if (this.isValidUser(user)) {
      this.userDao.add(user);
      return user;
    } else {
      throw new Error("Usuário inválido");
    }
  }

  // Atualiza usuário por ID
  updateUser(id, userUpdates) {
    const existingUser = this.userDao.getById(id);
    if (existingUser) {
      this.userDao.update(id, userUpdates);
      return this.userDao.getById(id); // Retorna o usuário atualizado
    } else {
      throw new Error("Usuário não encontrado para atualização");
    }
  }

  // Deleta usuário por ID
  deleteUser(id) {
    const isDeleted = this.userDao.delete(id);
    if (!isDeleted) {
      throw new Error("Usuário não encontrado para deletar");
    }
    return true;
  }

  // Valida
  isValidUser(user) {
    return user && user.name && user.email && user.password;
  }
}

module.exports = UserService;

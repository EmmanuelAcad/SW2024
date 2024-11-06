/**
 * Operações da API:
 * GetUsers --> retorna todos os usuários
 * GetUser --> retorna um usuário específico
 * CreateUser --> cria um novo usuário
 * UpdateUser --> atualiza um usuário
 * DeleteUser --> deleta um usuário
 *
 */

const UserService = require("../services/UserService");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async getUsers(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }

  async getUser(req, res) {
    try {
      const id = req.params.id;
      const user = await this.userService.getUserById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  }

  createUser(req, res) {
    try {
      const user = req.body;
      const createdUser = this.userService.createUser(user);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const updatedUser = this.userService.updateUser(id, {
        name,
        email,
        password,
      });

      if (!updatedUser) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar o usuário" });
    }
  }

  deleteUser(req, res) {
    try {
      const id = req.params.id;
      this.userService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = UserController;

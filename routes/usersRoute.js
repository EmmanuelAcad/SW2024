var express = require("express");
var router = express.Router();
/**
 * /users => GET => Lista todos os usuários
 * /users => POST => Cria um novo usuário
 * /users/:id => GET => Lista um usuário específico
 * /users/:id => PUT => Atualiza um usuário específico
 * /users/:id => DELETE => Deleta um usuário específico
 */

const UserDao = require("../models/UserDAO");
const User = require("../models/User");
const UserController = require("../controllers/UserController");
const userDao = new UserDao();
const userController = new UserController(userDao);

// Retorna todos os usuários
router.get("/", (req, res, next) => userController.getUsers(req, res, next));

// Retorna usuário por ID
router.get("/:id", (req, res, next) => userController.getUser(req, res, next));

// Cria um novo usuário
router.post("/", (req, res, next) => userController.createUser(req, res, next));

// Atualiza usuário por ID
router.put("/:id", (req, res, next) =>
  userController.updateUser(req, res, next)
);

// Deleta usuário por ID
router.delete("/:id", (req, res, next) =>
  userController.deleteUser(req, res, next)
);

module.exports = router;

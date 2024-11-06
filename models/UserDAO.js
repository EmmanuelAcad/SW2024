const User = require("./User");

class UserDao {
  async getAll() {
    return await User.findAll();
  }

  async add(user) {
    return await User.create(user);
  }

  async update(id, userUpdates) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(userUpdates);
    }
    return null;
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  }

  async getById(id) {
    return await User.findByPk(id);
  }
}

module.exports = UserDao;

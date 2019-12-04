const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, senha } = req.body;

    const user = await User.create({ name, senha });

    return res.json(user);
  }
};
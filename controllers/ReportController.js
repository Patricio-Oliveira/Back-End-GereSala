const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
   

    const users = await User.findAll({
      attributes: ['name', 'senha'],
      where: {
        name: {
          [Op.iLike]: '%Igo Moura'
        }
      },
      include: [
        { 
          association: 'Salas', 
          where: { 
            street: 'Informatica Basica'
          } 
        },
        { 
          association: 'techs', 
          required: false,
          where: {
            name: {
              [Op.iLike]: 'Ciencia%'
            }
          }
        },
      ]
    })

    return res.json(users);
  }
};
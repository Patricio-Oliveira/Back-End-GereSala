const User = require('../models/User');
const Salas = require('../models/Salas');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;
    
        const user = await User.findByPk(user_id, {
            include: { association: 'Salas'}
        });   
        return res.json(user.Salas);
    },

    async Store(req, res) {
      const { user_id } = req.params;
      const { disciplinas,  number } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
    }
    const Salas = await Salas.create({
      disciplinas,
      number,
      user_id,
    });

  return res.json(Salas7);
}
};
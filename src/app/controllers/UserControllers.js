import User from '../models/User';

class UserController {
  async store(req, res) {

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ erro: 'Usuário já existe' });
    }

    const { name, email, provider } = await User.create(req.body);
    return res.json({
      name,
      email,
      provider,
    });
  }
  async getUsers(req, res) {
    const users = await User.findAll();

    if(!users) return res.status(400).json({ erro: 'Não existe usuários' });


    return res.json({users});

  }
}
export default new UserController();
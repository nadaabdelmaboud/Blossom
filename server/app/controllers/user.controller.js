const UserService = require('../services/user.service');
const UserController = {

  async getAllUsers(req, res) {
    const query = req.query;
    const data = await UserService.getAllUsers(query);
    if (data.token) {
      return res.status(200).send(data.token);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getUser(req,res){
    const user = req.params;
    const data = await UserService.getUser(user);
    if(data.token){
      return res.status(200).send(data.token);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async updateUser(req,res){
    const user = req.params;
    const data = await UserService.updateUser(user);
    if(data.token){
      return res.status(200).send(token);
    }
    res.staus(data.err.status).send(data.err.message);
  },
  async deleteUser(req,res){
    const user = req.params;
    const data = await UserService.deleteUser(user);
    if(data.token){
      return res.status(200).send(data.token);
    }
    res.status(data.err.status).send(data.err.message);
  }


};
module.exports = UserController;
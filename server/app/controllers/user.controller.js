const UserService = require('../services/user.service');
const UserController = {

  async getAllUsers(req, res) {
    const query = req.query;
    const data = await UserService.getAllUsers(query);
    if (data.data) {
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async getUser(req,res){
    const user = req.params;
    const data = await UserService.getUser(user);
    if(data.data){
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async updateUser(req,res){
    const user = req.body;
    const id = req.params.id;
    const data = await UserService.updateUser(user,id);
    if(data.data){
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  },
  async deleteUser(req,res){
    const user = req.params;
    const data = await UserService.deleteUser(user);
    if(data.data){
      return res.status(200).send(data.data);
    }
    res.status(data.err.status).send(data.err.message);
  }


};
module.exports = UserController;
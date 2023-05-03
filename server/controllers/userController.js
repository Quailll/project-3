const { User, Review } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then(async (userData)=>{
        res.json(userData);
      })
      .catch((err) =>{
        res.status(500).json(err)
      });
  },
  getSingleUser(req, res) {
    User.findOne({_id: req.params.userId})
      .then((userData)) => {
        if(!userData) {
          return res.status(404).json({message:'user not found'})
        }
      }
      .catch((err)=> {
        return res.status(500).json(err);
      })
  },  
  createUser(req, res){
    User.create(req.body){
      .then((userData)=> {
        res.json(userData)
      })
      .catch((err)=>{
        res.status(500).json(err)
      })
    }
  }
  
};
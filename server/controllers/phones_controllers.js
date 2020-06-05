//
// Phone model is not used as there is no connected database, only for demo purposes
// const Phones = require('../models/Phone'); 
//

const phone_list = require('../phones.json');

class PhoneController {

  // Get All Phones //
  getPhones = async (req, res) => {
    try{
        // const phones = await Phones.find({});  // Phones model for demo only
        res.status(200).json({OK: true, data: phone_list});
    }
    catch(err){
      console.log('Something went wrong!');
      res.json({OK: false, message: err});
    }
  }

  //...more functions for POST, PUT, DELETE, etc.
}

  module.exports = new PhoneController();
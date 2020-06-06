//
// Phone model is not used as there is no connected database, only for demo purposes
// const Phones = require('./model'); 
//

const phone_list = require('../../phones.json');


class PhoneController {

  // Get All Phones //
  getPhones = async (req, res) => {
    // Choose random number between 1 and 5 for setTimeout 
    const waitTime = Math.floor(Math.random() * 5 + 1) * 1000;

    try{
      // const phones = await Phones.find({});  // Demo of fetching phones from DB


      // Simulate response time 
      await new Promise(resolve => setTimeout(resolve, waitTime));

      // Simulate error on unsuccesful request
      // if(waitTime === 5000) {
      //   throw new Error('Something went wrong!');
      // }


      res.status(200).json(phone_list);
    }
    catch(err){
      console.log(err);
      res.json({OK: false, message: err});
    }
  }

  //...more functions for POST, PUT, DELETE, etc.
}

  module.exports = new PhoneController();
//
// Phone model is not used as there is no connected database, only for demo purposes
// const Phones = require('./model'); 
//

const phones = require('../../phones.json');


class PhoneController {

  // Get All Phones //
  getPhones = async (req, res, next) => {
    // Create simulated wait time from 1-5 seconds
    const waitTime = Math.floor(Math.random() * 5 + 1) * 1000;
    // const waitTime = 5000;
    try{
      // const phones = await Phones.find({});  // Demo of fetching phones from DB

      // Simulate response wait time 
      await new Promise(resolve => setTimeout(resolve, waitTime));

      // Simulate error on unsuccesful request if wait time === 5s
      if(waitTime === 5000) {
        throw new Error('An error occured during your request.');
      }

      res.status(200).send(phones);
    }
    catch(err){
      next(err);
      res.json([]);
    }
  }

  //...more functions for POST, PUT, DELETE, etc.
}

  module.exports = new PhoneController();
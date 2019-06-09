'use strict';

var RB = require('rail-baron-lib'),
    util = require('util'),
    getSlotValue = require('../getSlotValue');

module.exports = {

   canHandle: function canHandle(handlerInput) {
      var request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest' && request.intent.name === 'RollCityIntent';
   },

   handle: function handle(handlerInput) {
      var filledSlots = handlerInput.requestEnvelope.request.intent.slots,
          number = parseInt(getSlotValue(filledSlots, 'rolledNumber'), 10),
          oddOrEven = getSlotValue(filledSlots, 'rolledOddOrEven'),
          regionKey = getSlotValue(filledSlots, 'region', 'id'),
          isOdd = (oddOrEven === 'odd'),
          region, city, speech;

      region = RB.model.Region.find_by_key(regionKey);

      if (region) {
         city = RB.services.destination.lookupCity(region, number, isOdd);

         speech = util.format(
            'You rolled a %d %s in the %s. %s Anything else?',
            number,
            oddOrEven,
            region.getName(),
            city ? ('You\'re going to ' + city.getName()) : 'I don\'t know what city that is.'
         );
      } else {
         speech = 'I could not understand what region you were rolling in. Please try again. What did you roll?';
      }

      return handlerInput.responseBuilder.speak(speech).withShouldEndSession(false).getResponse();
   },

};

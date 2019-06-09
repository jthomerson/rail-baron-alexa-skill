'use strict';

var RB = require('rail-baron-lib'),
    util = require('util'),
    getSlotValue = require('../getSlotValue');

module.exports = {

   canHandle: function canHandle(handlerInput) {
      var request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest' && request.intent.name === 'RollRegionIntent';
   },

   handle: function handle(handlerInput) {
      var filledSlots = handlerInput.requestEnvelope.request.intent.slots,
          number = parseInt(getSlotValue(filledSlots, 'rolledNumber'), 10),
          oddOrEven = getSlotValue(filledSlots, 'rolledOddOrEven'),
          isOdd = (oddOrEven === 'odd'),
          region = RB.services.destination.lookupRegion(number, isOdd),
          speech = util.format('You rolled a %d %s.', number, oddOrEven),
          reprompt, builder;

      if (region) {
         speech += util.format(' You\'re going to the %s. What did you roll for a city?', region.getName());
         reprompt = 'What did you roll for a city? For example, I rolled a four even in the Southeast';
      } else {
         speech += 'I don\'t know where that goes. Please try again.';
      }

      builder = handlerInput.responseBuilder.speak(speech).withShouldEndSession(false);
      if (reprompt) {
         builder.reprompt(reprompt);
      }
      return builder.getResponse();
   },

};

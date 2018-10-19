'use strict';

var RB = require('rail-baron-lib'),
    util = require('util'),
    getSlotValue = require('../getSlotValue');

module.exports = {

   canHandle: function canHandle(handlerInput) {
      var request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest' && request.intent.name === 'RollIntent';
   },

   handle: function handle(handlerInput) {
      var filledSlots = handlerInput.requestEnvelope.request.intent.slots,
          number = parseInt(getSlotValue(filledSlots, 'number'), 10),
          oddOrEven = getSlotValue(filledSlots, 'oddOrEven'),
          isOdd = (oddOrEven === 'odd'),
          region = RB.services.destination.lookupRegion(number, isOdd),
          speech;

      parseInt(number, 10);
      speech = util.format(
         'You rolled a %d %s. %s',
         number,
         oddOrEven,
         region ? ('You\'re going to ' + region.getName()) : 'I don\'t know where that goes'
      );

      return handlerInput.responseBuilder.speak(speech).getResponse();
   },

};

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
          number = parseInt(getSlotValue(filledSlots, 'regionNumber'), 10),
          oddOrEven = getSlotValue(filledSlots, 'regionOddOrEven'),
          isOdd = (oddOrEven === 'odd'),
          region = RB.services.destination.lookupRegion(number, isOdd),
          speech;

      speech = util.format(
         'You rolled a %d %s. %s',
         number,
         oddOrEven,
         region ? ('You\'re going to ' + region.getName()) : 'I don\'t know where that goes'
      );

      return handlerInput.responseBuilder.speak(speech).addConfirmIntentDirective().getResponse();
   },

};

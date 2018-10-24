'use strict';

var RB = require('rail-baron-lib'),
    util = require('util'),
    getSlotValue = require('../getSlotValue');

module.exports = {

   canHandle: function canHandle(handlerInput) {
      var request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest' && request.intent.name === 'ChangeRegionIntent';
   },

   handle: function handle(handlerInput) {
      var filledSlots = handlerInput.requestEnvelope.request.intent.slots,
          region1 = getSlotValue(filledSlots, 'regionOne'),
          region2 = getSlotValue(filledSlots, 'regionTwo'),
          speech;

      speech = util.format('You rolled for %s, but want to go to %s. Okay, what did you roll for a city?', region1, region2);
      return handlerInput.responseBuilder.speak(speech).addConfirmIntentDirective().getResponse();
   },

};

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
          number = parseInt(getSlotValue(filledSlots, 'cityNumber'), 10),
          oddOrEven = getSlotValue(filledSlots, 'cityOddOrEven'),
          isOdd = (oddOrEven === 'odd'),
          // TODO: because of the (presumably wrong) way I'm using intents, I don't have
          // access to the region here ...
          region = RB.model.Region.ALL[0],
          city = RB.services.destination.lookupCity(region, number, isOdd),
          speech;

      speech = util.format(
         'You rolled a %d %s in the %s. %s',
         number,
         oddOrEven,
         region.getName(),
         city ? ('You\'re going to ' + city.getName() + '. Where are you coming from?') : 'I don\'t know where that goes'
      );

      return handlerInput.responseBuilder.speak(speech).addConfirmIntentDirective().getResponse();
   },

};

'use strict';

var RB = require('rail-baron-lib'),
    util = require('util'),
    getSlotValue = require('../getSlotValue');

module.exports = {

   canHandle: function canHandle(handlerInput) {
      var request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest' && request.intent.name === 'PayoutIntent';
   },

   handle: function handle(handlerInput) {
      var filledSlots = handlerInput.requestEnvelope.request.intent.slots,
          originCityKey = getSlotValue(filledSlots, 'originCity', 'id'),
          destinationCityKey = getSlotValue(filledSlots, 'destinationCity', 'id'),
          originCity = RB.model.City.find_by_key(originCityKey),
          destinationCity = RB.model.City.find_by_key(destinationCityKey),
          speech, payout;

      if (originCity && destinationCity) {
         payout = RB.services.payout.lookupPayout(originCity, destinationCity);

         if (payout) {
            speech = util.format(
               'You will make $%s from %s to %s. Anything else?',
               payout,
               originCity.getName(),
               destinationCity.getName()
            );
         } else {
            speech = util.format(
               'Hmmm. I\'m not sure how much you make from %s to %s. Please try again.',
               originCity.getName(),
               destinationCity.getName()
            );
         }
      } else if (originCity) {
         speech = 'I could not understand the destination city. Please try again.';
      } else if (destinationCity) {
         speech = 'I could not understand the origin city. Please try again.';
      } else {
         speech = 'I could not understand either of your cities. Please try again.';
      }

      return handlerInput.responseBuilder.speak(speech).withShouldEndSession(false).getResponse();
   },

};

'use strict';

var _ = require('underscore');

module.exports = {

   canHandle: function canHandle(handlerInput) {
      var request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest' && _.contains([ 'AMAZON.CancelIntent', 'AMAZON.StopIntent' ], request.intent.name);
   },

   handle: function handle(handlerInput) {
      return handlerInput.responseBuilder.speak('Bye').getResponse();
   },

};

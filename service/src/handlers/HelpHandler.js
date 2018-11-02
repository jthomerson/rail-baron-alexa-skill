'use strict';

module.exports = {

   canHandle: function canHandle(handlerInput) {
      var request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
   },

   handle: function handle(handlerInput) {
      var speech;

      speech = 'This is Rail Baron Assistant. I can help you with destinating and payout lookup. ' +
         'For example, say "I rolled a four odd", or "I rolled a 12 even in the Southeast", or ' +
         '"How much from Seattle to Miami?"';

      return handlerInput.responseBuilder.speak(speech).withShouldEndSession(false).getResponse();
   },

};

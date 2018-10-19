'use strict';

module.exports = {

   canHandle: function(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
   },

   handle: function handle(handlerInput) {
      console.log('Session ended with reason:', handlerInput.requestEnvelope.request.reason); // eslint-disable-line no-console
      return handlerInput.responseBuilder.getResponse();
   },
};

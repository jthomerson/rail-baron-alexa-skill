'use strict';

module.exports = {

   canHandle: function canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
   },

   handle: function handle(handlerInput) {
      return handlerInput.responseBuilder
         .speak('Let\'s play some Rail Baron! How can I help?')
         .reprompt('What did you roll?')
         .getResponse();
   },

};

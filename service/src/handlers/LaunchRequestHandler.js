'use strict';

module.exports = {

   canHandle: function canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
   },

   handle: function handle(handlerInput) {
      return handlerInput.responseBuilder
         .speak('Let\'s play some Rail Baron! What did you roll?')
         .reprompt('What did you roll?')
         .getResponse();
   },

};

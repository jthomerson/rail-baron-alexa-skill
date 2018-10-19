'use strict';

module.exports = {

   canHandle: function canHandle(handlerInput) {
      console.log('canHandle(%s)', JSON.stringify(handlerInput, null, 3)); // eslint-disable-line no-console
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
   },

   handle: function handle(handlerInput) {
      return handlerInput.responseBuilder
         .speak('Let\'s play some Rail Baron! What did you roll?')
         .reprompt('What did you roll?')
         .getResponse();
   },

};

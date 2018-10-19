'use strict';

module.exports = {

   canHandle: function canHandle() {
      return true;
   },

   handle: function handle(handlerInput, error) {
      console.log('Error handled:', error.message); // eslint-disable-line no-console

      return handlerInput.responseBuilder
         .speak('Sorry, I can\'t understand the command. Please try again.')
         .reprompt('Sorry, I can\'t understand the command. Please try again.')
         .getResponse();
   },

};

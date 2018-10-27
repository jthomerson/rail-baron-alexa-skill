'use strict';

module.exports = {

   canHandle: function canHandle() {
      return true;
   },

   handle: function handle(handlerInput, err) {
      console.log('Error handled:', err.message, err.stack); // eslint-disable-line no-console

      return handlerInput.responseBuilder
         .speak('Sorry, I can\'t understand the command. Please try again.')
         .reprompt('Sorry, I can\'t understand the command. Please try again.')
         .getResponse();
   },

};

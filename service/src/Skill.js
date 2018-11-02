'use strict';

var Alexa = require('ask-sdk-core'),
    skillBuilder = Alexa.SkillBuilders.custom();

/* eslint-disable global-require */

exports.handler = skillBuilder
   .addRequestHandlers(
   require('./handlers/LaunchRequestHandler'),
   require('./handlers/RollRegionIntentHandler'),
   require('./handlers/RollCityIntentHandler'),
   require('./handlers/PayoutIntentHandler'),
   require('./handlers/ExitHandler'),
   require('./handlers/HelpHandler'),
   require('./handlers/SessionEndedHandler')
   )
   .addErrorHandlers(require('./handlers/ErrorHandler'))
   .lambda();

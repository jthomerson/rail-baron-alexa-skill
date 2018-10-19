'use strict';

var Alexa = require('ask-sdk-core'),
    skillBuilder = Alexa.SkillBuilders.custom();

/* eslint-disable no-global-require */

exports.handler = skillBuilder
   .addRequestHandlers(
   require('./handlers/LaunchRequestHandler'),
   require('./handlers/RollIntentHandler'),
   require('./handlers/ExitHandler'),
   require('./handlers/SessionEndedHandler')
   )
   .addErrorHandlers(require('./handlers/ErrorHandler'))
   .lambda();

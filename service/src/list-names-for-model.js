'use strict';

var _ = require('underscore'),
    RB = require('rail-baron-lib');

function list(entities) {
   return _.map(entities, function(e) {
      return { id: e.getKey(), name: { value: e.getName() } };
   });
}

module.exports = {
   regions: function() {
      return list(RB.model.Region.ALL);
   },

   cities: function() {
      return list(RB.model.City.ALL);
   },
};

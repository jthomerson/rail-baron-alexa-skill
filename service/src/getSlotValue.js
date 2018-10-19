'use strict';

module.exports = function getSlotValue(filledSlots, name) {
   return filledSlots[name] &&
      filledSlots[name].resolutions &&
      filledSlots[name].resolutions.resolutionsPerAuthority[0] &&
      filledSlots[name].resolutions.resolutionsPerAuthority[0].status &&
      filledSlots[name].resolutions.resolutionsPerAuthority[0].status.code === 'ER_SUCCESS_MATCH' ?
      filledSlots[name].resolutions.resolutionsPerAuthority[0].values[0].value.name : filledSlots[name].value;
};

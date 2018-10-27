'use strict';

module.exports = function getSlotValue(filledSlots, slotName, userValueField) {
   var valueField = (userValueField || 'name');

   return filledSlots[slotName] &&
      filledSlots[slotName].resolutions &&
      filledSlots[slotName].resolutions.resolutionsPerAuthority[0] &&
      filledSlots[slotName].resolutions.resolutionsPerAuthority[0].status &&
      filledSlots[slotName].resolutions.resolutionsPerAuthority[0].status.code === 'ER_SUCCESS_MATCH' ?
      filledSlots[slotName].resolutions.resolutionsPerAuthority[0].values[0].value[valueField] : filledSlots[slotName].value;
};

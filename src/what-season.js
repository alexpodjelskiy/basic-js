const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
    const month = date.getMonth() + 1;
    switch (month) {
      case 1:
      case 2:
      case 12:
      case 'winter':
        return 'winter';

      case 3:
      case 4:
      case 5:
      case 'spring':
        return 'spring';
      case 6:
      case 7:
      case 8:
      case 'summer':
        return 'summer';
      case 9:
      case 10:
      case 11:
      case 'autumn':
        return 'autumn';
      default:
        break;
    }
  } catch {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};

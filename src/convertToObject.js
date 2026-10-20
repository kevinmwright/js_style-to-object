'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleValues = sourceString.split(';').filter(Boolean);
  const styleObject = {};

  for (const styleValue of styleValues) {
    const [key, value] = styleValue.split(':').map((item) => item.trim());

    styleObject[key] = value;
  }

  return styleObject;
}

module.exports = convertToObject;

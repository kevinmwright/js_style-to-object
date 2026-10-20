'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleValues = sourceString.split(';')
    .map(item => item.trim())
    .filter(item => item !== '');

  const styleObject = {};
  styleValues.forEach((styleValue) => {
    const [key, value] = styleValue.split(':').map((item) => item.trim());
    styleObject[key] = value.at(-1) === ';' ? value.slice(0, -1).trim() : value;
  });

  return styleObject;
}

module.exports = convertToObject;

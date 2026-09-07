// week4/username.js
// Validate a 10-character username that starts with a digit and ends with an alphabet.
// Rules enforced:
// - Total length must be exactly 10 characters
// - First character must be a digit (0-9)
// - Last character must be an alphabetic letter (a-z or A-Z)
// - Middle characters (positions 2-9) must be alphanumeric (letters or digits)

/**
 * Validate a username according to the rules above.
 * @param {string} username
 * @returns {boolean} true if valid, false otherwise
 */
function validateUsername(username) {
  if (typeof username !== 'string') return false;
  // Regex explanation:
  // ^        - start of string
  // \d      - first character is a digit
  // [A-Za-z0-9]{8} - next 8 characters are alphanumeric
  // [A-Za-z] - last character is an alphabet
  // $        - end of string
  const re = /^\d[A-Za-z0-9]{8}[A-Za-z]$/;
  return re.test(username);
}

// Examples / quick tests
if (require.main === module) {
  const tests = [
    '1abcdefgHa', // valid? length 10, starts 1, ends a -> valid
    '9A2345678Z', // valid
    '12abc4567$', // invalid: last char not alphabet
    'a123456789', // invalid: does not start with digit
    '1abc',       // invalid: too short
    '1abcd_efgh', // invalid: underscore not allowed in middle
  ];

  tests.forEach(t => {
    console.log(`${t} -> ${validateUsername(t)}`);
  });
}

// Export for use in other modules / tests
module.exports = { validateUsername };

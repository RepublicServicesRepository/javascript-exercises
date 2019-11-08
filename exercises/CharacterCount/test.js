const characterCount = require('./index.js');

describe('Character Count function', () => {
  test('should exists', () => {
    expect(characterCount).toBeDefined();
    expect(typeof characterCount).toEqual('function');
  });

  test('should return mississippi map back', () => {
    expect(characterCount('mississippi')).toEqual({
      'm': 1,
      'i': 4,
      's': 4,
      'p': 2
    });
  });

  test('should return \"hello bob\" without the space', () => {
    expect(characterCount('hello bob')).toEqual({
      'h': 1,
      'e': 1,
      'l': 2,
      'o': 2,
      'b': 2
    });
  });
});

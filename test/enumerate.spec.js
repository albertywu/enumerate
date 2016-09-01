const enumerate = require('../enumerate')

const expect = require('expect')

const runTests = (fn, tests) => tests.forEach(([args, output]) => expect(fn.apply(this, args)).toBe(output))

describe('enumerate', function() {

  it('should pass all tests', function() {
    const tests = [
      [
        [[], 4, 'People'],
        ''
      ],
      [
        [['Rick'], 4, 'People'],
        'Rick'
      ],
      [
        [['Rick', 'Boris'], 4, 'People'],
        'Rick and Boris'
      ],
      [
        [['Rick', 'Boris', 'Albert'], 4, 'People'],
        'Rick, Boris and Albert'
      ],
      [
        [['Rick', 'Boris', 'Albert', 'Parag'], 4, 'People'],
        '4 People'
      ]
    ]

    runTests(enumerate, tests)
  })

})

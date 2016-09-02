const enumerate = require('../enumerate').enumerate
const expect = require('expect')

describe('enumerate', function() {

  describe('defaults', function() {
    it('should return an empty string, when words is length 0', function() {
      expect(
        enumerate([])
      ).toBe('')
    })

    it('should return "X", when words is length 1', function() {
      expect(
        enumerate(['Screwdriver'])
      ).toBe('Screwdriver')
    })

    it('should return "X and Y" when words is length 2', function() {
      expect(
        enumerate(['Screwdriver', 'Hammer'])
      ).toBe('Screwdriver and Hammer')
    })

    it('should return "X, Y, and Z" when words is length 3', function() {
      expect(
        enumerate(['Screwdriver', 'Hammer', 'Drill'])
      ).toBe('Screwdriver, Hammer, and Drill')
    })

    it('should return "4 Things" when words is length 4', function() {
      expect(
        enumerate(['Screwdriver', 'Hammer', 'Drill', 'Saw'])
      ).toBe('4 Things')
    })
  })

  describe('cutoff option', function() {
    it('should cut off of at 3, when words is length 3 and cutoff is 3', function() {
      expect(
        enumerate(['Screwdriver', 'Hammer', 'Drill'], 3)
      ).toBe('3 Things')
    })

    it('should not cut off of at 2, when words is length 2 and cutoff is 3', function() {
      expect(
        enumerate(['Screwdriver', 'Hammer'], 3)
      ).toBe('Screwdriver and Hammer')
    })
  })

  describe('placeholder option', function() {
    it('should use a difference placeholder word, when placeholder is specified and cutoff is reached', function() {
      expect(
        enumerate(['Screwdriver', 'Hammer', 'Drill'], 3, 'Thingamabobs')
      ).toBe('3 Thingamabobs')
    })
  })

  describe('testing different AND optional for localized', function() {
    it('should be able to be localized', function() {
    expect(
        enumerate(['Rob', 'Bob', 'Todd'], 4, 'people', '&')
    ).toBe('Rob, Bob, & Todd')
    })
  })

  describe('testing the optional oxford comma', function() {
    it('should not insert the oxford comma', function() {
        expect(
            enumerate(['Rob', 'Bob', 'Todd'], 4, 'people', '&', true)
        ).toBe('Rob, Bob & Todd')
    });
  });

})

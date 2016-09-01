## enumerate-words
A human-friendly enumeration of words. Uses oxford comma ;)

## install
`npm install enumerate-words`

## signature
```typescript
enumerate(words: string[], cutoff?: number, placeholder?: string) => string
```

## examples
```javascript
// default usage
console.log(enumerate(['Screwdriver'])) // 'Screwdriver'
console.log(enumerate(['Screwdriver', 'Hammer'])) // 'Screwdriver and Hammer'
console.log(enumerate(['Screwdriver', 'Hammer', 'Drill'])) // 'Screwdriver, Hammer, and Drill'
console.log(enumerate(['Screwdriver', 'Hammer', 'Drill', 'Saw'])) // '4 Things'

// cutoff option
console.log(enumerate(['Screwdriver', 'Hammer', 'Drill'], 3)) // '3 Things'
console.log(enumerate(['Screwdriver', 'Hammer'], 3)) // 'Screwdriver and Hammer'

// placeholder option
console.log(enumerate(['Screwdriver', 'Hammer', 'Drill'], 3, 'Thingamabobs')) // '3 Thingamabobs'
console.log(enumerate(['Screwdriver', 'Hammer'], 3)) // 'Screwdriver and Hammer'
```

## caveats (ES6 only!)
Assumes that your javascript runtime supports the following ES6 features:
* const
* array destructuring
* default params
* string interpolation

## contributing
Clone the repo, and do:

`npm install`

`npm test`

Put up a PR when tests pass!

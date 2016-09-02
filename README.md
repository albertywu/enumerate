## enumerate-words
A human-friendly enumeration of words. Uses oxford comma ;)

## install
`npm install enumerate-words`

## signature
```typescript
enumerate({
  words: string[],
  cutoff?: number,
  placeholder?: string,
  andStr?: string,
  noOxford?: boolean
}) => string
```

## examples
See [tests](https://github.com/albertywu/enumerate/blob/master/test/enumerate.spec.js) for all supported usages.

## contributing
Install

`npm install`

Build

`npm run build`
`npm run watch`

Test

`npm test`

Put up a PR when tests pass!

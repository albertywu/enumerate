## enumerate-words
A human-friendly enumeration of words. No oxford comma ;)

## install
`npm install enumerate-words`

## signature
```typescript
enumerate(words: string[], cutoff: number, placeholder: string) => string
```

## examples
```javascript
console.log(enumerate(['Boo'], 4, 'People')) // 'Boo'
console.log(enumerate(['Boo', 'Bob'], 4, 'People')) // 'Boo and Bob'
console.log(enumerate(['Boo', 'Bob', 'Foo'], 4, 'People')) // 'Boo, Bob and Foo'
console.log(enumerate(['Boo', 'Bob', 'Foo', 'Moo'], 4, 'People')) // '4 People'
```

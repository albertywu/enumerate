// [Q] why does tsc complain with the following error if I don't export this interface?
// error: enumerate.ts(10,14): error TS4025: Exported variable 'enumerate' has or is using private name 'Args'.
export interface Args {
  words: string[]
  cutoff?: number
  placeholder?: string
  andStr?: string
  noOxford?: boolean
}

export const enumerate = ({
  words,
  cutoff = 4,
  placeholder = 'Things',
  andStr = 'and',
  noOxford = false
}: Args): string => {
  if (words.length === 0) return ''
  else if (words.length === 1) return words[0]
  else if (words.length >= cutoff) return `${words.length} ${placeholder}`
  else return `${words.slice(0, words.length-1).join(', ')}${words.length === 2 || noOxford ? '' : ','} ${andStr} ${[...words].pop()}`
}

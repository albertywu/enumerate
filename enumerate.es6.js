// (words: string[], cutoff: number, placeholder: string) => string
export const enumerate = (words, cutoff = 4, placeholder = 'Things') => {
    if (words.length === 0)
        return '';
    else if (words.length === 1)
        return words[0];
    else if (words.length >= cutoff)
        return `${words.length} ${placeholder}`;
    else
        return `${words.slice(0, words.length - 1).join(', ')}${words.length === 2 ? '' : ','} and ${[...words].pop()}`;
};
export const foo = 43;
export const boo = 43;
export const roo = 555;

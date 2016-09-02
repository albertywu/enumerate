export interface Args {
    words: string[];
    cutoff?: number;
    placeholder?: string;
    andStr?: string;
    noOxford?: boolean;
}
export declare const enumerate: ({
  words,
  cutoff = 4,
  placeholder = 'Things',
  andStr = 'and',
  noOxford = false
}: Args) => string;

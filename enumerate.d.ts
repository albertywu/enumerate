export interface Args {
    words: string[];
    cutoff?: number;
    placeholder?: string;
    andStr?: string;
    noOxford?: boolean;
}
export declare function enumerate({words, cutoff, placeholder, andStr, noOxford}: Args): string;

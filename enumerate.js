"use strict";
exports.enumerate = function (words, cutoff, placeholder, andStr, noOxford) {
    if (cutoff === void 0) { cutoff = 4; }
    if (placeholder === void 0) { placeholder = 'Things'; }
    andSt = andStr || 'and'; // allows falsey values
    if (noOxford === void 0) { noOxford = false; }
    if (words.length === 0)
        return '';
    else if (words.length === 1)
        return words[0];
    else if (words.length >= cutoff)
        return words.length + " " + placeholder;
    else
        return "" + words.slice(0, words.length - 1).join(', ') + (words.length === 2 || noOxford ? '' : ',') + " " + andStr + " " + words.slice().pop();
};

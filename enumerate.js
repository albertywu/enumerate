"use strict";
function enumerate(_a) {
    var words = _a.words, _b = _a.cutoff, cutoff = _b === void 0 ? 4 : _b, _c = _a.placeholder, placeholder = _c === void 0 ? 'Things' : _c, _d = _a.andStr, andStr = _d === void 0 ? 'and' : _d, _e = _a.noOxford, noOxford = _e === void 0 ? false : _e;
    if (words.length === 0)
        return '';
    else if (words.length === 1)
        return words[0];
    else if (words.length >= cutoff)
        return words.length + " " + placeholder;
    else
        return "" + words.slice(0, words.length - 1).join(', ') + (words.length === 2 || noOxford ? '' : ',') + " " + andStr + " " + words.slice().pop();
}
exports.enumerate = enumerate;

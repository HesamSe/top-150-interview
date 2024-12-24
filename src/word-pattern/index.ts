function wordPattern(pattern: string, s: string): boolean {
    const patternsMap = new Map();
    const wordsMap = new Map();
    const words = s.split(' ');
    if(pattern.length !== words.length) return false

    for(let i=0; i< pattern.length; i++) {
        const w = patternsMap.get(pattern[i]);
        const p = wordsMap.get(words[i]);
        if(!w) {
            if(p) return false;
            patternsMap.set(pattern[i], words[i]);
            wordsMap.set(words[i], pattern[i]);
        }
        else if(w !== words[i] || p !== pattern[i])
            return false;
    }

    return true;
};
function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>();
    for(let i=0; i<magazine.length; i++) {
        const val = map.get(magazine[i]);
        if(!!val) {
            map.set(magazine[i], val + 1)
        }
        else map.set(magazine[i], 1);
    }

    for(let i=0; i< ransomNote.length; i++) {
        const val = map.get(ransomNote[i])
        if(!!val) {
            map.set(ransomNote[i], val - 1)
        }
        else return false;
    }
    return true;
}


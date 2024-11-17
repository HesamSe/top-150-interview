export default function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0
    while(j < t.length) {
        if(t[j] === s[i])
            i++;

        j++;
    }
    
    return i === s.length;
};
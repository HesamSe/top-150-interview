export default function validAnagram(s: string, t: string): boolean {
    const map = new Map();

    if(s.length !== t.length) return false;

    let i = 0;
    while(i<s.length){
        const x = map.get(s[i]) ?? 0;
        map.set(s[i], x + 1);

        i++;
    }

    let j = 0;
    while(j < t.length) {
        const x = map.get(t[j]);
        if(!x) return false;
        map.set(t[j] ,x - 1);

        j++;
    }

    return true;
};
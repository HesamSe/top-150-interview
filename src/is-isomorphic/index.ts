export default function isIsomorphic(s: string, t: string): boolean {
    let map = new Map();
    let map2 = new Map();
    let i=0;
    
    while(i< s.length) {
        if(!map.has(s[i]) && !map2.has(t[i])) {
            map.set(s[i], t[i]);
            map2.set(t[i], s[i]);
        }
        else {
            if(map.get(s[i]) !== t[i] || map2.get(t[i]) !== s[i])
                return false;
        }
        i++;
    }

    return true;
};
function fun(n: number, map: Map<number,number>) {
    if(map.has(n)) return false;
    const digits = n.toString().split('').map(s => parseInt(s));
    let sum = 0;
    for(const digit of digits) {
        sum += digit * digit;
    }
    if(sum === 1) return true;
    map.set(n, sum);
    return fun(sum, map);
}

function isHappy(n: number): boolean {
    let map = new Map();
    return fun(n,map)
}
export default isHappy;
function romanToInt(s: string): number {
    let int = 0;
    let i = 0;
    while (i < s.length) {
        if(s[i] === 'I') {
            if(s[i + 1] === 'V'){
                int += 4;
                i++;
            }
            else if(s[i+1] === 'X') {
                int += 9;
                i++;
            }
            else {
                int += 1;
            }
        }
        else if(s[i] === 'X') {
            if(s[i+1] === 'L') {
                int += 40;
                i++;
            }
            else if(s[i+1] === 'C') {
                int += 90;
                i++;
            }
            else int += 10
        }
        else if(s[i] === 'C') {
            if(s[i+1] === 'D') {
                int += 400;
                i++;
            }
            else if(s[i+1] === 'M') {
                int += 900;
                i++;
            }
            else int += 100
        }
        else if(s[i] === 'V') int +=5;
        else if(s[i] === 'L') int += 50;
        else if(s[i] === 'D') int += 500;
        else if(s[i] === 'M') int += 1000;
        i++;
    }
    return int;
}
export default romanToInt;
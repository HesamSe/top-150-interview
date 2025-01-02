function lengthOfLastWord(s: string): number {
    let i = s.length - 1;
    let j = 0;
    while(i>=0){
        if(s[i]=== ' ') {
            if(j>0) return j
        }
        else {
            j++;
        }
        i--;

    }
    return j;
}

export default lengthOfLastWord;
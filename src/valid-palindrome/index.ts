export default function validPalindrome(s: string): boolean {
    const str = s.replace(/[^0-9a-z]/gi , "").toLowerCase();

    let i = 0;
    let j = str.length - 1;
    while(i < j) {
        if(str[i] !== str[j])
            return false;
        i++;
        j--;
    }

    return true;
};
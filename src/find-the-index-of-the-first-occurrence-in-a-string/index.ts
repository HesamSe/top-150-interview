// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

function strStr(haystack: string, needle: string): number {
    let h = 0;
    let n = 0;

    while(h < haystack.length) {
        if(haystack[h] === needle[n]) {
            n++;
            if(n === needle.length) {
                return h - needle.length + 1;
            }
        }
        else {
            h = h-n;
            n = 0;
        }

        h++;
    }
    return -1;
};

export default strStr;
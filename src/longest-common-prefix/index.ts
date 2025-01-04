function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    for(let i=0; i<strs[0].length; i++){
        for(let j=1;j<strs.length; j++){
            if(strs[j][i] !== strs[0][i])
                return prefix;
        }
        prefix = strs[0].substring(0,i+1)
    }
    return prefix;
}

export default longestCommonPrefix;
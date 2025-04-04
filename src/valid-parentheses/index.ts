
function isValid(s: string): boolean {
    const stack: string[] = [];
    const openParentheses = ['{', '[', '('];
    const closeParentheses = ['}', ']', ')'];
    for(let i=0;i<s.length; i++) {
        if(openParentheses.includes(s[i])) {
            stack.push(s[i]);
        }
        else if(closeParentheses.includes(s[i])) {
            const index = closeParentheses.indexOf(s[i]);
            const p = stack.pop();
            if(p !== openParentheses[index])
                return false;
        }
    }
    return !stack.pop();
}

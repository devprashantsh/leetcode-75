/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let ans = ''
    const stack  = [];
    let current = 0;

    for (const char of s){
        if (!isNaN(char)){
            current = current * 10 + parseInt(char)
        }else if (char === '['){
            stack.push({num: current, str: ans})
            ans = '';
            current = 0;
        }else if (char === ']'){
            const {num,str} = stack.pop()
            ans = str + ans.repeat(num)
        }else {
            ans += char
        }
    }
    return ans;
};

const str1 = "3[a2[c]]"
const result = decodeString(str1)
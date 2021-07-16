// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // Solution 1
    const charMap = {}
    let max= 0
    let maxChar = ''

    for(let x of str){
        if(charMap[x]){
            charMap[x]++
        } else {
            charMap[x] = 1
        }
    }

    for(let x in charMap) {
        if(charMap[x] > max){
            max = charMap[x]
            maxChar = x
        }
    }

    return maxChar
}

module.exports = maxChar;

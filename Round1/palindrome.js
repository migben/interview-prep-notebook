// const palindrome = str => {
//     const reverse = str.split('').reverse().join('')

//     return str === reverse;
// }

// Solution 2

const palindrome = str => {
    return str.split('').every((char, idx) => {// addvance array helper every
        return char === str[str.length - i - 1]
    })
}
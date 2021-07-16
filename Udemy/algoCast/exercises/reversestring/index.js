// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // Solution 1
    // return str.split('').reverse().join('')
    // Solution 2
    // let reversed = ''
    // for(let x of str) {
    //     reversed = x + reversed
    // }
    // return reversed
    // Solution 3
    str.split('').reduce((reversed, character)=> {
        return character + reversed
    }, '')

}

module.exports = reverse;

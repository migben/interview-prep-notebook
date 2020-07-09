// Given a string, return a new string w/
// the reversed order of characters.
// Outputs
// reverse('apple') ==> 'leppa'
// reverse('bye') ==> 'eyb'

//answer 1

// const reverse = str => {
//     let arr = str.split('')
//     arr.reverse();
//     let answer = arr.join('')
//     console.log(answer)
//     return answer
// }

//answer 2 - same thing but shorter looking

// const reverse = str =>{
//     return str.split('').reverse().join('')
// }

// answerr 3

// const reverse = str =>{
//     let reversed = ''

//     for( let char of str) {
//         reversed = char + reversed
//     }

//     return reversed
// }

// answer 4 

const reverse = str =>{
    return str.split('').reduce((rev, char) =>  char + rev
    , '')
}

reverse('Mangu')
console.log('-----------------')
reverse('Cheetos!')
// Fibonacci is a series of numbers in which each number
// is the sum of the two preceding numbers.
// the simplest series 1, 1, 2, 3, 5, 8, etc.

const fibonacci = (n) =>{ 
    if(n < 2){
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
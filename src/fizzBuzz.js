export function fizzBuzz (num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else {
        return num
    }
}

export default function fizzBuzzRange (start, end) {
    let result = []
    for (let i = start; i<= end; i++) {
        result.push(fizzBuzz(i))
    }
    return result
}

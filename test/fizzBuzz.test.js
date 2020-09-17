// Add the unit tests of the sum function here

import fizzBuzzRange, {fizzBuzz} from "../src/fizzBuzz";

describe('FizzBuzz game', () => {
    describe('Individual Fizzbuzz', () => {
        test('If the number is divisible by 3 and 5, return "FizzBuzz"', () => {
            expect(fizzBuzz(15)).toBe('FizzBuzz')
            expect(fizzBuzz(45)).toBe('FizzBuzz')
        })
        test('If the number is divisible by 3, return "Fizz"', () => {
            expect(fizzBuzz(3)).toBe('Fizz')
            expect(fizzBuzz(9)).toBe('Fizz')
        })

        test('If the number is divisible by 5, return "Buzz"', () => {
            expect(fizzBuzz(5)).toBe('Buzz')
            expect(fizzBuzz(20)).toBe('Buzz')
        })

        test('Else, return the number', () => {
            expect(fizzBuzz(2)).toBe(2)
            expect(fizzBuzz(14)).toBe(14)
        })
    })

    describe('Range fizzBuzz', () => {
        test('Generates range of fizzbuzz', () => {
            expect(fizzBuzzRange(1, 15)).toStrictEqual([
                1,
                2,
                'Fizz',
                4,
                'Buzz',
                'Fizz',
                7,
                8,
                'Fizz',
                'Buzz',
                11,
                'Fizz',
                13,
                14,
                'FizzBuzz'
            ])
        })

        test('Generates range of 100 fizzbuzz', () => {
            expect(fizzBuzzRange(1, 100)).toStrictEqual([
                1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
                7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
                13,     14,     'FizzBuzz', 16,     17,     'Fizz',
                19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
                'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
                31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
                37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
                43,     44,     'FizzBuzz', 46,     47,     'Fizz',
                49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
                'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
                61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
                67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
                73,     74,     'FizzBuzz', 76,     77,     'Fizz',
                79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
                'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
                91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
                97,     98,     'Fizz',     'Buzz'
            ])
        })
    })
})

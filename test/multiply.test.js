// Add the unit tests of the sum function here

import multiply from "../src/multiply";

describe('Function operates basic multiplication', () => {
    test('adds 2 * 2 to equal 4', () => {
        expect(multiply(2, 2)).toBe(4)
    })

    test('adds 5 * 8 to equal 40', () => {
        expect(multiply(5, 8)).toBe(40)
    })
})

describe('Type validation', () => {
    test('Checks if arg 1 is number', () => {
        expect(multiply('5', 1)).toBe(false)
    })
    test('Checks if arg 2 is number', () => {
        expect(multiply(5, '1')).toBe(false)
    })
    test('Checks if both args are numbers', () => {
        expect(multiply('5', '1')).toBe(false)
    })
})


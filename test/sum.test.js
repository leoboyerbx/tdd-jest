// Add the unit tests of the sum function here
import sum from "../src/sum"

describe('Function operates basic sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('adds 5 + 8 to equal 13', () => {
        expect(sum(5, 8)).toBe(13)
    })
})

describe('Type validation', () => {
    test('Checks if arg 1 is number', () => {
        expect(sum('5', 1)).toBe(false)
    })
    test('Checks if arg 2 is number', () => {
        expect(sum(5, '1')).toBe(false)
    })
    test('Checks if both args are numbers', () => {
        expect(sum('5', '1')).toBe(false)
    })
})

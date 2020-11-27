// import { num2str } from '../helpers/helpers.js';
const num2str = require('../helpers/helpers.js');

describe('num2str function', () => {
    let array;
    let age;

    beforeEach(() => {
        age = 23;
        array = [" год", " года", " лет"];
    })

    test('Should return str with space', () => {
        expect(num2str(age, array)).toBe(' года')
    });

    test('Should NOT return str without space', () => {
        expect(num2str(age, array)).not.toBe('года')
    });

    test('Should NOT return falsy', () => {
        expect(num2str(age, array)).not.toBeFalsy()
    });

});


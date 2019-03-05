const Util = require('./math');

/** isPrime */
it('isPrime/lower than 2', function () {
    expect(() => Util.isPrime(0)).toThrow(/0 is lower than 2/);
});

it('isPrime/is negative', function () {
    expect(() => Util.isPrime(-1)).toThrow(/-1 is lower than 2/);
});

it('isPrime/is not numeric', function () {
    expect(() => Util.isPrime("too")).toThrow(/too is not a number/);
});

it('isPrime/float number', function () {
    expect(() => Util.isPrime(2.4)).toThrow(/2.4 is not integer/);
});

it('isPrime/4 is prime number ', function () {
    expect(Util.isPrime(4)).toBeFalsy();
});

it('isPrime/2 is prime number ', function () {
    expect(Util.isPrime(2)).toBeTruthy();
});

it('isPrime/7 is prime number ', function () {
    expect(Util.isPrime(7)).toBeTruthy();
});

it('isPrime/works with big number ', function () {
    expect(Util.isPrime(6564564545234554552)).toBeFalsy();
});

/** SumPrime */
it('sumPrime/negative number', function () {
    expect(() => Util.sumPrime(-3)).toThrow(/-3 is negative number/);
});

it('sumPrime/float number ', function () {
    expect(() => Util.sumPrime(3.5)).toThrow(/3.5 is not integer/);
});

it('sumPrime/not numeric', function () {
    expect(() => Util.sumPrime("too")).toThrow(/too is not a number/);
});

it('sumPrime/10 ', function () {
    expect(Util.sumPrime(10)).toBe(14)
});
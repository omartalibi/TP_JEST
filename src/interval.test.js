const interval = require('./interval.js');


it('overlaps/when_its_same_interval', function () {
    let interval1 = new interval(5,8);
    let interval2 = new interval(5,8);

    overlaps = interval1.overlaps(interval2);

    expect(overlaps).toBeTruthy()
});

it('overlaps/when_its_interval1_biggerThan_interval2', function () {
    let interval1 = new interval(3,9);
    let interval2 = new interval(6,7);

    overlaps = interval1.overlaps(interval2);

    expect(overlaps).toBeTruthy()
});

it('overlaps/when_its_interval1_smallerThan_interval2', function () {
    let interval1 = new interval(6,7);
    let interval2 = new interval(3,9);

    overlaps = interval1.overlaps(interval2);

    expect(overlaps).toBeTruthy()
});

//======

it("includes/when_interval1_biggerThan_interval2", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(2,9)
    expect(interval1.includes(interval2)).toBe(true);
})

it("includes/when_interval1_sameStart_interval2", function(){
    let interval1 = new Interval(2,9)
    let interval2 = new Interval(2,10)
    expect(interval1.includes(interval2)).toBe(false);
})

it("includes/when_interval1_sameEnd_interval2", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(1,9)
    expect(interval1.includes(interval2)).toBe(true);
})

it("includes/when_interval1_Equals_interval2", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(1,10)
    expect(interval1.includes(interval2)).toBe(true);
})

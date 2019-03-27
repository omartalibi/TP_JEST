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
    let interval2 = new Interval(3,7)
    expect(interval1.includes(interval2)).toBe(true);
})

it("includes/when_interval1_sameStart_interval2", function(){
    let interval1 = new Interval(2,6)
    let interval2 = new Interval(2,7)
    expect(interval1.includes(interval2)).toBe(false);
})

it("includes/when_interval1_sameStart_interval2", function(){
    let interval1 = new Interval(1,5)
    let interval2 = new Interval(1,3)
    expect(interval1.includes(interval2)).toBe(true);
})

it("includes/when_interval1_Equals_interval2", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(1,10)
    expect(interval1.includes(interval2)).toBe(true);
})

//======

it("includes/when_interval1_BiggerThan_interval2", function(){
    let interval1 = new Interval(1,20)
    let interval2 = new Interval(4,9)
    expect(interval1.union(interval2)).toEqual([1,20]);
})

it("includes/when_interval1_inside_interval2", function(){
    let interval1 = new Interval(4,7)
    let interval2 = new Interval(1,8)
    expect(interval1.union(interval2)).toEqual([1,8]);
})

it("includes/when_interval1_partiallyInside_interval2", function(){
    let interval1 = new Interval(1,6)
    let interval2 = new Interval(2,10)
    expect(interval1.union(interval2)).toEqual([1,10]);
})

it("includes/when_interval2_partiallyInside_interval1", function(){
    let interval1 = new Interval(2,7)
    let interval2 = new Interval(1,6)
    expect(interval1.union(interval2)).toEqual([1,7]);
})

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

it("union/when_interval1_BiggerThan_interval2", function(){
    let interval1 = new Interval(1,20)
    let interval2 = new Interval(4,9)
    expect(interval1.union(interval2)).toEqual([1,20]);
})

it("union/when_interval1_inside_interval2", function(){
    let interval1 = new Interval(4,7)
    let interval2 = new Interval(1,8)
    expect(interval1.union(interval2)).toEqual([1,8]);
})

it("union/when_interval1_partiallyInside_interval2", function(){
    let interval1 = new Interval(1,6)
    let interval2 = new Interval(2,10)
    expect(interval1.union(interval2)).toEqual([1,10]);
})

it("union/when_interval2_partiallyInside_interval1", function(){
    let interval1 = new Interval(2,7)
    let interval2 = new Interval(1,6)
    expect(interval1.union(interval2)).toEqual([1,7]);
})

//=======
it("intersection/when_interval1_sameStart_interval2", function(){
    let interval1 = new Interval(3,7)
    let interval2 = new Interval(3,4)
    expect(interval1.intersection(interval2)).toEqual([3,4]);
})

it("intersection/when_interval1_sameEnd_interval2", function(){
    let interval1 = new Interval(7,10)
    let interval2 = new Interval(8,10)
    expect(interval1.intersection(interval2)).toEqual([7,8]);
})

it("intersection/when_interval1_same_interval2", function(){
    let interval1 = new Interval(5,7)
    let interval2 = new Interval(5,7)
    expect(interval1.intersection(interval2)).toEqual([5,7]);
})

it("intersection/when_interval1_different_interval2", function(){
    let interval1 = new Interval(7,9)
    let interval2 = new Interval(1,4)
    expect(interval1.intersection(interval2)).toEqual([]);
})

//====
it("exclusion/when_interval1_different_interval2", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(2,9)
    expect(interval1.exclusion(interval2)).toEqual([1,2],[9,10]);
})

it("exclusion/when_interval2_different_interval1", function(){
    let interval1 = new Interval(2,9)
    let interval2 = new Interval(1,10)
    expect(interval1.exclusion(interval2)).toEqual([1,2],[9,10]);
})

it("exclusion/when_interval1_inside_interval2", function(){
    let interval1 = new Interval(11,20)
    let interval2 = new Interval(1,10)
    expect(interval1.exclusion(interval2)).toEqual([11,20]);
})

it("exclusion/when_interval2_inside_interval1", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(11,20)
    expect(interval1.exclusion(interval2)).toEqual([1,2],[9,10]);
})

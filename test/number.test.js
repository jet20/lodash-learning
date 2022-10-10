const _ = require('lodash');

it('clamp', function () {
    expect(_.clamp(-10, -5, 5)).toBe(-5);
    expect(_.clamp(10, -5, 5)).toBe(5);    
    expect(_.clamp(3, -5, 5)).toBe(3);
});

it('inRange', function () {
    expect(_.inRange(3, 2, 4)).toBe(true);
    expect(_.inRange(4, 8)).toBe(true);
    expect(_.inRange(4, 2)).toBe(false);
    expect(_.inRange(2, 2)).toBe(false);
    expect(_.inRange(1.2, 2)).toBe(true);
    expect(_.inRange(5.2, 4)).toBe(false);
    expect(_.inRange(-3, -2, -6)).toBe(true);    
});



describe('random', function () {
    it('random (0~5)', function () {
        for (let i = 0; i < 1000; i++) {
            const r1 = _.random(0, 5);
            expect(r1 >= 0 && r1 <= 5).toBe(true);
            expect(_.isInteger(r1)).toBe(true);
        }
    });

    it('random (~5)', function () {
        for (let i = 0; i < 1000; i++) {
            const r1 = _.random(5);
            expect(r1 >= 0 && r1 <= 5).toBe(true);
            expect(_.isInteger(r1)).toBe(true);
        }
    });

    it('random (~5F)', function () {
        let isFloat = false;
        for (let i = 0; i < 1000; i++) {
            const r1 = _.random(5, true);
            expect(r1 >= 0 && r1 <= 5).toBe(true);
            if(!_.isInteger(r1)) {
                isFloat = true;
            }
        }
        expect(isFloat).toBe(true);
    });

    it('random (1.2~5.2F)', function () {
        for (let i = 0; i < 1000; i++) {
            const r1 = _.random(1.2, 5.2);
            expect(r1 >= 1.2 && r1 <= 5.2).toBe(true);

        }
    });


});
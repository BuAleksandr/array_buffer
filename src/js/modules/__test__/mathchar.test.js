import MathChar from '../mathchar';

test('MathChar distance=2, stoned=false and attack', () => {
    const result = new MathChar('ALex');
    result.attack = 200;
    result.distance = 2;

    expect(result.stoned).toEqual(false);
    expect(result.distance).toEqual(2);
    expect(result.attack).toEqual(180);
});

test('MathChar distance=3, stoned=true and attack', () => {
    const result = new MathChar('ALex');
    result.attack = 200;
    result.distance = 3;
    result.stoned = true;

    expect(result.distance).toEqual(3);
    expect(result.stoned).toEqual(true);
    expect(result.attack).toEqual(152);
});

test('MathChar distance=9999, stoned=true and attack', () => {
    const result = new MathChar('ALex');
    result.attack = 200;
    result.distance = 999;
    result.stoned = true;

    expect(result.attack).toEqual(0);
});
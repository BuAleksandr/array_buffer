import Magician from '../magician';

test('Magician', () => {
    const values = {
        name: 'ALex',
        type: 'Magician',
        _attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        _stoned: false,
        _distance: 1,
        attackRatio: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
    };

    const result = new Magician('ALex');

    expect(result).toEqual(values);
});
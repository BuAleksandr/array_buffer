import MathChar from './mathchar';

export default class Magician extends MathChar {
    constructor(name) {
        super(name);
        super.type = 'Magician';
        this.attack = 10;
        this.defence = 40;
    }
}
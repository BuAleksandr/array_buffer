import MathChar from './mathchar';

export default class Daemon extends MathChar {
    constructor(name) {
        super(name);
        super.type = 'Daemon';
        this.attack = 10;
        this.defence = 40;
    }
}
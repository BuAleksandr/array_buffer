import Character from './character';

export default class MathChar extends Character {
    constructor(name) {
        super(name);
        this._stoned = false;
        this._distance = 1;
        this.attackRatio = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set distance(value) {
        this._distance = value;
    }

    get distance() {
        return this._distance;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack() {
        const ratio = this._distance <= 10 ? this._distance - 1 : 9;
        const attackRatio = this._attack * this.attackRatio[ratio];

        if (!this._stoned) {
            return attackRatio;
        }

        const attackRatioStoned = Math.round(attackRatio - Math.log2(this._distance) * 5);
        return attackRatioStoned > 0 ? attackRatioStoned : 0;
    }
}
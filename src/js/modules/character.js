export default class Character {
    constructor(name) {
        if (typeof name !== 'string') {
            throw new Error('Имя должно быть строкой');
        }
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя должно состоять от 2 до 10 символов');
        }

        this.name = name;
        this.health = 100;
        this.level = 1;
    }

    /* метод для второй задачи */
    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего');
        }

        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
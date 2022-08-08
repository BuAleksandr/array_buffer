export default class ArrayBufferConverter {
    constructor(buffer) {
        this.load(buffer);
    }

    load(buffer) {
        this.buffer = new Uint16Array(buffer);
    }

    toString() {
        return String.fromCharCode(...this.buffer);
    }
}
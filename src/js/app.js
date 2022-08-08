import Daemon from './modules/daemon';
import ArrayBufferConverter from './modules/ArrayBufferConverter';
import getBuffer from './modules/getBuffer';

const daemon = new Daemon('Alex');

console.log(daemon);
daemon.attack = 200;
daemon.distance = 2;
daemon.stoned = true;
console.log(daemon.attack);

const arrBuffer = new ArrayBufferConverter();
arrBuffer.load(getBuffer());
console.log(arrBuffer.toString());
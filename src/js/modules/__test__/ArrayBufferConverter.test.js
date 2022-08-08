import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('ArrayBufferConverter', () => {
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const arrBuffer = new ArrayBufferConverter();
    arrBuffer.load(getBuffer());

    expect(arrBuffer.toString()).toEqual(expected);
});
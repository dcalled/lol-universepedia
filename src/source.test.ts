import { testyFun } from './source';
import { expect } from 'chai';

describe('texty test', () => {
    it('should return 10', () => {
        expect(testyFun(1, 2, 3, 4)).to.equal(10);
    });
});
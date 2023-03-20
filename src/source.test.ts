import { testyFun, scrapPage} from './source';
import { expect } from 'chai';

describe('texty test', () => {
    it('should return 10', () => {
        expect(testyFun(1, 2, 3, 4)).to.equal(10);
    });
});

describe('Text raw Scrapper', () => {
    it('should throw error', async () => {
        await scrapPage('https://www.google.com', async page => {
            expect(await page.content.bind(page)).to.throw();
        });
    });
});

describe('Text raw Scrapper', () => {
    it('should check if the page exists', async () => {
        await scrapPage('https://www.google.com', async page => {
            expect(await page.content()).to.not.be.empty.and.to.not.throw();
        });
    });
});
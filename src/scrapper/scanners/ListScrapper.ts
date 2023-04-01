import { Viewport } from 'puppeteer';
import { scrapPage } from '../../source';

interface DefaultListItem {
    url: string;
    name: string;
}

type DefaultList = Array<DefaultListItem>;

export async function scrapDefaultList(url: string, listSelector: string, keyTag: string, buttonSelector?: string, viewport?: Viewport) {
    return await scrapPage<DefaultList>(url, async page => {
        let urls: DefaultList = [];
        for (let i = 0; i<40; i++) {
            await page.waitForSelector(listSelector);
            let newUrls = await page.$$eval(listSelector, (links: Element[], tag: string) => {
                return links.map(el => {
                    const t = {
                        url: el.hasAttribute('href') ? (<HTMLAnchorElement>el).href : el.querySelector("a")!.href,
                        name: Array.from(el.querySelectorAll(tag))!.reduce((prev, curr) => `${prev}${curr.textContent}`, '')
                    };
                    return t;
                })
            }, keyTag);
            if(!buttonSelector) {
                urls = newUrls;
                break;
            }
            for(let i = 0; i < newUrls.length; ++i) {
                const e1 = newUrls[i];
                const haveItem = urls.filter(e2 => e1.name == e2.name && e1.url == e2.url).length > 0;
                if(!haveItem) urls.push(e1);
            }
            await (await page.$(buttonSelector))!.click();
        }
        return urls;
    }, true, viewport);
}

/* export async function scrapDefaultList(url: string, listSelector: string, keyTag: string): Promise<DefaultList> {
    return await scrapPage<DefaultList>(url, async page => {
        await page.waitForSelector(listSelector);
        let urls = await page.$$eval(listSelector, (links: Element[], tag: string) => {
            return links.map(el => {
                const t = {
                    url: el.hasAttribute('href') ? (<HTMLAnchorElement>el).href : el.querySelector("a")!.href,
                    name: Array.from(el.querySelectorAll(tag))!.reduce((prev, curr) => `${prev}${curr.textContent}`, '')
                };
                return t;
            })
        }, keyTag);
        return urls;
    });
} */
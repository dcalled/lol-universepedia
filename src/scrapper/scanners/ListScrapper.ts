import { scrapPage } from '../../source';

interface DefaultListItem {
    url: string;
    name: string;
}

type DefaultList = Array<DefaultListItem>;

export async function scrapDefaultList(url: string, listSelector: string, keyTag: string): Promise<any> {
    return await scrapPage/*<DefaultList>*/(url, async page => {
        await page.waitForSelector(listSelector);
        let urls = await page.$$eval(listSelector, (links: Element[], tag: string) => {
            return links.map(el => {
                const t = { 
                    url: el.querySelector("a")!.href, 
                    name: Array.from(el.querySelectorAll(tag))!.reduce((prev, curr) => `${prev}${curr.textContent}`, '')
                };
                return t;
            })
        }, keyTag);
        return urls;
    });
}



import { Singleton } from '../../common/Singleton';


export async function scrapDefaultList(url: string, listSelector: string, keyTag: string) {
    const browser = await Singleton.getBrowserInstance();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(listSelector);
    let urls = await page.$$eval(listSelector, (links, tag) => {
        return links.map(el => {
            const t = { 
                url: el.querySelector("a")!.href, 
                name: el.querySelector(<string>tag)!.textContent
            };
            return t;
        })
    }, keyTag);
    console.log(urls)

    await page.close();
}

import { scrapPage } from "./source";
import { scrapDefaultList } from "./scrapper/scanners/ListScrapper";
import sc from "./scrapper/scanners/config.json" assert { type: "json" };

/* scrapPage('https://www.google.com', async page => {
    console.log(await page.content());
}); */

const lang = "en_US";

//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.list.path}`, sc.champion.list.selector, sc.champion.list.name_tag));
//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.path}/aphelios`, sc.champion.related.selector, sc.champion.related.name_tag));
console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.path}/ahri`, sc.champion.stories.selector, sc.champion.stories.name_tag));
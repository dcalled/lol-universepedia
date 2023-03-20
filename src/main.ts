import { scrapPage } from "./source";
import { scrapDefaultList } from "./scrapper/scanners/ListScrapper";
import sc from "./scrapper/scanners/config.json" assert { type: "json" };

/* scrapPage('https://www.google.com', async page => {
    console.log(await page.content());
}); */

const lang = "en_US";

scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.list.path}`, sc.champion.list.selector, sc.champion.list.name_tag);
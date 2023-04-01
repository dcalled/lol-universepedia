import { scrapPage } from "./source";
import { scrapDefaultList } from "./scrapper/scanners/ListScrapper";
import sc from "./scrapper/scanners/config.json" assert { type: "json" };
import { Singleton } from "./common/Singleton";

/* scrapPage('https://www.google.com', async page => {
    console.log(await page.content());
}); */

const lang = "es_MX";

//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.list.path}`, sc.champion.list.selector, sc.champion.list.name_tag));
//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.path}/aphelios`, sc.champion.related.selector, sc.champion.related.name_tag));
//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.champion.path}/ahri`, sc.champion.stories.selector, sc.champion.stories.name_tag));

//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.region.list.path}`, sc.region.list.selector, sc.region.list.name_tag));
//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.region.path}/piltover`, sc.region.champs.selector, sc.region.champs.name_tag));
//console.log(await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.region.path}/ionia`, sc.region.stories.selector, sc.region.stories.name_tag, sc.region.stories.scroll));

//const res = await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.story.list.path}`, sc.story.list.selector, sc.story.list.name_tag, undefined, {width: 1000, height: 25000});
const res = await scrapDefaultList(`${sc.baseURL}/${lang}/${sc.story.path}/twilight-of-the-gods`, sc.story.champs.selector, sc.story.champs.name_tag);
console.log(res, res.length);
import { Page, Viewport } from "puppeteer";
import { Singleton } from "./common/Singleton";

export function testyFun(...numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n)
}

export async function scrapPage<T>(url: string, cb: (page: Page) => Promise<T>, endBrowser: boolean = false, viewport?: Viewport): Promise<T> {
    try {
        const browser = await Singleton.getBrowserInstance();
        const page = await browser.newPage();
        if(viewport) await page.setViewport(viewport);
        await page.goto(url);
        const returnVal = await cb(page);
        await page.close();
        if(endBrowser) await browser.close();
        return returnVal;
    } catch (error) {
        throw error;
    }

}
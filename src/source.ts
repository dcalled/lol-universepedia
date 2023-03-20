import * as puppeteer from "puppeteer";

export function testyFun(...numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n)
}

export async function scrapPage(url: string, cb: (page: puppeteer.Page) => Promise<any>) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await cb(page);
        await browser.close();
    } catch (error) {
        throw error;
    }

}
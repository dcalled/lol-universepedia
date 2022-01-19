import puppeteer from "puppeteer";

export class ScrapperBrowser {
    private static browser: puppeteer.Browser;

    private constructor() {}

    public static async getBrowserInstance(): Promise<puppeteer.Browser> {
        if(ScrapperBrowser.browser == undefined) 
            ScrapperBrowser.browser = await puppeteer.launch()

        return ScrapperBrowser.browser;
    }
}
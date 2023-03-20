import * as puppeteer from "puppeteer";

export class Singleton {
    private static browser: puppeteer.Browser;

    constructor() {}

    public static async getBrowserInstance(): Promise<puppeteer.Browser> {
        if(Singleton.browser == undefined || !Singleton.browser.isConnected()) 
            Singleton.browser = await puppeteer.launch();
        
        return Singleton.browser;
    }
}
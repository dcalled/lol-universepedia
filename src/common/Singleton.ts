import { Browser, launch } from "puppeteer";

export class Singleton {
    private static browser: Browser;

    constructor() {}

    public static async getBrowserInstance(): Promise<Browser> {
        if(Singleton.browser == undefined || !Singleton.browser.isConnected()) 
            Singleton.browser = await launch();
        
        return Singleton.browser;
    }
}
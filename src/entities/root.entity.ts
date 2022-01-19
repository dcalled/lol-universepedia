export abstract class Root {
    private _url: string;

    constructor(url: string) {
        this._url = url;
    }

    get url(): string {
        return this._url;
    }

    equals(other: Root) {
        return this._url === other.url;
    }
}
import { addToUniqueList, Comparable, removeRepeated } from "../common/Comparable";
import { Champion } from "./champion";


export class Story implements Comparable<Story> {
    private _title: string;
    private _author: string;
    private _text: string;
    private _url: string;
    private _champions: Champion[];

    constructor(title: string = "", author: string = "", text: string = "", 
                url: string = "", champions: Champion[] = []) {
        this._title = title;
        this._author = author;
        this._text = text;
        this._url = url;
        this._champions = removeRepeated(champions);
    }

    public addChampion(champ: Champion) {
        addToUniqueList(this.champions, champ);
    }

    //Setters
    public set champions(champions: Champion[]) {
        this._champions = removeRepeated(champions);
    }

    //Getters
    public get title(): string {
        return this._title;
    }

    public get author(): string {
        return this._author;
    }
    
    public get text(): string {
        return this._text;
    }

    public get champions(): Champion[] {
        return this._champions;
    }

    public get url() {
        return this._url;
    }


    public equals(other: Story):boolean {
        return  this.title  == other.title &&
                this.author == other.author &&
                this.text   == other.text;
    }
}
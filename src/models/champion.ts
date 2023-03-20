import { addToUniqueList, Comparable, defaultRegion, removeRepeated } from "../common/Comparable";
import { Region } from "./region";
import { Story } from "./story";

interface Phrase {
    text: string,
    author: string,
}


export class Champion implements Comparable<Champion> {
    private _name: string;
    private _slogan: string;
    private _phrase: Phrase;
    private _region: Region;
    private _role: string;
    private _url: string;
    private _relatedChamps: Champion[]
    private _stories: Story[];

    constructor(name: string = "", role: string = "", slogan: string = "", 
                phrase: {text: string, author: string} = {text: "", author: ""}, 
                url: string = "", region: Region = defaultRegion, 
                relatedChamps: Champion[] = [], stories: Story[] = []) {
        this._name = name;
        this._slogan = slogan;
        this._phrase = phrase;
        this._region = region;
        this._role = role;
        this._url = url;
        this._relatedChamps = removeRepeated(relatedChamps);
        this._stories = removeRepeated(stories);
    }

    public addRelatedChamp(champ: Champion) {
        addToUniqueList(this.relatedChampions, champ);
    }

    public addStory(story: Story) {
        addToUniqueList(this.stories, story);
    }

    //Setters
    public set region(region: Region) {
        this.region = region;
    }

    public set relatedChampions(champs: Champion[]) {
        this._relatedChamps = removeRepeated(champs);
    }

    public set stories(stories: Story[]) {
        this._stories = removeRepeated(stories);
    }
    
    //Getters
    public get name(): string {
        return this._name;
    }

    public get region(): Region {
        return this._region;
    }

    public get role(): string {
        return this._role;
    }

    public get URL(): string {
        return this._url;
    }

    public get relatedChampions(): Champion[] {
        return this._relatedChamps;
    }

    public get slogan(): string {
        return this._slogan;
    }

    public get phrase(): Phrase {
        return this._phrase;
    }

    public get stories(): Story[] {
        return this._stories;
    }


    public equals(other: Champion): boolean {
        return  this.name == other.name &&
                this.role  == other.role  &&
                this.URL  == other.URL;
    }
    
}
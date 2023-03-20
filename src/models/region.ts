import { addToUniqueList, Comparable, removeRepeated } from "../common/Comparable";
import { Champion } from "./champion";
import { Story } from "./story";


export class Region implements Comparable<Region> {
    private _name: string;
    private _description: string;
    private _url: string;
    private _champions: Champion[];
    private _stories: Story[];

    constructor(name: string = "", description: string = "", url: string = "", 
                champions: Champion[] = [], stories: Story[] = []) {
        this._name = name;
        this._description = description;
        this._url = url;
        this._champions = removeRepeated(champions);
        this._stories = removeRepeated(stories);
    }

    public addChampion(champ: Champion) {
        addToUniqueList(this.champions, champ);
    }

    public addStory(story: Story) {
        addToUniqueList(this.stories, story);
    }

    //Setters
    public set champions(champions: Champion[]) {
        this._champions = removeRepeated(champions);
    }

    public set stories(stories: Story[]) {
        this._stories = removeRepeated(stories);
    }

    //Getters
    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get champions(): Champion[] {
        return this._champions;
    }

    public get stories(): Story[] {
        return this._stories;
    }

    public get URL(): string {
        return this._url;
    }

    public equals(other: Region): boolean {
        return this.name == other.name &&
        this.description == other.description;
    }
}
import { addToUniqueArray } from "src/common/utilities";
import { Root } from "./root.entity";
import { Region } from "./region.entity";
import { Story } from "./story.entity";

export class Champion extends Root {


    private _name!: string;
    private _slogan!: string;
    private _phrase!: string;
    private _description!: string;
    private _role!: string;
    private _region!: Region;
    private _bio!: Story;
    private _colorStory!: Story;
    private _relatedChamps: Champion[] = [];

    constructor(url: string) {
        super(url);
    }


    // Getters
    get name(): string {
        return this._name;
    }

    get slogan(): string {
        return this._slogan;
    }

    get phrase(): string {
        return this._phrase;
    }

    get description(): string {
        return this._description;
    }

    get role(): string {
        return this._role;
    }

    get region(): Region {
        return this._region;
    }

    get bio(): Story {
        return this._bio;
    }

    get colorStory(): Story {
        return this._colorStory;
    }

    get relatedChamps(): Champion[] {
        return this._relatedChamps;
    }


    // Setters
    set name(name: string) {
        this._name = name;
    }

    set slogan(slogan: string) {
        this._slogan = slogan;
    }

    set phrase(phrase: string) {
        this._phrase = phrase;
    }

    set description(description: string) {
        this._description = description;
    }

    set role(role: string) {
        this._role = role;
    }

    set region(region: Region) {
        this._region = region;
    }

    set bio(bio: Story) {
        this._bio = bio;
    }

    set colorStory(colorStory: Story) {
        this._colorStory = colorStory;
    }

    addRelatedChamp(...champs: Champion[]) {
        addToUniqueArray(this._relatedChamps, ...champs);
    }


    equals(other: Champion): boolean {
        return this._name === other.name;
    }
}
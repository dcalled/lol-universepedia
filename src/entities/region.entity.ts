import { addToUniqueArray } from "src/common/utilities";
import { Champion } from "./champion.entity";
import { Root } from "./root.entity";
import { Story } from "./story.entity";

export class Region extends Root {
    
    private _name!: string;
    private _description!: string;
    private _relatedStories!: Story[];
    private _champs!: Champion[];

    constructor(url: string) {
        super(url);
    }


    // Getters
    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get relatedStories(): Story[] {
        return this._relatedStories;
    }

    get champs(): Champion[] {
        return this._champs;
    }


    // Setters
    set name(name: string) {
        this._name = name;
    }

    set description(description: string) {
        this._description = description;
    }

    addRelatedStory(...stories: Story[]) {
        addToUniqueArray(this._relatedStories, ...stories);
    }

    addChamp(...champs: Champion[]) {
        addToUniqueArray(this._champs, ...champs);
    }


}
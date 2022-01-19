import { addToUniqueArray } from "src/common/utilities";
import { Champion } from "./champion.entity";
import { Root } from "./root.entity";

export enum StoryType {
    Bio,
    Color,
    Standard,
}

export enum StoryPartType {
    Paragraph,
    Separator,
}

export interface StoryPart {
    type: StoryPartType;
    text?: string;
}

export class Story extends Root {
    
    private _title!: string;
    private _author!: string;
    private _text!: string;
    private _type!: StoryType;
    private _champs: Champion[] = [];

    constructor(url: string) {
        super(url);
    }

    // Getters
    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get text(): string {
        return this._text;
    }

    get type(): StoryType {
        return this._type;
    }

    get champs(): Champion[] {
        return this._champs;
    }


    // Setters
    set title(title: string) {
        this._title = title;
    }

    set author(author: string) {
        this._author = author;
    }

    set text(text: string) {
        this._text = text;
    }

    set type(type: StoryType) {
        this._type = type;
    }

    addChamp(...champs: Champion[]) {
        addToUniqueArray(this._champs, ...champs);
    }

}
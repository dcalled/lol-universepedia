import { Champion } from "./champion.entity";

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

export class Story {
    
    private _title: string;
    private _author!: string;
    private _text!: string;
    private _type!: StoryType;
    private _champs!: Champion[];

    constructor(title: string) {
        this._title = title;
    }

}
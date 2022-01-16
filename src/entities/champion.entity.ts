import { Region } from "./region.entity";
import { Story } from "./story.entity";

export class Champion {

    private static repository: Champion[] = [];

    private _name: string;
    private _slogan!: string;
    private _phrase!: string;
    private _description!: string;
    private _role!: string;
    private _region!: Region;
    private _bio!: Story;
    private _colorStory!: Story;
    private _relatedChamps!: Champion[];

    private constructor(name: string) {
        this._name = name;
    }

    static getChamp(name: string): Champion {
        let champ = this.repository.find(champ => champ.name === name);
        if(!champ) {
            champ = new Champion(name);
            this.repository.push(champ);
        }
        return champ;
    }

    static getAllChamps(): Champion[] {
        return Champion.repository;
    }


    // Getters
    get name() {
        return this._name;
    }
}
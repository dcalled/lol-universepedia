import { Champion } from "../models/champion";
import { Region } from "../models/region";
import { Story } from "../models/story";

export interface Comparable<T> {
    equals(other: T): boolean;
}

export function haveItem<T extends Comparable<T>>(arr: Array<T>, e: T): boolean {
    for(const e2 of arr) 
        if(e.equals(e2)) return true;
    
    return false;
}

export function removeRepeated<T extends Comparable<T>>(arr: Array<T>): Array<T> {
    let cleanArray: Array<T> = [];
    for(const e of arr) 
        if(!haveItem(cleanArray, e)) cleanArray.push(e);

    return cleanArray;
}

export function addToUniqueList<T extends Comparable<T>>(arr: Array<T>, e: T) {
    if(!haveItem(arr, e))
        arr.push(e);
}

export const defaultRegion = new Region("", "", "");
export const defaultChampion = new Champion("", "", "", {text: "", author: ""}, "");
export const defaultStory = new Story("", "", "", "")
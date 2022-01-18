export interface Comparable<T> {
    equals(other: T): boolean;
}
export function haveItem<T extends Comparable<T>>(arr: Array<T>, item: T) {
    return arr.some(el => el.equals(item));
}


export function addToUniqueArray<T extends Comparable<T>>(arr: Array<T>, ...items: T[]) {
    items.forEach(item => {
        if(haveItem(arr, item)) 
            arr.push(item);
    });
}
export function testyFun(...numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n)
}
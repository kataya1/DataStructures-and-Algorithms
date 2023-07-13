// """
// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// """

function addToArrayForm(num: number[], k: number): number[] {
    let idx = num.length;
    const result: number[] = [];

    while (--idx >= 0 || k > 0) {
        if (idx >= 0) k += num[idx];

        result.push(Math.floor(k % 10));
        k = Math.floor(k / 10);
    }

    return result.reverse();
};
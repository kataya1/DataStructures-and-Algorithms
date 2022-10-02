function QS(arr: number[]): number[] {
    if (arr.length < 2) return arr
    let randIndx = Math.floor(Math.random() * arr.length)
    let pivot = arr[randIndx]
    let less = arr.filter((e, i) => {
        if (i == randIndx) return false
        return e < pivot
    })
    let more = arr.filter((e, i) => {
        if (i == randIndx) return false
        return e >= pivot
    })
    return [...QS(less), pivot, ...QS(more)]
}

console.log(QS([4, 9, 8, 1, 2, 0, 3, 7, 99, 23, 8]))
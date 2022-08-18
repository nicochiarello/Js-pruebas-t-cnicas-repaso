function compare(arr) {

    let closest = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] <= Math.abs(closest) ) {
            closest = arr[i]
        }
        if (arr[i] < 0 && Math.abs(arr[i]) < Math.abs(closest) ) {
            closest = arr[i]
        }
    }

    return closest

}

compare([ -5,-4, 5, 17, 25]) // -4
compare([ -5,-4, 4, 5, 17, 25]) // 4



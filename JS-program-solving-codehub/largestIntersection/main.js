function findDonationTargetDay(a, b) {
    const aSort = a.sort((a, b) => b - a)
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (aSort[i] == b[j]) {
                return aSort[i]
            }
        }
    }
}

function calculateSaudiFlagScore(elements) {
    let count = 0
    elements.forEach((v) => {
        switch (v) {
            case 'Green':
                count += 10
                break;
            case 'Sword':
                count += 15
                break;
            case 'Arabic Calligraphy':
                count += 20
                break;
            case 'Palm':
                count += 5
                break;
            default:
                count += 0
        }
    })
    return count
}

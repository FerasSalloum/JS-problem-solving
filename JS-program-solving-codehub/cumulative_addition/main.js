
function cumulative_addition(elements_array) {
    const total = elements_array.reduce((acc, css) => acc + css, 0)
    return [total, elements_array.length]
}

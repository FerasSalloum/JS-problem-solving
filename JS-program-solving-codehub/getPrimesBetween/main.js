function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPrimesBetween(a, b) {
    return Array.from({ length: b - a + 1 }, (_, i) => a + i)
        .filter(isPrime);
}

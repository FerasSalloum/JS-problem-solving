function largestIntersection(a, b) {
    const setB = new Set(b);
    const intersection = a.filter(num => setB.has(num));
    return intersection.length ? Math.max(...intersection) : -1;
}

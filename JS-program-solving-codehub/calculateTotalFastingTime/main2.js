const toHours = t => {
    const [h, m] = t.split(":").map(Number);
    return h + m / 60;
};

const totalFastingHours = (startTimes, endTimes) =>
    startTimes.reduce((acc, t, i) => acc + (toHours(endTimes[i]) - toHours(t)), 0);

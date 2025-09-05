function calculateTotalFastingTime(startTimes, endTimes) {
    let totalHours = 0;

    for (let i = 0; i < startTimes.length; i++) {
        const [sh, sm] = startTimes[i].split(":").map(Number);
        const [eh, em] = endTimes[i].split(":").map(Number);

        const start = sh + sm / 60;
        const end = eh + em / 60;

        totalHours += end - start;
    }

    return totalHours;
}

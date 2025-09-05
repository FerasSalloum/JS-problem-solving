function maxIrrigationPeriod(irrigation, water) {
    let start = 0;         // بداية النافذة
    let sum = 0;           // مجموع استهلاك المياه في النافذة الحالية
    let maxLength = 0;     // أطول فترة متتالية تحقق الشرط

    for (let end = 0; end < irrigation.length; end++) {
        sum += irrigation[end];    // أضف استهلاك اليوم الحالي

        // إذا تجاوز المجموع الكمية المتاحة، نحرّك start لتقليل المجموع
        while (sum > water) {
            sum -= irrigation[start];
            start++;
        }

        // بعد التأكد أن المجموع <= water، نحسب طول الفترة الحالية
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}


// ### تحدي 1: إيجاد العنصر الفريد
// المستوى: سهل
// وصف التحدي:
// في مجموعة من الأرقام، كل رقم يظهر مرتين بالضبط باستثناء رقم واحد يظهر مرة واحدة فقط. مهمتك هي العثور على هذا الرقم الفريد.
// المثال:
// المدخل:
// nums = [ 1, 2, 1, 2,4]
// الإخراج:
// 4
// الشرح:
// الرقم 4 هو الوحيد الذي لم يتكرر.
// النص المساعد
// المخرجات المتوقعة:
// الاختبار 1:
// المدخلات (Inputs):
// nums = [2, 2, 1]
// المخرجات (Outputs):
// 1
// الاختبار 2:
// المدخلات (Inputs):
// nums = [4, 1, 2, 1, 2]
// المخرجات (Outputs):
// 4
// الاختبار 3:
// المدخلات (Inputs):
// nums = [1]
// المخرجات (Outputs):
// 1
function findSingleNumber(nums) {
    let reslt = []
    nums.forEach(num => {
        if (reslt.includes(num)) {
            reslt.splice(reslt.indexOf(num), 1)
        } else {
            reslt.push(num)
        }
    });
    return reslt[0]
}
const nums = [4, 1, 2, 1, 2]
console.log(findSingleNumber(nums))
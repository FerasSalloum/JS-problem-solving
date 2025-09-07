
// ### تحدي 2: البحث عن أزواج مجموعها يساوي قيمة معينة
// المستوى: متوسط
// وصف التحدي:
// أعطيتك قائمة من الأرقام الصحيحة وقيمة مستهدفة. مهمتك هي العثور على زوجين من الأرقام المختلفة في القائمة يكون مجموعهما يساوي القيمة المستهدفة، وإرجاع مؤشريهما (index).
// المثال:
// المدخل:
// nums = [2, 7, 11, 15]
// target = 9
// الإخراج:
// [0, 1]
// الشرح:
// بما أن nums[0] + nums[1] يساوي 2 + 7 = 9، نرجع المؤشرين [0, 1].
// النص المساعد:
// المخرجات المتوقعة:
// الاختبار 1:
// المدخلات (Inputs):
// nums = [2, 7, 11, 15], target = 9
// المخرجات (Outputs):
// [0, 1]
// الاختبار 2:
// المدخلات (Inputs):
// nums = [3, 2, 4], target = 6
// المخرجات (Outputs):
// [1, 2]
// الاختبار 3:
// المدخلات (Inputs):
// nums = [3, 3], target = 6
// المخرجات (Outputs):  
// [0, 1]
const sort = (arr) => {
      if (arr.length <= 1) return arr; 
    let left = [],
        right = [],
        povit = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < povit) { left.push(arr[i]) } else { right.push(arr[i]) }
    }
    return arr = [...sort(left), povit, ...sort(right)]
}
// function findTwoSum(nums, target) {
//     let arrReslt = [],
//         numsCopy = [],
//         total = 0, first = 0, second = 1
//         // numsCopy = [...nums]; numsCopy.sort((a, b) => a - b)
//         numsCopy = sort(nums);
//     console.log("numsCopy: ", numsCopy)

//     while (second < numsCopy.length) {
//         if (first >= 0 && second >= 0) {
//             arrReslt = [numsCopy[first], numsCopy[second]]
//             total = arrReslt.reduce((acc, num) => acc += num, 0)
//         }
//         if (total < target) {
//             first++
//             second++
//         } else if (total > target) {
//             first--
//         } else if (total == target) {
//             return [nums.indexOf(arrReslt[0]), nums.indexOf(arrReslt[1], nums.indexOf(arrReslt[0]) + 1)]
//         }
//     }
// }
function findTwoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // console.log ([...map.values()])
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return null;
}
const nums = [ 2, 11, 15,7], target = 9
console.log(findTwoSum(nums, target))

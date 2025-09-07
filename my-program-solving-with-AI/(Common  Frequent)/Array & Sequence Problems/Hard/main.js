// ### تحدي 3: إيجاد أطول سلسلة فرعية فريدة موجبة
// المستوى: صعب+
// وصف التحدي:
// أعطيتك مصفوفة من الأعداد الصحيحة (قد تحتوي على موجبة وسالبة).
// مهمتك هي إيجاد أطول سلسلة فرعية متتالية تحتوي على أعداد موجبة فقط
// ولا تحتوي على أي أعداد مكررة.
// يجب أن تُرجع كلًا من طول السلسلة والمصفوفة نفسها.
//
// المثال:
// المدخل:
// nums = [0, 1, -2, 1, 3, 2, 4]
// الإخراج:
// { length: 4, subarray: [1, 3, 2, 4] }
//
// الشرح:
// أطول سلسلة موجبة بدون تكرار هي [1, 3, 2, 4] وطولها 4.
//
// النص المساعد:
//
// ---
// المخرجات المتوقعة:

// الاختبار 1:
// المدخلات (Inputs):
// nums = [1, 2, 3, 4]
// المخرجات (Outputs):
// { length: 4, subarray: [1, 2, 3, 4] }

// الاختبار 2:
// المدخلات (Inputs):
// nums = [1, 2, 3, 1, 2, 3, 4]
// المخرجات (Outputs):
// { length: 4, subarray: [1, 2, 3, 4] }

// الاختبار 3:
// المدخلات (Inputs):
// nums = [0, 1, -2, 1, 3, 2, 4]
// المخرجات (Outputs):
// { length: 4, subarray: [1, 3, 2, 4] }

// الاختبار 4:
// المدخلات (Inputs):
// nums = [5, 5, 5, 5]
// المخرجات (Outputs):
// { length: 1, subarray: [5] }

// الاختبار 5:
// المدخلات (Inputs):
// nums = [-1, -2, -3]
// المخرجات (Outputs):
// { length: 0, subarray: [] }

// الاختبار 6:
// المدخلات (Inputs):
// nums = [2, 7, 2, 3, 7, 4, 5, 6]
// المخرجات (Outputs):
// { length: 6, subarray: [2, 3, 7, 4, 5,6] }
// const nums = [0, 1, -2, 1, 3, 2, 4] 
function longestUniquePositiveSubarray(nums) {
    let arr = [],longest=[]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            if (arr.includes(nums[i])) {
                arr.indexOf(nums[i])
                arr.slice((arr.indexOf(nums[i]))+1)
            } else {
                arr.push(nums[i])
            }
        } else {
            arr = []
        }
        if (arr.length > longest.length){
            longest = arr
        }
    }
    return { length: longest.length, subarray: longest }
}
const nums = [1, 2, 3, 1, 2, 3, 4]
console.log(longestUniquePositiveSubarray(nums))
// { length: 4, subarray: [1, 3, 2, 4] }
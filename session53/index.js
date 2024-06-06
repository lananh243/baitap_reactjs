for (var i = 0; i < 5; i++) {
    console.log(i);
}
function myForEach(numbers, callback) {
    callback(numbers);
}
var callback = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("V\u1ECB tr\u00ED : ".concat(i, " | Ph\u1EA7n t\u1EED : ").concat(arr[i], " | M\u1EA3ng : ").concat(arr));
    }
};
var numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, callback);
var calculateBMI = function (weight, height) {
    if (weight <= 0 || height <= 0) {
        throw new Error("Cân nặng và chiều cao không được nhỏ hơn 0");
    }
    if (typeof weight !== "number" && typeof height !== "number") {
        throw new Error("Kiểu dữ liệu chưa chính xác");
    }
    if (Number.isNaN(weight) || Number.isNaN(height)) {
        throw new Error("Kiểu dữ liệu không phải NaN");
    }
    var result = weight / height;
    return result;
};
try {
    var result = calculateBMI(10, 0);
    console.log(result);
}
catch (error) {
    console.log(error);
}
// 1. log i =0
// 2. Tăng i lên i
// 3. Kiểm tra điều kiện
// 3.1 Nếu điều kiện true thì log
// 3.1 Thoát vòng lặp
// Break points 

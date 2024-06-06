for(let i=0; i<5; i++){
    console.log(i);
    
}
function myForEach(numbers: number[], callback:any):void {
    callback(numbers)
}

const callback = (arr:number[]) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Vị trí : ${i} | Phần tử : ${arr[i]} | Mảng : ${arr}`);
        
        
    }
}
const numbers = [1,2,3,4,5,6];
myForEach(numbers,callback );

const calculateBMI = (weight: number, height: number) => {
    if(weight <= 0 || height <= 0){
        throw new Error ("Cân nặng và chiều cao không được nhỏ hơn 0")
    }
    if(typeof weight !== "number" && typeof height !== "number") {
        throw new Error ("Kiểu dữ liệu chưa chính xác")
    }
    if(Number.isNaN(weight) || Number.isNaN(height)){
        throw new Error ("Kiểu dữ liệu không phải NaN")
    }
    let result = weight / height;

    return result;
}
try {
    const result = calculateBMI(10,0);
    console.log(result);
    
} catch (error) {
    console.log(error);
    
}
// 1. log i =0
// 2. Tăng i lên i
// 3. Kiểm tra điều kiện
// 3.1 Nếu điều kiện true thì log
// 3.1 Thoát vòng lặp
// Break points 
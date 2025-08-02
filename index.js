
// let toan = "9"
// let ly = "8"
// let hoa = "7"

// // toan = parseFloat(toan);
// // ly = parseFloat(ly);
// // hoa = parseFloat(hoa);

// let tb = (toan + ly + hoa) / 3;
// let loai = "";

// if (tb >= 8) {
//         loai = "Giỏi";
//       } else if (tb >= 6.5) {
//         loai = "Kha";
//       } else if (tb >= 5) {
//         loai = "Trung binh";
//       } else {
//         loai = "Yeu";
//       }

// console.log(`Điểm trung bình: ${tb.toFixed(2)} - Xếp loại: ${loai}`);


// cho 1 mang 1 den 1o tinh toong so nguyen trong mang
//lay so chia  het cho 2
// let 
// let  sum =0;for(let i =0; i<arr.length;i++) {
//     if(arr[i] % 2 === 0) {
//       console.log(arr[i]);
    
//     }
// }


// for(let i =0; i<arr.length;i++) {
//     sum += arr[i];
// }
// console.log(sum)

// 


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i] +5; 
//   }
// }arr=[1,2,3,4,5,6,7,8,9,0];
// console.log(sum);
//  k chia het cho 2
// let sum5 =0;
// for(let i =0; i<arr.length;i++) {
//     if(arr[i] % 2 !== 0) {
//       sum5 += arr[i] +5;
//     }
// }

// console.log(sumAB(1,2))
// function sumAB(a,b){
//   return a + b;
// }
// //es6
// const sumAB2 = (a,b) => {
//   return a+ b;
// }
// console.log(sumAB2(1,4))

// // ham tinh tich 3 so

// const tich = (a,b,c) => {
//   return a* b *c;
// }


// const tich1 = (func) => {
//   return func(2 ,2,2);
// }
// console.log(tich1(tich));

//
// const multiply = (array) => {
//   let sum =0;
//    for(let i =0; i<array.length;i++) {
//        sum += array[i]; 
//  }
//  return sum;

// }
// const  multiply1=(func) => {
//   return func=[2,2,2] ;
// }

// const result =multiply1(multiply);
// console.log(result);

// Sửa lại object cho đúng cú pháp
// const objectStudent = {
//   id: 1,
//   name: "Nguyen Van A",
//   age: 18,
//   class123: "Java"
// };

// const createStudent = () => {
 

//   const student2 = {
//     id: 2,
//     name: "Nguyen Van B",
//     age: 20,
//     class123: "Python"
//   };

//   const student3 = {
//     id: 3,
//     name: "Nguyen Van C",
//     age: 21,
//     class123: "C++"
//   };

//   const student4 = {
//     id: 4,
//     name: "Nguyen Van D",
//     age: 19,
//     class123: "JavaScript"
//   };

//   return [student2, student3, student4];
// };

// //bat dong bo
// setTimeout(() => {
//   console.log(1234)
// }, 0);

// const result = createStudent();
// console.log(result[2].name);
// const [student2, student3, student4] = result;
// console.log(student2.name);

// const products = {
//   id: 1,
//   name: "dien thoai",
//   price: 18,
//   stock: 100,
// };

// const createProduct = () => {
//   const product1 = {
//     id: 1,
//     name: "Iphone",
//     price: 20,
//     stock: 50, 
//   };

//   const product2 = {
//     id: 2,
//     name: "Samsung",
//     price: 30,
//     stock: 100,
//   };

//   return [product1, product2];
// };

// setTimeout(() => {
//   const [product1, product2] = createProduct();

//   console.log(product1.name);  
//   console.log(product1.stock);  

//   console.log(product2.name);   
//   console.log(product2.stock); 
// }, 2000)

// setTimeout in tu 1 den 10
// sau moi 2 giay in ra so do

// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const newPromise = new Promise((resolve, reject) => {
//  return reject("Loi roi");
// }) 

// newPromise.then((data) => {
//   console.log(data);
// })
// newPromise.catch((error) => {
//   console.log(error);
// })

function test() {
  const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve("Thành công");
    } else {
      reject("tai du lieu that bai");
    }
  }, 2000);
});
newPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
}


const success = false;
const func2 = async () => {
  const callPromise = await test();
  console.log(callPromise);
  console.log("Hoan thanh");
}
func2();
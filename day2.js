//음수양수구하기
// function checkNumber(num) {
//   if (num > 0) {
//     //num이 0보다 크면 양수
//     console.log("양수입니다");
//   } else if (num < 0) {
//     //num이 0보다 작으면 음수
//     console.log("음수입니다.");
//   } else {
//     //num이 0이면
//     console.log("0입니다.");
//   }
// }

// checkNumber(5);
// checkNumber(-3);
// checkNumber(0);
//나이 구하기
// function checkAge(age) {
//   if (age >= 18) {
//     //20이면 access granted
//     console.log("Access granted");
//   } else {
//     //16dlaus access denied
//     console.log("Access denide");
//   }
// }

// checkAge(20);
// checkAge(16);

//홀짝구하기
// function checkEvenOdd(num) {
//   if (num % 2 === 0) {
//     console.log("짝수입니다.");
//   } else {
//     console.log("홀수입니다.");
//   }
// }
// checkEvenOdd(4);
// checkEvenOdd(7);

//학점구하기
// function assignGrade(score) {
//   if (score >= 90) {
//     console.log("A");
//   } else if (score >= 80) {
//     console.log("B");
//   } else if (score >= 70) {
//     console.log("C");
//   } else if (score >= 60) {
//     console.log("D");
//   } else {
//     console.log("F");
//   }
// }

// assignGrade(95);
// assignGrade(85);
// assignGrade(75);
// assignGrade(65);
// assignGrade(50);

//for문
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//1번
// function printNumbers() {
//   for (let i = 1; i < 11; i++) {
//     console.log(i);
//   }
// }
// printNumbers();

//2번
// function sumUpTo(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum = sum + 1;
//   }
//   console.log(sum);
// }
// sumUpTo(5);
// sumUpTo(10);

//3번
// function printEventNumbers(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// printEventNumbers([1, 2, 3, 4, 5, 6]);
// printEventNumbers([10, 15, 20, 25, 30]);

// function printTest(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// printTest([2, 5, 10, 12, 15, 17, 21]);

//4번
// function printReversed(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// printReversed([1, 2, 3, 4, 5]);

// uyg 1.
// var sayi = 5;
// if (sayi <= 50 && sayi >= 10) {
//   console.log("Sayi uygun");
// } else {
//   console.log("Sayi uygun degil");
// }

//uyg2
// let sayi = 30;
// if (sayi % 2 == 1 && sayi > 0) {
//   console.log("Sayi pozitif tek sayidir");
// } else {
//   console.log("Sayi pozitif tek sayi degildir ");
// }

//uyg3
// let x = 10,
//   y = 10,
//   z = 10;
// if (x > y && x > z) {
//   if (y > z) {
//     console.log("X>Y>Z");
//   } else {
//     console.log("X>Z>Y");
//   }
// } else if (y > x && y > z) {
//   if (x > z) {
//     console.log("Y>X>Z");
//   } else {
//     console.log("Y>Z>X");
//   }
// } else if (z > y && z > x) {
//   if (y > x) {
//     console.log("Z>Y>X");
//   } else {
//     console.log("Z>X>Y");
//   }
// } else {
//   console.log("Sayilar esittir.");
// }

//uyg4
var vize1 = 50;
var vize2 = 25;
var final = 55;

let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;
if (ortalama >= 50 && final >= 50) {
  console.log(ortalama + " ile geçtiniz");
} else if (ortalama < 50 && final >= 70) {
  console.log(ortalama + " ile geçtiniz");
} else {
  console.log(ortalama + " ile Kaldınız");
}

// let toplam = 0;
// for (let i = 1; i <= 10; i++) {
//   toplam += i;
// }
// console.log(toplam);

let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5];
let toplam = 0;
// console.log(
//   sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5] // dizi toplamı için bu sekilde tek tek toplamak yerine döngü kullanmalıyız
// );

// for (let i = 0; i < sayilar.length; i++) {
//   //console.log(sayilar[i]); // sayilar dizisinin i. elemanını yazdır.
//   toplam += sayilar[i];
// }

// for (let index in sayilar) {
//   // in: sayilar dizisi içindeki bütün elemanların index numarasını index değişkeni içine aktarmak
//   toplam += sayilar[index];
// }

// for (let sayi of sayilar) {
//   // of: sayilar dizisindeki her eleman atanana kadar sayi değiskenine atarç
//   toplam += sayi;
// }
console.log(toplam);

let user = {
  name: "Sadık Turan",
  username: "sadikturan",
  password: "12345",
  email: "info@sadikturan.com",
};

for (let key in user) {
  // object ile döngü kullanımı: objenin indeks numarası keye karsılık gelir.
  console.log(key);
  console.log(user[key]);
}
